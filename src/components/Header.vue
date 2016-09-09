<template>
  <header v-link="'/home'" id="header">
    <p>Retour</p>
  </header>
</template>

<script>

  export default {
    name: 'Header'
  }

</script>


<style lang="scss" scoped>

  @import "~assets/styles/variables";
  @import "~assets/styles/fonts";

  #header{
    position: absolute;
    z-index: 9999;
    right: 0;
    top: 0;
    width: 300px;
    height: 100px;
    padding-top: 30px;

    p{
      color: $black;
      font-size: 1.5em;
      text-transform: uppercase;

      &:before {
        font-family: 'Glyphicons Halflings';
        top: 2px;
        right: 125px;
        content: "\e091";
        padding-right: 30px;
      }
    }
  }

</style>
