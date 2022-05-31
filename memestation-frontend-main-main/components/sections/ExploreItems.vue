<template>
  <div class="bg-repeat-y bg-top pt-20" style="background-image:url('/images/explore-all-background.png')">
    <div class="container mb-20 mx-auto">
      <div class="flex lg:flex-row flex-col justify-between">
        <div class="font-bold text-4xl pb-16 text-mineshaft-100">
          Explore all
        </div>
        <div class="pb-4 lg:p-0">
          <ul class="flex flex-row items-center flex-wrap gap-5 lg:gap-10">
            <li class="filter-button active">
              All items
            </li>
            <li class="filter-button">
              Art
            </li>
            <li class="filter-button">
              Game
            </li>
            <li class="filter-button">
              Photography
            </li>
            <li class="filter-button">
              Music
            </li>
            <li class="filter-button">
              Video
            </li>
          </ul>
        </div>
      </div>
      <div class="grid md:grid-cols-3 xl:grid-cols-4 gap-4">
        <div>
          <div class="p-4 bg-white border-mineshaft-20 border">
            <div class="mb-8">
              <multiselect
                v-model="selected"
                :options="options"
                :multiple="false"
                class="multiselect-custom"
                :close-on-select="false"
                :clear-on-select="false"
                :preserve-search="true"
                placeholder="Recently added"
              />
            </div>
            <div class="mb-8">
              <p class="text-mineshaft-60 text-sm pb-2">
                Price
              </p>
              <multiselect
                v-model="selected"
                :options="options"
                :multiple="false"
                class="multiselect-custom"
                :close-on-select="false"
                :clear-on-select="false"
                :preserve-search="true"
                placeholder="Highest price"
              />
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:col-span-2 xl:grid-cols-3 xl:col-span-3 gap-4">
          <Item v-for="(meme, index) in memes" :key="index" :meme="meme" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import Item from '~/components/Item'

export default {
  name: 'ExploreItems',
  components: {
    Item,
    Multiselect
  },
  data () {
    return {
      selected: null,
      options: [],
      memes: []
    }
  },
  mounted () {
    this.$axios.get('https://api.memestation.com/memes').then((response) => {
      this.memes = response.data
    }).catch((e) => {
      console.log(e.toString())
    })
  }
}
</script>

<style scoped>
.filter-button {
  @apply cursor-pointer;
}
.filter-button.active {
  @apply px-6 py-3 border border-solid border-mineshaft-100 bg-white;
  box-shadow: 5px 5px #333333; /* mineshaft-100*/
}
</style>
