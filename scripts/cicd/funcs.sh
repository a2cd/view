#!/bin/sh

setup_ssh() {
  mkdir -p ~/.ssh/
  echo "$SSH_PRIVATE_KEY" > ~/.ssh/"$HOST_KEY".pri.key
  chmod 600 ~/.ssh/"$HOST_KEY".pri.key
  cat >> ~/.ssh/config <<END
Host $HOST_KEY
  HostName $SSH_HOST
  User $SSH_USER
  IdentityFile ~/.ssh/$HOST_KEY.pri.key
  StrictHostKeyChecking no
END
}

sync_files() {
  rsync -avz --progress ./dist/ a2cd:/usr/local/nginx/html/view/dist/
}

reload_nginx() {
  ssh a2cd "docker exec nginx nginx -s reload"
}

npm_run_build() {
  if test "$CI_COMMIT_REF_NAME" == "dev"; then
    npm run build
  elif test "$CI_COMMIT_REF_NAME" == "qas"; then
    npm run qas
  elif test "$CI_COMMIT_REF_NAME" == "main"; then
    npm run prd
  fi
}


docker_login() {
  echo "${HARBOR_PASSWORD}" | docker login -u "${HARBOR_USER}" --password-stdin "${HARBOR_URL}"
}


docker_build_image() {
  echo "${BUILD_IMAGE_NAME}":"${VERSION}"
  docker build -t "${BUILD_IMAGE_NAME}":latest --rm=true .
}


docker_push_image() {
  if test "$CI_COMMIT_REF_NAME" == "qas"; then
    docker tag "${BUILD_IMAGE_NAME}":latest "${HARBOR_URL}"/"${HARBOR_PROJECT}"/"${BUILD_IMAGE_NAME}":QAS
    docker push "${HARBOR_URL}"/"${HARBOR_PROJECT}"/"${BUILD_IMAGE_NAME}":QAS
  elif test "$CI_COMMIT_REF_NAME" == "main"; then
    docker tag "${BUILD_IMAGE_NAME}":latest "${HARBOR_URL}"/"${HARBOR_PROJECT}"/"${BUILD_IMAGE_NAME}":latest
    docker tag "${BUILD_IMAGE_NAME}":latest "${HARBOR_URL}"/"${HARBOR_PROJECT}"/"${BUILD_IMAGE_NAME}":"${VERSION}"
    docker push "${HARBOR_URL}"/"${HARBOR_PROJECT}"/"${BUILD_IMAGE_NAME}":latest
    docker push "${HARBOR_URL}"/"${HARBOR_PROJECT}"/"${BUILD_IMAGE_NAME}":"${VERSION}"
  fi
}


cosign_image() {
  if test "$CI_COMMIT_REF_NAME" == "qas"; then
    cosign sign --key "${COSIGN_KEY}" "${HARBOR_URL}"/"${HARBOR_PROJECT}"/"${BUILD_IMAGE_NAME}":QAS
  elif test "$CI_COMMIT_REF_NAME" == "main"; then
    cosign sign --key "${COSIGN_KEY}" "${HARBOR_URL}"/"${HARBOR_PROJECT}"/"${BUILD_IMAGE_NAME}":latest
    cosign sign --key "${COSIGN_KEY}" "${HARBOR_URL}"/"${HARBOR_PROJECT}"/"${BUILD_IMAGE_NAME}":"${VERSION}"
  fi
}


create_git_tag() {
  curl --request POST --header "PRIVATE-TOKEN:${GITLAB_KEY}" "${GITLAB_URL}/api/v4/projects/${CI_PROJECT_ID}/repository/tags?tag_name=${1}&ref=${CI_COMMIT_REF_NAME}"
}
