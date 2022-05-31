<template>
  <div class="item-card">
    <div>
      <div class="bg-elm-10 rounded-full text-mineshaft-100 text-center h-10 w-10 pt-2 font-bold">
        {{ number }}
      </div>
    </div>
    <div class="flex-grow">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'InformationCard',
  props: {
    number: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.item-card {
  @apply border-solid border bg-white h-full cursor-pointer p-8 font-bold flex items-center gap-4;
  border-color: #e3e7ea;
  box-shadow: 5px 5px #e3e7ea;
  margin-right: 5px;
}
</style>
