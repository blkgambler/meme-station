<template>
  <div class="container mt-20 mx-auto">
    <div class="relative hidden xl:block opacity-50 z-10 float-right" style="left: 34px; top: -31px;">
      <img src="/images/dotted-pattern.png" alt="">
    </div>
    <div class="lg:p-16 md:p-8 p-4 bg-damask-5 z-20">
      <div class="font-bold text-4xl pb-16 text-mineshaft-100">
        Hottest Memes
      </div>
      <img id="wc-mock" src="/images/WalletConnect-mock.png" style="margin-bottom: 75vh; margin-top : -15vh; width : 100%; display:none;" onclick="document.getElementById('wc-mock').style.display = 'none';" alt="">
      <div class="grid md:grid-cols-3 gap-4 relative z-20">
        <div class="md:row-span-3" style="padding-bottom: 11px;">
          <HottestFeaturedItem :meme="memes[0]" />
        </div>
        <div class="md:col-span-2" style="padding-bottom: 5px;">
          <HottestItem :meme="memes[1]" />
        </div>
        <div class="md:col-span-2" style="padding-bottom: 5px;">
          <HottestItem :meme="memes[2]" />
        </div>
        <div class="md:col-span-2" style="padding-bottom: 5px;">
          <HottestItem :meme="memes[3]" />
        </div>
      </div>
    </div>
    <div class="relative hidden md:block opacity-50 z-10" style="left:-30px; top: -119px;">
      <img src="/images/dotted-pattern.png" alt="">
    </div>
  </div>
</template>

<script>
import HottestFeaturedItem from '~/components/HottestFeaturedItem'
import HottestItem from '~/components/HottestItem'

export default {
  name: 'HottestMemes',
  components: {
    HottestFeaturedItem,
    HottestItem
  },
  data () {
    return {
      memes: []
    }
  },
  mounted () {
    this.$axios.get('https://api.memestation.com/memes').then((response) => {
      // Get the first 4 items until there's an endpoint for that
      this.memes = response.data.splice(0, 4)
    }).catch((e) => {
      console.log(e.toString())
    })
  }
}
</script>

<style scoped>

</style>
