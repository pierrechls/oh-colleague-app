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

  @font-face {
  	font-family: 'Glyphicons Halflings';
    src: url('~../assets/fonts/glyphicons/glyphicons-halflings-regular.eot');
    src: url('~../assets/fonts/glyphicons/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'),
         url('~../assets/fonts/glyphicons/glyphicons-halflings-regular.woff2') format('woff2'),
         url('~../assets/fonts/glyphicons/glyphicons-halflings-regular.woff') format('woff'),
         url('~../assets/fonts/glyphicons/glyphicons-halflings-regular.ttf') format('truetype'),
         url('~../assets/fonts/glyphicons/glyphicons-halflings-regular.svg#@{icon-font-svg-id}') format('svg');
  }

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
        top: 2px;
        right: 125px;
        content: "<";
        padding-right: 30px;
      }
    }
  }

</style>
