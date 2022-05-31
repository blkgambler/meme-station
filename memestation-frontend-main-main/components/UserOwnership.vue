<template>
  <nuxt-link :to="getUrl(ownerId)" class="bg-white border border-solid border-mineshaft-10 px-5 py-4 flex gap-4 items-center">
    <div class="flex flex-col items-center">
      <img :src="imageUrl" class="h-10 rounded-full" alt="User profile image">
      <img src="/images/verified-icon.png" class="h-4 relative -mr-8 -mt-4" alt="Verified Icon">
    </div>
    <div class="flex flex-col">
      <div class="text-sm text-mineshaft-60">
        {{ title }}
      </div>
      <div class="text-lg font-bold">
        {{ name }}
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'UserOwnership',
  props: {
    name: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: ''
    },
    ownerId: {
      type: String,
      default: ''
    }
  },
  methods: {
    getUrl (id) {
      return `/my-gallery/${id}`
    }
  }
}
</script>

<style scoped>

</style>
