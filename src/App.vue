<template>
  <div id="main">
    <header>
      <ue_head></ue_head>
    </header>
    <section>
      <router-view></router-view>
    </section>

  </div>
</template>

<script>

  import ue_head from './components/head/head';

  export default {
    name: 'app',
    components: {ue_head}

  }

</script>

<style>
  *{
    font-family: 'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
  }
  #main {

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #4a4a4a;
  }
</style>
