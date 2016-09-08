<template>
  <div class="appelation-view">
      <h1>Appelation</h1>
      <h4>Source : Dictionnaire Larousse</h3>
      <div class="quote">
        <p>Personne qui remplit la même fonction publique, civile ou militaire qu'une autre.</p>
      </div>
      <div class="quote">
        <p>Personne qui travaille dans la même entreprise, dans le même établissement scolaire qu'une autre.</p>
      </div>
      <div class="quote">
        <p>Camarade, copain, ami. : Salut, collègue !</p>
      </div>
  </div>
</template>

<script>

  export default {
    name: 'Appelation'
  }

</script>

<style lang="scss" scoped>

  @import "~assets/styles/variables";

  .appelation-view{
    h1{
      font-size: 4em;
      text-transform: uppercase;
      color: $green;
    }
    h4{
      font-size: 2em;
      text-transform: uppercase;
      color: $black-transparancy;
      margin-bottom: 6em;
    }
    .quote{
      margin: 8em auto;
      width: auto;

      p{
        font-size: 2em;

        &:before, &:after{
          font-size: 2em;
          color: $green;
        }
        &:before{
          content: '“';
          margin-right: 20px;
        }
        &:after{
          content: '”';
          margin-left: 20px;
        }
      }
    }
  }

</style>
