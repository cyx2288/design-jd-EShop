<template>

  <div id="head">

    <div class="head_text_logo">
      <img src="../../assets/images/logo.png"/>
    </div>

    <h1 class="head_text_big">嘉福京东商城平台 —— 前端设计规范</h1>

    <div class="head_text_small">设计时请遵守，但是要有更好的想法，所有的规矩都是可以用来打破的</div>


  </div>

</template>

<script>


</script>
<style>

  #head{

    padding: 100px 0 60px;
    background: linear-gradient(to right,#0C4684 , #00A9DE);

  }

  .head_text_logo{
    width: 100px;
    height: 100px;
    background-color: white;
    margin: 0 auto 20px;
    border-radius: 50%;
    text-align: center;
    box-shadow: 0 0 10px rgba(0,0,0,.5);

  }

  .head_text_logo img{

    margin-top: 6px;

  }

  .head_text_big {

    color: white;
    font-size: 30px;
    font-weight: normal;

  }

  .head_text_small {

    color: white;
    font-size: 14px;
    opacity: .8;

  }

  .head_text_bottom{

    padding: 10px 0 20px;
    margin-top: 20px;

  }
  .head_text_bottom span{

    font-size: 18px;
    display: inline-block;
    border: 1px solid white;
    border-radius: 5px;
    color: white;
    padding: 5px 30px;
    margin: 0 30px;
    opacity: 1;
    transition:all .3s;
    cursor: pointer;
  }

  .head_text_bottom span:hover{


    background-color: white;
    color: #0C4684;


  }

</style>
