<template>

  <div>
    <div class="main">

      <h3>普通导航按钮</h3>
      <div class="title">设计流程：</div>
      <div>所有图标先以800px*800px设计，在等比例缩放到需要的尺寸，提高图标的精度</div>
      <div class="title">设计规则：</div>
      <div>1、单线图标：在设计阶段（即800px的阶段），线条宽度30px，线条颜色#4a4a4a</div>
      <div>2、圆角：图标四个角不允许出现尖锐转角，必须以圆角，图标中间可以适当放宽要求，但也以圆角设计为首</div>
      <div>3、最终尺寸：在评审结束后，缩放至56px*56px</div>
      <div>4、最终交付：三组图标，分别分为单线两组，填充一组（示例背景色为了方便观察白色图标）</div>
      <div>5、命名规则：icon_(放置的页面or业务)_(代表的功能)_(图标的颜色).png，如：icon_homepage_home_blue.png</div>
      <br>
      <div>*此处icon为嘉福icon，京东图标颜色均为红色<span>#ff4646</span>或者<span>#c91623</span>，确定之后颜色图标均统一</div>
      <div class="icon">
        <img src="../../../assets/png/icon_homepage_home_black.png"/>
        <img src="../../../assets/png/icon_homepage_home_white.png"/>
        <img src="../../../assets/png/icon_homepage_home_blue.png"/>
        <img src="../../../assets/png/icon_homepage_card_black.png"/>
        <img src="../../../assets/png/icon_homepage_card_white.png"/>
        <img src="../../../assets/png/icon_homepage_card_blue.png"/>
      </div>

    </div>

<!--    <div class="main">

      <h3>业务图标</h3>
      <div class="title">设计流程：</div>
      <div>先以800px*800px设计中间矢量形状，再放入色块中，等比例缩放到需要的尺寸，提高图标的精度</div>
      <div class="title">设计规则：</div>
      <div>1、图标形状：能将图形填充到整个色块中，饱满充实</div>
      <div>2、圆角：图标中不允许出现尖锐转角，必须以圆角，有固定业务logo可适当放宽</div>
      <div>3、颜色：
        <ul>
          <li>色块使用渐变色：颜色使用请参考先有的配色方案，普通共三种方案，黄色，蓝色，绿色。</li>
          <li>形状使用渐变色：不可使用纯白色，用渐变色，根据不同的色块背景色配置，具体请参考原有的配色方案。</li>
          <li>形状阴影使用纯色：根据不同的色块背景色配置，具体请参考原有的配色方案。</li>
        </ul>
      </div>
      <div>4、最终尺寸：在评审结束后，缩放至90px*90px</div>
      <div>5、最终交付：一组图标</div>
      <div>6、命名规则：icon_jfservice_(具体业务).png，如：icon_jfservice_crediet.png</div>

      <div class="icon normal">
        <img src="../../../assets/png/icon_jfservice_fapiao.png"/>
        <img src="../../../assets/png/icon_jfservice_crediet.png"/>
        <img src="../../../assets/png/icon_jfservice_phonepay.png"/>
        <img src="../../../assets/png/icon_jfservice_iou.png"/>
        <img src="../../../assets/png/icon_jfservice_welfare.png"/>
      </div>

    </div>-->


  </div>

</template>
<style scoped>

  .main > div {

    line-height: 50px;
    margin: 0 5px;

  }
  .main > div > span {

    font-weight: bolder;
    color: #ff4646;

  }

  .title {
    padding-left: 30px;
    font-family: '微软雅黑';
    font-weight: bold;

  }

  span {
    font-weight: normal;
  }

  small {
    font-weight: normal;
  }

  .main .icon {
    text-align: center;
    background-color: #dddddd;
    line-height: normal;
    margin: 50px 0;
    margin-top: 0;
  }

  .main .icon.normal{
    background-color: #fff;
  }
  .main .icon img{
    margin: 0 10px;
  }

</style>
