<template>
  <div class="pagination">
    <span
      v-for="i in numProj"
      :key="i"
      :class="['bullet', { current: i - 1 === slideIndex }]"
      @click="$emit('changeSlide', i - 1)"
    ></span>
  </div>
</template>

<script>
export default {
  name: "ProjBullets",

  props: {
    numProj: Number,
    slideIndex: Number,
  },
};
</script>

<style scoped>
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

.current {
  background-color: var(--text-color-1);
}

.bullet:hover {
  cursor: pointer;
}
</style>