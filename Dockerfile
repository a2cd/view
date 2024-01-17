#FROM nginx:1.25.3
#FROM nginx:1.25.3-alpine
FROM nginx:1.25.3-alpine-slim
COPY dist /usr/share/nginx/html/view/dist
EXPOSE 80
