<template>
  <section class="awards" id="awards">
    <h2><i class="uil uil-award"></i>荣誉&证书</h2>
    <ul class="award-list">
      <li>
        2020-2021年度第二届全国大学生算法设计与编程挑战赛（秋季赛）成功参赛奖（Python）
      </li>
      <li>2020年第二届全国高校计算机能力挑战赛人工智能应用赛决赛三等奖</li>
      <li>2020年全国高校计算机能力挑战赛程序设计赛（Python）华东区域二等奖</li>
      <li>2020年全国高校计算机能力挑战赛程序设计赛（Python）决赛三等奖</li>
      <li>
        计算机软件著作权登记证书（软著登字第6907384号）NC Viewer & Visualization
        v1.0
      </li>
      <li>上海市高等学校信息技术水平考试证书 二级Python程序设计（成绩优秀）</li>
      <li>CET-6 大学英语六级</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Awards",
};
</script>

<style scoped>
.awards {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.award-list {
  display: grid;
}

.award-list li {
  text-align: center;
  padding: 0.5rem 1rem;
  transition: transform 0.3s;
  width: var(--width-1);
  border-radius: 0.5rem;
  background-color: var(--bg-color-3);
}

.award-list li:hover {
  transform: scale(1.1);
}

@media screen and (min-width: 768px) {
  .award-list {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

  .award-list li {
    max-width: var(--width-1-alt);
  }
}
</style>