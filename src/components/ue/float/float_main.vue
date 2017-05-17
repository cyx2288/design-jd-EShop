<template>

  <div>

    <div class="main">

      <h3>弹出层/浮层规则</h3>

      <div class="title">底部浮层：</div>

      <div class="title"><span>1、宽度和屏幕宽度一致，高度根据内容需求多少定高度。</span></div>

      <div class="title"><span>2、顶部固定标题，下面是内容。</span></div>

      <div class="title"><span>3、在顶部部的右方有关闭功能键。</span></div>

      <div class="title">弹出层：</div>

      <div class="title"><span>1、左右离屏幕各30px，弹出层根据内容需求居中。</span></div>

      <div class="title"><span>2、顶部固定标题，下面是内容，底部是功能键。在底部的右方有关闭功能键。</span></div>

      <div class="title">示意图：</div>

      <div class="block">

        <div class="title">底部浮层<span>（用于地址选择模块）</span></div>

        <div><img src="../../../assets/images/float1.png"></div>

      </div>

      <div class="block">

        <div class="title">弹出层<span>（居中页面）</span></div>

        <div><img src="../../../assets/images/float2.png"></div>

      </div>


    </div>

  </div>

</template>

<style scoped>

  .main > div {
    line-height: 50px;
    margin: 0 5px;

  }

  .main .block {
    float: left;
    width: 45%;
    text-align: end;
  }

  .main > div img {

    width: 50%;

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

  .banner img {

    display: block;
    margin: 10px auto;
    width: 40%;

  }

</style>
