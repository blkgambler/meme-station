<template>
  <div class="border border-solid border-mineshaft-100 bg-white">
    <div class="border-mineshaft-100 border-b border-solid p-5 font-bold bg-white">
      Owners
    </div>
    <div class="flex flex-col flex-wrap bg-strange-blue-30">
      <nuxt-link v-for="(infoData, index) in info" :key="index" class="row" :to="infoData.profile">
        <div class="flex flex-row">
          <div class="flex flex-col items-center">
            <img :src="infoData.image" class="h-12 rounded-full" alt="User profile image">
            <img src="/images/verified-icon.png" class="h-5 relative -mr-10 -mt-5" alt="Verified Icon">
          </div>
          <div class="flex flex-col px-4 justify-center">
            <div class="font-bold text-lg">
              {{ infoData.name }}
            </div>
            <div>
              {{ infoData.price }} USD
            </div>
          </div>
        </div>
        <span>{{ infoData.date }}</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileOwners',
  props: {
    info: {
      type: Array,
      default: () => {
        return [
          { name: 'PepeLorDTradEr-J1', image: '/images/1344 - PePeLordTrader.jpg', profile: '/my-gallery', price: '1.231', date: '12 Jun 2021' },
          { name: 'PepeLorDTradEr-J1', image: '/images/1344 - PePeLordTrader.jpg', profile: '/my-gallery', price: '1.231', date: '12 Jun 2021' },
          { name: 'PepeLorDTradEr-J1', image: '/images/1344 - PePeLordTrader.jpg', profile: '/my-gallery', price: '1.231', date: '12 Jun 2021' },
          { name: 'PepeLorDTradEr-J1', image: '/images/1344 - PePeLordTrader.jpg', profile: '/my-gallery', price: '1.231', date: '12 Jun 2021' },
          { name: 'PepeLorDTradEr-J1', image: '/images/1344 - PePeLordTrader.jpg', profile: '/my-gallery', price: '1.231', date: '12 Jun 2021' }
        ]
      }
    }
  }
}
</script>

<style scoped>
.row {
  @apply flex justify-between items-center p-5 pb-5 border-solid border-b bg-strange-blue-30;
  border-color: #3333331f;
}
.row:hover {
  @apply bg-white;
}
.row:last-of-type {
  @apply border-none;
}
</style>
