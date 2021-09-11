<template>
  <div :class="[{'scale': dragging}, 'slide']">
    <img
      class="slide-img"
      :src="projectImg"
      :alt="projectImg"
      @dragstart="disableDrag($event)"
    />
    <h3 class="slide-title">{{ projectName }}</h3>
    <p class="slide-info">{{ projectInfo }}</p>
    <a class="slide-btn" :href="projectLink">{{ btnText }}</a>
  </div>
</template>

<script>
export default {
  name: "Project",

  props: {
    projectImg: String,
    projectName: String,
    projectInfo: String,
    projectLink: String,
    btnText: String,
    dragging: Boolean,
  },

  methods: {
    disableDrag(e) {
      if (e) e.preventDefault();
    },
  },
};
</script>

<style scoped>
.slide-img {
  height: calc(var(--width-1) / 3 * 2);
  width: var(--width-1);
  border-radius: 0.5rem;
}

.slide {
  display: grid;
  justify-items: center;
  width: 100vw;
  padding: 0 1rem;
  row-gap: 1rem;
  transition: transform 0.3s ease-in-out;
}

.scale {
  transform: scale(0.9);
}

.slide-title {
  color: var(--text-color-2);
  font-size: 1.5rem;
  width: var(--width-1);
  border-bottom: var(--text-color-1) solid 2px;
  padding-bottom: 0.5rem;
}

.slide-info {
  color: var(--text-color-2);
  line-height: 1.5rem;
  width: var(--width-1);
}

.slide-btn {
  text-decoration: none;
  text-align: center;
  letter-spacing: 3px;
  height: max-content;
  max-width: 390px;
  background: none;
  padding: 0.3rem 0.6rem;
  font-size: 1rem;
  color: var(--text-color-1);
  border: var(--text-color-1) solid 2px;
  border-radius: 0.5rem;
  transition: 0.3s;
}
.slide-btn:hover {
  cursor: pointer;
  border-color: var(--bg-color-1);
  color: var(--bg-color-1);
  background-color: var(--text-color-1);
}

@media screen and (min-width: 768px) {
  .slide {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    justify-items: left;
  }

  .slide-img {
    grid-row: 1/4;
    justify-self: right;
    max-height: calc(var(--width-1-alt) / 3 * 2);
  }

  .slide-title,
  .slide-img,
  .slide-info {
    max-width: var(--width-1-alt);
  }
}
</style>