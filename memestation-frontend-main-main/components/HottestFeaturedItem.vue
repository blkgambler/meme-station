<template>
  <nuxt-link class="item-card" :to="getUrl(meme.id)">
    <div class="flex justify-center bg-soapstone-100 p-4 pb-0 m-0">
      <img :src="meme.fileURL" class="h-64 w-64" :alt="meme.title">
    </div>
    <div class="flex flex-col flex-grow">
      <div class="py-4 px-5 flex-grow flex flex-col justify-between">
        <div class="font-bold text-lg text-left text-mineshaft-100">
          {{ meme.title }}
        </div>
        <div class="flex flex-row pt-3">
          <img
            v-for="(user, index) in meme.users"
            :key="index"
            :class="index === 0 ? 'ml-0 relative inline-block w-5 h-5 rounded-full -ml-1': 'relative inline-block w-5 h-5 rounded-full -ml-1'"
            :src="user"
            :style="getZIndex(index)"
          >
        </div>
      </div>
      <div class="flex flex-row border-solid border-t border-mineshaft-100 justify-between pt-4 pb-3 px-4">
        <span class="tag price">{{ meme.listingPrice }} USD</span>
        <span class="tag font-normal">New upload</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'HottestFeaturedItem',
  props: {
    meme: {
      type: Object,
      default: () => {
        return {
          id: '1',
          title: 'Pepe pepe',
          fileURL: '/images/pepe1.png',
          listingPrice: 0.00,
          users: [
            'https://images.unsplash.com/photo-1550525811-e5869dd03032',
            '/images/1344 - PePeLordTrader.jpg',
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
          ]
        }
      }
    }
  },
  methods: {
    getZIndex (index) {
      return 'z-index: ' + (this.$props.meme.users.length - index).toString()
    },
    getUrl (id) {
      return `/item/${id}`
    }
  }
}
</script>

<style lang="postcss" scoped>
.tag {
  @apply text-xs;
  @apply font-normal;
}

.item-card {
  @apply flex flex-col border-solid border flex-grow bg-white h-full cursor-pointer;
  border-color: #e3e7ea;
  box-shadow: 11px 11px #e3e7ea;
  margin-right: 11px;
}
.item-card:hover {
  @apply border-mineshaft-100;
  box-shadow: 11px 11px #333333; /* mineshaft-100*/
}

.item-card .price {
  @apply px-2 py-1 border-solid border border-mineshaft-100;
  box-shadow: 2px 2px #333333; /* mineshaft-100*/
  margin-bottom: 2px;
  margin-right: 2px;
}
</style>
