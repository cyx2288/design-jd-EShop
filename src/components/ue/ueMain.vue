<template>

  <div id="ue">
    <div class="main_list">
      <importantue></importantue>
    </div>
    <div class="main_list">
      <color></color>
    </div>
    <div class="main_list">
      <fontue></fontue>
    </div>
    <div class="main_list">
      <buttonue></buttonue>
    </div>
    <div class="main_list">
      <iconue></iconue>
    </div>
    <div class="main_list">
    <bannerue></bannerue>
  </div>
    <div class="main_list">
      <formue></formue>
    </div>
    <div class="main_list">
      <floatue></floatue>
    </div>
  </div>
</template>

<script>

  import color from './color/color'
  import fontue from './font/font'
  import buttonue from './button/button'
  import iconue from './icon/icon'
  import importantue from './important/important'
  import bannerue from './banner/banner'
  import formue from './form/form'
  import floatue from './float/float'

  export default{

    components: {color, fontue, buttonue,iconue,importantue,bannerue,formue,floatue }

  }

</script>
<style>


  .main_list {

    text-align: center;
    padding: 20px 0;
    border-bottom: 1px #10a6e2 dashed;

  }

  .main_list > div {

    width: 990px;
    margin: 0 auto;

  }

  .main_list:after {
    content: '';
    display: block;
    clear: both;
  }

</style>
