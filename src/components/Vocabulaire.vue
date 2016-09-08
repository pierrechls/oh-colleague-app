<template>
  <div class="vocabulaire-view">
    <h1>Le vocabulaire</h1>
    <div id="vocabulaire">
      <div class="word">
        <h3>Fada</h3>
        <p>Fou / folle</p>
      </div>
      <div class="word">
        <h3>S’enfader</h3>
        <p>S’énerver</p>
      </div>
      <div class="word">
        <h3>Oh fatche !</h3>
        <p>Oh putain ! </p>
      </div>
      <div class="word">
        <h3>Peguer</h3>
        <p>Coller</p>
      </div>
      <div class="word">
        <h3>Peucher</h3>
        <p>Le / la pauvre</p>
      </div>
      <div class="word">
        <h3>Faire une cagade</h3>
        <p>Faire une bêtise</p>
      </div>
      <div class="word">
        <h3>Degun</h3>
        <p>Personne</p>
      </div>
      <div class="word">
        <h3>Se gaver</h3>
        <p>Se surpasser</p>
      </div>
      <div class="word">
        <h3>Se caguer </h3>
        <p>Avoir peur</p>
      </div>
      <div class="word">
        <h3>Ça m'espante !</h3>
        <p>Ça me surprend !</p>
      </div>
      <div class="word">
        <h3>Ensuqué</h3>
        <p>Endormi</p>
      </div>
      <div class="word">
        <h3>Être quiché</h3>
        <p>Être serré</p>
      </div>
      <div class="word">
        <h3>Boudiou</h3>
        <p>Mon Dieu</p>
      </div>
      <div class="word">
        <h3>Chourrer</h3>
        <p>Voler</p>
      </div>
      <div class="word">
        <h3>Il me tarde</h3>
        <p>J'ai hâte</p>
      </div>
      <div class="word">
        <h3>Pitchoun</h3>
        <p>Enfant</p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Vocabulaire'
  }

</script>


<style lang="scss" scoped>

  @import "~assets/styles/variables";

  .vocabulaire-view{
    h1{
      font-size: 4em;
      text-transform: uppercase;
      color: $green;
    }

    #vocabulaire{
      width: 100%;
      margin: 100px auto 0 auto;

      .word{
        display: inline-block;
        width: 20%;
        margin: 20px 2%;
        background: $gray;
        padding: 2em 0;

        h3{
          text-transform: uppercase;
        }

        p{
          color: $black-transparancy;
          font-size: 1.2em;
        }
      }
    }
  }

</style>
