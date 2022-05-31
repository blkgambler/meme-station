<template>
  <nuxt-link :to="getUrl(userId)" class="wrapper">
    <div class="flex flex-col items-center">
      <img :src="imageUrl" class="h-24 rounded-full" alt="User profile image">
      <img src="/images/verified-icon.png" class="h-8 relative -mr-16 -mt-8" alt="Verified Icon">
    </div>
    <div class="pt-5 flex flex-col text-center">
      <span class="text-mineshaft-100 font-bold leading-relaxed">
        {{ username }}
      </span>
      <!--<span class="text-mineshaft-100 mt-2">{{ amount }} USD</span> -->
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Hodler',
  props: {
    username: {
      type: String,
      default: 'Bessie Cooper'
    },
    imageUrl: {
      type: String,
      default: '/images/1344 - PePeLordTrader.jpg'
    },
    amount: {
      type: Number,
      default: 1.234
    },
    userId: {
      type: String,
      default: 'L2gwSai3'
    }
  },
  methods: {
    getUrl (id) {
      return `/my-gallery/${id}`
    }
  }
}
</script>

<style scoped lang="postcss">
.wrapper {
  @apply flex flex-col px-6 py-5 bg-damask-5 m-4 border border-solid border-damask-5;
  margin-right: 10px;
}
.wrapper:hover {
  @apply bg-white border-damask-100;
  box-shadow: 10px 10px #D65F41; /* damask-100*/
}

</style>
