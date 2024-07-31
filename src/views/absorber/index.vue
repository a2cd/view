<template>
  <div class="container">
    <vue-particles id="tsparticles" :particlesLoaded="particlesLoaded" :options="options"/>
  </div>
</template>

<script lang="ts" setup>

const particlesLoaded = async (container: any) => {
  console.log("Particles container loaded", container);
};

const options = {
  "autoPlay": true,
  "fpsLimit": 120,
  "background": {
    "color": {
      "value": "#000000"
    },
    "image": "",
    "position": "",
    "repeat": "",
    "size": "",
    "opacity": 1
  },
  "backgroundMask": {
    "enable": false,
    "composite": "destination-out",
    "cover": {
      "color": {
        "value": "#fff"
      },
      "opacity": 1
    },
  },
  "fullScreen": {
    "enable": true,
    "zIndex": 0
  },
  "clear": true,
  "defaultThemes": {},
  "delay": 0,
  "detectRetina": true,
  "duration": 0,
  "interactivity": {
    "detectsOn": "window",
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onDiv": {
        "selectors": {},
        "enable": false,
        "mode": {},
        "type": "circle"
      },
      "onHover": {
        "enable": false,
        "mode": {},
        "parallax": {
          "enable": false,
          "force": 2,
          "smooth": 10
        }
      },
      "resize": {
        "enable": true,
        "delay": 0.5
      }
    },
    "modes": {
      "trail": {
        "delay": 1,
        "pauseOnStop": false,
        "quantity": 1
      },
      "attract": {
        "distance": 50,
        "duration": 1,
        "easing": "ease-out-quad",
        "factor": 1,
        "maxSpeed": 10,
        "speed": 5
      },
      "bounce": {
        "distance": 200
      },
      "bubble": {
        "distance": 200,
        "duration": 0.4,
        "mix": false,
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "mix": false,
          "selectors": {}
        }
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 300,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "push": {
        "default": true,
        "groups": [],
        "quantity": 10
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 500,
        "duration": 1,
        "factor": 100,
        "speed": 1,
        "maxSpeed": 1,
        "easing": "ease-out-quad",
        "divs": {
          "distance": 500,
          "duration": 1,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 1,
          "easing": "ease-out-quad",
          "selectors": {}
        }
      },
      "slow": {
        "factor": 3,
        "radius": 200
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#ffffff"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 2000
        }
      },
      "absorbers": {
        "color": {
          "value": "#ffffff"
        },
        "draggable": false,
        "opacity": 1,
        "destroy": true,
        "orbits": false,
        "size": {
          "value": 50,
          "density": 5,
          "limit": {
            "radius": 0,
            "mass": 0
          }
        }
      }
    }
  },
  "manualParticles": [],
  "particles": {
    "number": {
      "value": 66, // 粒子数量
      "limit": {
        "mode": "delete",
        "value": 88
      },
      "density": {
        "enable": false,
        "width": 1920,
        "height": 1080
      }
    },
    "color": {
      "value": "#ffffff",
      "animation": {
        "h": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        },
        "s": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        },
        "l": {
          "count": 0,
          "enable": false,
          "speed": 1,
          "decay": 0,
          "delay": 0,
          "sync": true,
          "offset": 0
        }
      }
    },
    "move": {
      "enable": true,
      "angle": {
        "offset": 0,
        "value": 90
      },
      "attract": {
        "enable": false, // 粒子移动相互吸收
        "distance": 100, // 吸收距离
        "rotate": { // 旋转
          "x": 2000,
          "y": 2000
        }
      },
      "center": {
        "x": 50,
        "y": 50,
        "mode": "percent",
        "radius": 0
      },
      "decay": 0,
      "distance": {},
      "direction": "top-left",
      "drift": 0,
      "gravity": {
        "enable": false,
        "acceleration": 9.81, // 重力加速度
        "inverse": false,
        "maxSpeed": 10
      },
      "path": {
        "clamp": true,
        "delay": {
          "value": 0
        },
        "enable": false,
        "options": {}
      },
      "outModes": {
        "default": "out",
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "random": true, // 随机
      "size": false,
      "speed": 0.4, // 移动速度
      "spin": {
        "enable": false,
        "acceleration": 1
      },
      "straight": true,
      "trail": {
        "enable": false,
        "length": 10,
        "fill": {}
      },
      "vibrate": false,
      "warp": true
    },
    "bounce": {
      "horizontal": {
        "value": 1
      },
      "vertical": {
        "value": 1
      }
    },
    "collisions": {
      "enable": false,
      "maxSpeed": 10,
      "mode": "bounce",
      "absorb": {
        "speed": 5
      },
      "bounce": {
        "horizontal": {
          "value": 1
        },
        "vertical": {
          "value": 1
        }
      },
      "overlap": {
        "enable": true,
        "retries": 0
      }
    },
    "effect": {
      "close": true,
      "fill": true,
      "options": {},
      "type": {}
    },
    "groups": [],
    "opacity": {
      "value": {
        "min": 0.1,
        "max": 1
      },
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 2,
        "decay": 0,
        "delay": 0,
        "sync": false,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none"
      }
    },
    "reduceDuplicates": false,
    "shadow": {
      "enable": false,
      "blur": 0,
      "color": {
        "value": "#000"
      },
      "offset": {
        "x": 0,
        "y": 0
      }
    },
    "shape": {
      "close": true,
      "fill": true,
      "options": {},
      "type": ["circle"]
    },
    "size": {
      "value": {
        "min": 1,
        "max": 2
      },
      "animation": {
        "enable": false,
        "count": 0,
        "speed": 5,
        "decay": 0,
        "delay": 0,
        "sync": false,
        "mode": "auto",
        "startValue": "random",
        "destroy": "none"
      }
    },
    "stroke": {
      "width": 0
    },
    "zIndex": {
      "value": 0,
      "opacityRate": 1,
      "sizeRate": 1,
      "velocityRate": 1
    },
    "destroy": {
      "bounds": {},
      "mode": "none",
      "split": {
        "count": 1,
        "factor": {
          "value": 3
        },
        "rate": {
          "value": {
            "min": 4,
            "max": 9
          }
        },
        "sizeOffset": true,
        "particles": {}
      }
    },
    "roll": {
      "enable": false,
      "darken": {
        "enable": false,
        "value": 0
      },
      "enlighten": {
        "enable": false,
        "value": 0
      },
      "mode": "vertical",
      "speed": 25
    },
    "tilt": {
      "enable": false,
      "direction": "clockwise",
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    "wobble": {
      "distance": 5,
      "enable": false,
      "speed": {
        "angle": 50,
        "move": 10
      }
    },
    "life": {
      "count": 0,
      "delay": {
        "value": 0,
        "sync": false
      },
      "duration": {
        "value": 0,
        "sync": false
      }
    },
    "rotate": {
      "value": 0,
      "path": true,
      "direction": "clockwise",
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      }
    },
    "orbit": {
      "enable": false, // 整个屏幕旋转
      "width": 1,
      "opacity": 1,
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "decay": 0,
        "delay": 0,
        "sync": false
      },
      "rotation": {
        "value": 45
      },
    },
    "links": {
      "blink": false,
      "color": {
        "value": "#fff"
      },
      "consent": false,
      "distance": 100,
      "enable": false,
      "frequency": 1,
      "opacity": 1,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#000"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "repulse": {
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    }
  },
  "pauseOnBlur": true,
  "pauseOnOutsideViewport": true,
  "responsive": [],
  "smooth": true,
  "style": {},
  "themes": [],
  "zLayers": 100,
  "name": "Absorbers",
  "absorbers": {
    "color": {
      "value": "#d93c29"
    },
    "draggable": true,
    "opacity": 0.5,
    "destroy": false,
    "orbits": false,
    "size": {
      "value": {
        "min": 1, // 初始状态
        "max": 3 // 最大状态
      },
      "density": 6,
      "limit": {
        "radius": 10,
        "mass": 0
      }
    },
    "position": {
      "x": 85, // 从左到右为x轴，值是百分比
      "y": 25 // 从上到下为y轴，值是百分比
    }
  },
  "motion": {
    "disable": false,
    "reduce": {
      "factor": 4,
      "value": true
    }
  }
}


</script>

<style lang="less" scoped>

</style>
