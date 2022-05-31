<template>
  <div class="item-card">
    <img :src="imageUrl" alt="uploaded image" class="h-24 bg-strange-blue">
    <div class="flex flex-col flex-grow h-full justify-between items-end">
      <div v-if="showRemoveButton" class="bg-mineshaft-10 rounded-full p-2">
        <img class="h-2" src="/images/icons/close.png" alt="close">
      </div>
      <div v-else />
      <div class="text-black">
        {{ state }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UploadItemCard',
  props: {
    state: {
      type: String,
      default: 'Uploaded'
    },
    showRemoveButton: {
      type: Boolean,
      default: true
    },
    imageUrl: {
      type: String,
      default: '/images/pepe2.png'
    }
  }
}
</script>

<style scoped>
.item-card {
  @apply border-solid border bg-white h-full cursor-pointer p-4 flex items-center gap-4 justify-between;
  border-color: #e3e7ea;
  box-shadow: 5px 5px #e3e7ea;
  margin-right: 5px;
}
</style>
