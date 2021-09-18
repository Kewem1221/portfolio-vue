<template>
  <section class="skills" id="skills">
    <h2><i class="uil uil-wrench"></i>技能</h2>
    <ul class="skill-list">
      <li>
        <span class="item-bullet"></span>
        熟练掌握前端三大基础语言：HTML、CSS、JavaScript。
        熟练运用html5+css3进行页面布局，适配各种设备屏的幕。
      </li>
      <li>
        <span class="item-bullet"></span>
        了解Vue、React框架，了解AJAX。
      </li>
      <li>
        <span class="item-bullet"></span>
        熟悉Python，在网络爬虫、后端开发、人工智能（在IEEE上发过文章）、图像处理、
        数据可视化、数据分析、应用开发等领域有一定实践。
      </li>
      <li>
        <span class="item-bullet"></span>
        熟悉面向对象的编程方式，熟悉GitHub的使用，了解SQLite，了解数据结构。
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Skills",
};
</script>

<style scoped>
.skills {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.skill-list {
  display: grid;
  width: var(--width-1);
  background-color: var(--bg-color-3);
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.skill-list li {
  border-bottom: var(--text-color-2) dotted 1px;
  padding-bottom: 0.5rem;
}

.item-bullet {
  display: inline-block;
  height: 1rem;
  width: 1rem;
  border-radius: 0.5rem;
  background-color: var(--text-color-1);
  margin-right: 1rem;
}

@media screen and (min-width: 768px) {
  .skill-list {
    max-width: calc(var(--width-1-alt) * 2 + 2rem);
  }
}
</style>