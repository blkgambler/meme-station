<template>
  <nuxt-link class="item-card" :to="getUrl(meme.id)">
    <div class="flex justify-center bg-strange-blue p-4 pb-0 m-0">
      <img :src="meme.fileURL" class="h-64 w-64" :alt="meme.title">
    </div>
    <div class="flex flex-col flex-grow">
      <div class="pt-5 flex flex-col">
        <div class="flex flex-row justify-between items-center">
          <span class="text-white px-4 py-3 bg-elm-100 text-xs"> 0 %</span>
          <span class="h-6 w-6 border border-mineshaft-60 text-mineshaft-60 border-solid rounded-full text-center align-middle text-sm">{{ index }}</span>
        </div>
        <div class="py-5 font-bold text-lg text-left text-mineshaft-100">
          {{ meme.title }}
        </div>
      </div>
      <div class="flex flex-row justify-between">
        <div class="flex flex-col">
          <span class="price-label">Purchase Price</span>
          <div>
            <span class="text-mineshaft-100 font-bold">{{ meme.listingPrice }}</span>
            <span class="text-mineshaft-60">USD</span>
          </div>
        </div>
        <div class="flex flex-col">
          <span class="price-label">Sell Price</span>
          <div class="">
            <span class="text-mineshaft-100 font-bold">{{ meme.listingPrice }}</span>
            <span class="text-mineshaft-60">USD</span>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Gainer',
  props: {
    meme: {
      type: Object,
      default: () => {
        return {
          id: '1',
          title: 'Pepe pepe',
          fileURL: '/images/pepe1.png',
          listingPrice: 0.00,
          percent: '+100%'
        }
      }
    },
    index: {
      type: Number,
      default: 1
    }
  },
  methods: {
    getUrl (id) {
      return `/item/${id}`
    }
  }
}
</script>

<style lang="postcss" scoped>
.item-card {
  @apply flex flex-col border-solid border bg-white p-4 cursor-pointer z-20;
  box-shadow: 5px 6px #E3E7EA;
  border-color: #E3E7EA;
  margin-right: 6px;
}
.item-card:hover {
  box-shadow: 5px 6px #333333;
  border-color: #333333;
}
.price-label {
  @apply text-xs text-mineshaft-60;
}
</style>
