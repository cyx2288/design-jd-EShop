<template>

  <div>
    <div class="main">
    <h3>固定底部按钮
      <small>（高度55px，宽度自适应 *如有特殊按钮根据实际情况定宽高）</small>
    </h3>
    <div>
      <div class="title">普通状态：</div>
      <div class="fixed_button" style="background-color: #e53e42 ;color: #fff">确认</div>
      <!--<div class="fixed_button" style="background-color: #10a6e2;color: #fff">下一步</div>-->
      <div class="title">按下状态：(不透明度变为0.6)</div>
      <div class="fixed_button" style="background-color: #e53e42 ;color: #fff ;opacity: .6">确认</div>
      <!--<div class="fixed_button" style="background-color: #10a6e2;color: #fff ;opacity: .6">下一步</div>-->
      <div class="title">未激活状态：</div>
      <div class="fixed_button" style="background-color: #dddddd;color: #fff">下一步</div>
    </div>
      <div class="main">
        <h3>文档中圆角按钮
          <small>（高度44px，宽度左右预留15px，圆角5px）</small>
        </h3>
        <div>
          <div class="title">普通状态：</div>
        <!--  <div class="document_button" style="background-color: #10a6e2;color: #fff">下一步</div>
          <div class="document_button" style="border:1px solid #10a6e2;color: #10a6e2">回到首页</div>-->
          <div class="document_button" style="background-color: #e53e42 ;color: #fff">确认</div>
          <div class="document_button" style="border:1px solid #ff4646;color: #ff4646">查看订单</div>
          <div class="title">按下状态：(不透明度变为0.6)</div>
          <!--<div class="document_button" style="background-color: #10a6e2;color: #fff ;opacity: .6">下一步</div>
          <div class="document_button" style="border:1px solid #10a6e2;color: #10a6e2;opacity: .6">回到首页</div>-->
          <div class="document_button" style="background-color: #e53e42 ;color: #fff ;opacity: .6">确认</div>
          <div class="document_button" style="border:1px solid #ff4646;color: #ff4646;opacity: .6">查看订单</div>
          <div class="title">未激活状态：</div>
          <div class="document_button" style="background-color: #dddddd;color: #fff">下一步</div>
        </div>
      </div>
      <div class="main">
        <h3>设计案例：</h3>
        <div class="title">底部固定tab按钮（参考）实际根据页面需求</div>
        <div><img src="../../../assets/images/tab.png"></div>
      </div>
  </div>
  </div>

</template>
<style scoped>

  .main > div {

    line-height: 50px;
    margin: 0 5px;

  }
  .main > div img{
   padding-left: 200px;
    margin: auto;
    width: 60%;

  }


  .title {
    padding-left: 30px;
    font-family: '微软雅黑';

  }

  span {
    font-weight: normal;
  }

  small {
    font-weight: normal;
  }

  .fixed_button {

    margin: 10px auto;
    width: 600px;
    height: 55px;
    text-align: center;
    font-size: 18px;
  }
  .document_button{

    border-radius: 5px;
    margin: 10px auto;
    width: 400px;
    line-height: 44px;
    height: 44px;
    text-align: center;
    font-size: 18px;

  }


</style>
