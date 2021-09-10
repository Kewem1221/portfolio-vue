<template>
  <footer>
    <span>&#169; 2021 Junhao Liang</span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  margin: 2rem auto 1rem;
}

footer span {
  color: var(--text-color-2);
}
</style>