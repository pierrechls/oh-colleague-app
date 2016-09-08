<template>
  <div class="musique-view">
    <h1>Musique</h1>
    <h4>Oh collègue mets toi dans l'ambiance !</h4>
    <div class="music" v-if="currentMusic != null">
      <div v-if="currentQrCode != null" class="qrcode">
        <img :src="currentQrCode" />
      </div>
      <p>{{ playlist[currentMusic].title }}</p>
    </div>
    <button @click="changeMusique">Change de musique aléatoirement</button>
  </div>
</template>

<script>

  import qrcode from 'qrcode-js'
  import Chance from 'chance'

  export default {
    name: 'Musique',
    data: function () {
      return {
        currentQrCode: null,
        currentMusic: null,
        playlist: [
          {
            title: 'Un petit ricard dans un verre à ballon',
            url: 'https://www.youtube.com/watch?v=ZiHHcUNc3P8'
          },
          {
            title: 'Les sardines',
            url: 'https://www.youtube.com/watch?v=PA3P1-aSvKQ'
          },
          {
            title: 'Peña Baiona',
            url: 'https://www.youtube.com/watch?v=e5Bv7UCp4iw'
          },
          {
            title: 'La boiteuse',
            url: 'https://www.youtube.com/watch?v=ieOqX0DKbis'
          },
          {
            title: 'Gipsy Kings - Bamboleo',
            url: 'https://www.youtube.com/watch?v=zCq3CMbqYNo'
          },
          {
            title: 'Jacques Dutronc - Et moi, et moi, et moi',
            url: 'https://www.youtube.com/watch?v=FIzLbXz5Au4'
          },
          {
            title: 'La 4L de Jacky',
            url: 'https://www.youtube.com/watch?v=2V4cc8A7z30'
          },
          {
            title: 'Ah si tu pouvais fermer ta gueule',
            url: 'https://www.youtube.com/watch?v=dboTHl6ELnY'
          },
          {
            title: 'Il est vraiment phénoménale',
            url: 'https://www.youtube.com/watch?v=SirqCy-km_s'
          },
          {
            title: 'Mala Vida- Mano Negra',
            url: 'https://www.youtube.com/watch?v=nmxoPjwnvPM'
          },
          {
            title: 'La chatte à la voisine',
            url: 'https://www.youtube.com/watch?v=uwjvSO95t6c'
          }
        ]
      }
    },
    methods: {
      changeMusique: function () {
        this.currentMusic = this.getRamdom()
        this.currentQrCode = qrcode.toDataURL(this.playlist[this.currentMusic].url, 4)
      },
      getRamdom: function () {
        let musicChance = new Chance()
        return musicChance.integer({ min: 0, max: (this.playlist.length - 1) })
      }
    },
    ready: function (){
      this.currentMusic = this.getRamdom()
      this.currentQrCode = qrcode.toDataURL(this.playlist[this.currentMusic].url, 4)
    }
  }

</script>

<style lang="scss" scoped>

  @import "~assets/styles/variables";

  .musique-view{

    h4 {
      font-size: 2em;
      text-transform: uppercase;
      color: $black-transparancy;
      margin-bottom: 3em;
    }

    .music{
      p{
        font-size: 3em;
      }
      .qrcode{
        margin: 0 auto;
        background: $white;
        width: 300px;
        height: 300px;
        border: 100px solid $gray;
        border-radius: 50%;

        img{
          width: 200px;
          height: auto;
          margin-top: 50px;
        }
      }
    }

    button{
      background: $green;
      color: $white;
      padding: 1em 2em;
      outline: none;
      border: 0;
      font-size: 1.3em;
      text-transform: uppercase;
    }
  }

</style>
