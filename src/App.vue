<template>
  <div id="app">
    <app-header v-if="!isHome"></app-header>
    <router-view></router-view>
  </div>
</template>

<script>

  import store from './vuex/store'
  import AppHeader from 'components/Header'

  export default {
    name: 'App',
    components: {
      AppHeader
    },
    computed: {
      isHome: function () { return ['', '/', '/home'].indexOf(this.$route.path) !== -1 }
    },
    route: {
      data: function (transition) {
        // console.log('App.vue - transition from %s to %s', transition.from.name, transition.to.name)
      }
    },
    store
  }

</script>

<style lang="scss">

  @import "assets/styles/fonts";
  @import "assets/styles/variables";

  html, body{
    margin: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
    font-family: 'Gotham', Source Sans Pro, Helvetica, sans-serif;
    position: relative;
    text-align: center;

    a {
      color: $green;
      text-decoration: none;
    }

    h1{
      font-size: 4em;
      text-transform: uppercase;
      color: $green;
    }

  }

</style>
