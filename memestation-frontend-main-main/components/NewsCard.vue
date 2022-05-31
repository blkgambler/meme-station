<template>
  <div>
    <div class="flex justify-center pb-8">
      <div class="flex bg-white rounded-full items-center justify-center w-16 h-16">
        {{ number.toString() }}
      </div>
    </div>

    <a class="p-4 py-8 bg-white flex flex-col" :href="singleNews.url" target="_blank">
      <div class="text-mineshaft-60">
        {{ singleNews.date }}
      </div>
      <div class="text-mineshaft-100 text-xl font-bold py-8">
        {{ singleNews.title }}
      </div>
      <div class="text-mineshaft-60">
        {{ singleNews.subtitle }}
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    singleNews: {
      type: Object,
      default: () => { return null }
    },
    number: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped>

</style>
