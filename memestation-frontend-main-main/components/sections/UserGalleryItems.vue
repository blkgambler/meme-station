<template>
  <div class="container mb-20 mx-auto">
    <div class="flex lg:flex-row flex-col justify-between">
      <div class="font-bold text-4xl pb-16 text-mineshaft-100">
        Museum of Meme Art (MoMA)
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <Item v-for="(meme, index) in user.ownedMemes" :key="index" :meme="meme" />
    </div>
  </div>
</template>

<script>
import Item from '~/components/Item'

export default {
  name: 'UserGalleryItems',
  components: {
    Item
  },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          id: 'Pepe pepe'
        }
      }
    }
  },
  data () {
    return {
      selected: null,
      options: [],
      memes: []
    }
  }
}
</script>
