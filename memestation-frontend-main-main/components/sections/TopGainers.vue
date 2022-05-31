<template>
  <div>
    <div class="bg-strange-blue pb-20">
      <div class="container pt-20 mx-auto">
        <div class="flex flex-row justify-between">
          <div class="font-bold text-4xl pb-16 text-mineshaft-100">
            Top Gainers
          </div>
          <div>
            <multiselect
              v-model="selected"
              :options="options"
              :multiple="false"
              class="multiselect-custom white"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              placeholder="Period"
            />
          </div>
        </div>

        <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-4 z-20">
          <div>
            <Gainer :meme="memes[0]" class="z-30" :index="1" />
          </div>
          <div class="xl:mt-8">
            <Gainer :meme="memes[1]" :index="2" />
          </div>
          <div class="xl:mt-16">
            <Gainer :meme="memes[2]" :index="3" />
          </div>
          <div class="xl:mt-24">
            <Gainer :meme="memes[3]" :index="4" />
          </div>
        </div>
      </div>
    </div>
    <div class="h-32 bg-strange-blue" style="background: linear-gradient(to top right, #fdfeff 0%, #fdfeff 50%, #f0f8fe 50%, #f0f8fe 100%);" />
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import Gainer from '~/components/Gainer'

export default {
  name: 'TopGainers',
  components: {
    Gainer,
    Multiselect
  },
  data () {
    return {
      selected: null,
      options: ['Today'],
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
