<template>

  <div>
    <div class="main">
      <h3>中文字体</h3>
      <div class="title">页面主体所有内容：<span style="font-family: 'Microsoft YaHei'">微软雅黑（Microsoft YaHei）</span></div>

      <div class="title">Banner所有内容：<span style="font-family: '黑体'">不可使用<span style="font-family: 'Microsoft YaHei'"> 微软雅黑 </span>、<span
        style="font-family: '幼圆'"> 幼圆 </span>、<span style="font-family: '宋体'"> 宋体 </span>以外的字体，如需艺术字请自行钢笔工具，如有字体侵权问题请自行负责。</span>
      </div>
    </div>

    <div class="main">
      <h3>英文字体</h3>
      <div class="title">页面主体所有内容：<span
        style="font-family: 'arial','微软雅黑">Arial（Arial系列字体，如Arial Light、Arial Regular）</span></div>
    </div>

    <div class="main">
      <h3>字号
        <small>（具体场景可以适当灵活，这里指通用场景）</small>
      </h3>
      <div class="title">【14px】：<span>主要页面文字，输入框，文案，翻页文字等</span></div>
      <div class="title">【36px】：<span>醒目标题文字</span></div>
      <div class="title">【20px、16px】：<span>辅助文字</span></div>
      <div class="title">【18px】：<span>按钮文字</span></div>
      <div class="title">【12px】：<span>辅助性提示文字</span></div>

    </div>

  </div>

</template>
<style scoped>


  .main > div {

    line-height: 50px;
    margin: 0 5px;

  }

  .title {
    padding-left: 30px;
    font-weight: bold;

  }

  span {
    font-weight: normal;
  }

  small {
    font-weight: normal;
  }

</style>
