<template>
  <Header @change-theme="changeTheme" :darkTheme="darkTheme" />
  <main>
    <Home />
    <Skills />
    <Awards />
  </main>
  <Footer />
</template>

<script>
// Import components
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import Skills from "./components/Skills.vue";
import Awards from "./components/Awards.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  data() {
    return {
      darkTheme: false
    }
  },

  components: {
    Header,
    Home,
    Skills,
    Footer,
    Awards,
  },

  methods: {
    changeTheme() {
      document.querySelector("body").classList.toggle("dark-theme")
      this.darkTheme = !this.darkTheme
    },
  },
};
</script>

<style>
:root {
  --bg-color-1: rgb(240, 240, 240);
  --bg-color-1-rgba: rgba(240, 240, 240, 0.8);
  --bg-color-2-rgba: rgba(0, 0, 0, 0.7);
  --bg-color-3: white;
  --text-color-1: rgb(182, 19, 247);
  --text-color-2: rgb(70, 70, 70);

  --width-1: 90vw;
  --width-1-alt: 40vw;
}

.dark-theme {
  --bg-color-1: rgb(40, 40, 40);
  --bg-color-1-rgba: rgba(40, 40, 40, 0.8);
  --bg-color-3: rgb(55, 55, 55);
  --text-color-2: rgb(255, 220, 255);
}

*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: none;
}

body {
  font-family: sans-serif;
  background-color: var(--bg-color-1);
  width: 100vw;
  /*to prevent dragging the whole window on touch screen*/
  overflow-x: hidden;
}

section {
  margin: 2rem auto;
}
section:first-child {
  margin-top: 0;
}

section > h2 {
  text-align: center;
  color: var(--text-color-1);
  font-size: 1.5rem;
  font-weight: normal;
  margin-bottom: 1rem;
  letter-spacing: 3px;
}

h2 > i {
  margin-right: 1rem;
}

ul {
  row-gap: 1rem;
  list-style-type: none;
  color: var(--text-color-2);
}

a {
  text-decoration: none;
}

ul li {
  line-height: 1.5rem;
}
</style>
