<template>
  <div class="vision-view">
    <h1>La vision</h1>
    <p>Fada on se pèle chez vous !</p>
    <img src="~../assets/images/france.png" />
  </div>
</template>

<script>

  export default {
    name: 'Vision'
  }

</script>

<style lang="scss" scoped>

  @import "~assets/styles/variables";

  .vision-view{

    p{
      font-size: 2em;
    }

    img{
      height: 800px;
      width: auto;
      margin: 0 50px 0 auto;
    }

  }

</style>
