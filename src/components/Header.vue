<template>
  <header>
    <nav :class="navClassList">
      <div class="nav-header">
        <button class="nav-btn" @click="showMenu">
          <i class="uil uil-bars"></i>
        </button>
        <div class="nav-name">
          <img src="../assets/nav-face.jpg" alt="" />
          <span>Junhao Liang</span>
        </div>
        <button class="theme-btn" @click="$emit('change-theme')">
          <i v-if="darkTheme" class="uil uil-sun"></i>
          <i v-else class="uil uil-moon"></i>
        </button>
      </div>
      <ul :class="['nav-links', {'show-nav-links': showNavLinks}]">
        <li><a href="#home" @click="handleLinkClick($event)">Home</a></li>
        <li><a href="#skills" @click="handleLinkClick($event)">技能</a></li>
        <li><a href="#projects" @click="handleLinkClick($event)">项目</a></li>
        <li>
          <a href="#awards" @click="handleLinkClick($event)">荣誉&证书</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { throttle } from "../main.js";

export default {
  name: "Header",

  data() {
    return {
      navClassList: ["nav-center"],
      showNavLinks: false,
    };
  },

  props: {
    darkTheme: Boolean,
  },

  methods: {
    showMenu() {
      this.showNavLinks = !this.showNavLinks;
    },

    handleWinScroll() {
      if (window.scrollY > 60) {
        this.navClassList.push("add-bg");
      } else {
        this.navClassList = this.navClassList.filter(
          (classname) => classname !== "add-bg"
        );
      }
    },

    handleLinkClick(e) {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").slice(1);
      const targetOffsetTop = document.getElementById(targetId).offsetTop;
      window.scrollTo({ left: 0, top: targetOffsetTop - 64 });
      this.showNavLinks = false;
    },
  },

  mounted() {
    window.addEventListener("scroll", throttle(this.handleWinScroll, 500));
  },
};
</script>

<style scoped>
header {
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 1;
}

.add-bg {
  background: var(--bg-color-1-rgba);
  box-shadow: 0 0.2rem 0.4rem 0 rgb(0, 0, 0, 0.2);
}

.nav-center {
  padding: 0.5rem 1rem;
  color: var(--text-color-1);
}

.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-btn,
.theme-btn {
  font-size: 1.5rem;
  border: none;
  background: transparent;
  color: inherit;
}
.theme-btn:hover,
.nav-btn:hover {
  cursor: pointer;
}

.nav-name {
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-name img {
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
}

.nav-links {
  list-style-type: none;
  height: 0;
  overflow: hidden;
  transition: 0.3s;
  font-size: 1.5rem;
}
.show-nav-links {
  padding-top: 1rem;
  height: 13rem;
}

.nav-links li {
  padding: 0.5rem 0;
}

.nav-links a {
  color: var(--text-color-1);
  transition: color 0.3s;
  letter-spacing: 3px;
}
.nav-links a:hover {
  color: var(--text-color-2);
}

@media screen and (min-width: 768px) {
  .nav-btn {
    display: none;
  }

  .nav-center {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .nav-header {
    column-gap: 0.5rem;
  }

  .nav-links {
    height: max-content;
    font-size: 1rem;
    font-weight: bold;
    padding-top: 0;
  }

  .nav-links li {
    display: inline-block;
    padding: 0.5rem 1rem;
  }
}
</style>