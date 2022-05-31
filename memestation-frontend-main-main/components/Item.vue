<template>
  <nuxt-link class="item-card" :to="getUrl(meme.id)">
    <div class="flex justify-center bg-strange-blue p-4 pb-0 m-0">
      <img :src="meme.fileURL" class="h-64 w-64" :alt="meme.title">
    </div>
    <div class="flex flex-col flex-grow">
      <div class="pt-4 flex-grow flex-wrap flex md:flex-col justify-between">
        <div class="grid grid-cols-3">
          <div class="col-span-2 font-bold text-lg text-left text-mineshaft-100">
            {{ meme.title }}
          </div>
          <div>
            <div class="flex justify-end">
              <span class="price">
                {{ meme.listingPrice }} USD
              </span>
            </div>
          </div>
        </div>
        <div class="pt-4 flex md:flex-row flex-col justify-between items-center">
          <div class="flex flex-row px-1">
            <img
              v-for="(user, index) in meme.users"
              :key="index"
              :class="index === 0 ? 'ml-0 relative inline-block w-6 h-6 rounded-full -ml-1': 'relative inline-block w-6 h-6 rounded-full -ml-1'"
              :src="user"
              :style="getZIndex(index)"
            >
          </div>
          <div v-if="meme.bidders > 0" class="text-xs text-mineshaft-60">
            Bidders <span class="text-base font-bold text-mineshaft-100">{{ meme.bidders }}</span>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Item',
  props: {
    meme: {
      type: Object,
      default: () => {
        return {
          id: '1',
          title: 'Pepe pepe',
          fileURL: '/images/pepe1.png',
          listingPrice: 0.00,
          bidders: 0,
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
.item-card {
  @apply flex flex-col border-solid border flex-grow bg-white h-full p-4 cursor-pointer;
  margin-right: 5px;
  margin-bottom: 5px;
}
.item-card:hover {
  @apply border-mineshaft-100;
  box-shadow: 5px 5px #333333; /* mineshaft-100*/
}

.item-card .price {
  @apply text-xs font-normal px-2 py-1 border-2 border-solid border-mineshaft-100;
}
</style>
