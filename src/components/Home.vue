<template>
  <div class="home-view">
    <div class="title">
      <h1>Oh collègue !</h1>
      <p>Le kit du sudiste</p>
      <img src="~../assets/images/pedro.png" />
    </div>
    <div class="menu">
      <div v-link="'/appelation'" class="item top left">
        <h1>L'appélation</h1>
        <p>Définition du mot collègue</p>
      </div>
      <div v-link="'/vocabulaire'" class="item bottom left">
        <h1>Le vocabulaire</h1>
        <p>Mots et expressions</p>
      </div>
      <div v-link="'/vision'" class="item top right">
        <h1>La vision</h1>
        <p>Comment le sudiste voit les autres</p>
      </div>
      <div v-link="'/musique'" class="item bottom right">
        <h1>La musique</h1>
        <p>Les musiques favorites du sudiste</p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Home'
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  @import "~assets/styles/variables";

  .home-view{

    .title{
      h1{
        font-size: 4em;
        text-transform: uppercase;
        color: $green;
      }
      p{
        font-size: 3em;
      }
      img{
        height: 1000px;
        width: auto;
      }
    }

    .menu {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      .item{
        width: 400px;
        background: $green;
        padding: 20px;
        color: $white;
        position: absolute;

        h1{
          text-transform: uppercase;
        }

        p{
          font-size: 1.3em;
        }

        &.top{
          top: 400px;
        }
        &.bottom{
          bottom: 200px;
        }
        &.left{
          left: 100px;
        }
        &.right{
          right: 100px;
        }
      }
    }

  }

</style>
