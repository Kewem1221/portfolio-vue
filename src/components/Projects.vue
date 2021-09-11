<template>
  <section class="projects" id="projects">
    <h2><i class="uil uil-window"></i>项目</h2>
    <div
      class="slider"
      :style="style"
      @mousedown="touchStart($event)"
      @mouseup="touchEnd($event)"
      @mouseleave="touchEnd($event)"
    >
      <Project
        v-for="project in projects"
        :key="project.name"
        :projectImg="project.img"
        :projectName="project.name"
        :projectInfo="project.info"
        :projectLink="project.link"
        :btnText="project.btnText"
        :dragging="dragging"
      />
    </div>
    <div class="pagination"></div>
  </section>
</template>

<script>
import Project from "./Project.vue";

export default {
  name: "Projects",

  data() {
    return {
      projects: [
        {
          img: require("../assets/project1.jpg"),
          name: "Flappy Bird",
          info: "Bird、障碍物和整个网页应用的逻辑由面向对象的方式编写，均封装在Javascript的类中。游戏支持键盘和触屏操作，适配手机、iPad、笔记本等设备的屏幕，兼容横竖屏。",
          link: "https://kewem1221.github.io/Flappy-Bird/",
          btnText: "试玩此游戏",
        },
        {
          img: require("../assets/project2.jpg"),
          name: "Doodle Jump",
          info: "实现方法和屏幕适配性与Flappy Bird一样，但支持触屏手势控制。",
          link: "https://kewem1221.github.io/Doodle-Jump/",
          btnText: "试玩此游戏",
        },
        {
          img: require("../assets/project3.jpg"),
          name: "Flask Blog",
          info: "博客网站的后端主要使用Python、Flask、SQLAlchemy、SQLite建立。实现的功能有：（1）注册、登录、退出账号，使用邮件重置密码，设置头像；（2）创建、更新、删除帖子。",
          link: "https://github.com/Kewem1221/Flask-Blog",
          btnText: "查看 GitHub repo",
        },
      ],
      dragStartX: 0,
      slideIndex: 0,
      dragging: false,
      style: { transform: "translateX(0px)" },
    };
  },

  components: {
    Project,
  },

  methods: {
    touchStart(e) {
      this.dragging = true;
      this.dragStartX = this.getPositionX(e);
    },

    touchEnd(e) {
      this.dragging = false;
      const dragDistance = this.getPositionX(e) - this.dragStartX;

      if (dragDistance < -100 && this.slideIndex < this.numProjects - 1) {
        this.slideIndex += 1;
      }
      if (dragDistance > 100 && this.slideIndex > 0) {
        this.slideIndex -= 1;
      }
    },

    getPositionX(e) {
      return e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
    },

    setSlideByIdx(idx) {
      const translateX = -idx * window.innerWidth;
      this.style.transform = `translateX(${translateX}px)`;
    },
  },

  watch: {
    slideIndex(newValue) {
      this.setSlideByIdx(newValue);
    },
  },

  computed: {
    numProjects() {
      return this.projects.length;
    },
  },

  mounted() {
    // Prevent images from being dragged
    document.querySelectorAll(".slide-img").forEach((img) => {
      img.addEventListener("dragstart", (e) => {
        e.preventDefault();
      });
    });
  },
};
</script>

<style scoped>
.projects {
  overflow: hidden;
}

.slider {
  display: inline-flex;
  margin: 0.5rem 0;
  /* transform: translateX(0); */
  transition: transform 0.3s ease-in-out;
}

.pagination {
  display: flex;
  margin-top: 1rem;
  justify-content: center;
}

.bullet {
  display: block;
  height: 1rem;
  width: 1rem;
  border-radius: 0.5rem;
  background-color: var(--text-color-2);
  margin: 0 0.5rem;
}

.bullet:hover {
  cursor: pointer;
}
</style>