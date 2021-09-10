<template>
  <section class="home" id="home"></section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  height: calc(100vw * 0.6);
  background-image: url(../assets/home-bg.png);
  background-size: 100% 100%;
}

@media screen and (min-width: 768px) {
  .home {
    height: calc(100vw * 0.5);
  }
}
</style>