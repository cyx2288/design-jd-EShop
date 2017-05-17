<template>

  <div>
    <div class="main">
      <h3>全局颜色（颜色可根据自己的页面需求调整深浅）</h3>
  <!--    <div class="title">主色调：</div>
      <div class="color" style="background-color: #10a6e2">#10a6e2</div>-->
      <div class="title">导航颜色：（渐变上：#3b4351下：#202329）</div>
      <div class="color" style=" background: -webkit-linear-gradient(#202329, #3b4351);background: -o-linear-gradient(#202329, #3b4351); background: -moz-linear-gradient(#202329, #3b4351); background: linear-gradient(#202329, #3b4351); /* 标准的语法 */">#3b4351~#202329</div>
      <div class="title">京东色：</div>
      <div class="color" style="background-color: #c91623">#c91623</div>
      <div class="title">辅助色：</div>
      <div class="color" style="background-color: #e53e42">#e53e42</div>
    </div>
    <div class="main">
      <h3>背景色</h3>
      <div class="title">首页、各个页面背景颜色：</div>
      <div class="color other" style="background-color: #f5f5f9">#f5f5f9</div>
      <div  class="title">表单背景颜色：</div>
      <div class="color other" style="background-color: #ffffff">#ffffff</div>
    </div>
    <div class="main">
      <h3>文字颜色</h3>
      <div class="title">主要文字颜色，默认状态：</div>
      <div class="color" style="background-color: #4a4a4a">#4a4a4a</div>
      <div class="title">输入框内等提示性文字：</div>
      <div class="color" style="background-color: #ababab">#ababab</div>
      <br/>
      <div class="title">失效文字，辅助文字：</div>
      <div class="color other" style="background-color: #dddddd">#dddddd</div>
      <div class="title">按钮文字：</div>
      <div class="color other" style="background-color: #ffffff">#ffffff</div>
      <br/>
      <div class="title">重要醒目特殊文字，报错等（不宜出现很多）：</div>
      <div class="color" style="background-color: #ff4646">#ff4646</div>
      <div class="title">阴影颜色点击效果颜色：</div>
      <div class="color other" style="background-color: #e9e9e9">#e9e9e9</div>
      <br/>
      <div class="title">特殊提示文字：</div>
      <div class="color" style="background-color: #10A6E2">#10A6E2</div>
      <div class="title">用于热门推荐、赠品附件等特殊文字：</div>
      <div class="color" style="background-color: #fc6329">#fc6329</div>
    </div>
    <div class="main">
      <h3>分割线颜色</h3>
      <div class="title">表单、产品等分割线（1px 前后各空15px）：</div>
      <div class="color other" style="background-color: #dddddd">#dddddd</div>
    </div>
  </div>

</template>
<style scoped>


  .main > div {


    line-height: 30px;
    margin: 10px 5px;
    text-align: left;

  }

  .color {
    width: 300px;
    height: 50px;
    color: white;
    padding-left: 20px;
   /* border-radius: 20px;*/
    box-shadow: 2px 2px 5px #ababab;

  }

  .color.other {
    color: #4a4a4a;

  }



</style>
