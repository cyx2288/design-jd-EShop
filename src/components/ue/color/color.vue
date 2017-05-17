<template>

  <div>

    <div class="list_left_title">
      <div><img src="../../../assets/png/color_lens_128px_1181767.png"/></div>
      <div>颜色</div>
    </div>
    <div class="list_right_mian">

      <color_main></color_main>

    </div>

  </div>

</template>


<script>
  import color_main from './color_main'

  export default{

    components: {color_main}

  }

</script>

<style>

  .list_left_title {
    float: left;
    width: 100px;
    padding-right: 40px;
    height: 220px;
    padding-top: 80px;
    position: relative;

  }


  .list_left_title img {
    width: 100px;
    height: 100px;

  }

  .list_left_title div {
    font-size: 24px;
  }

  .list_right_mian {
    text-align: left;
    margin-left: 140px;

  }


</style>
