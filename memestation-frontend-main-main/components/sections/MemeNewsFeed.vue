<template>
  <div>
    <div style="margin-top:-350px; height: 400px; background: linear-gradient(180deg, rgba(0, 3, 28, 0) 0%, #00031F 100%); z-index: 1" />
    <div style="background-image: url('/images/in-the-wild-background.png'); background-color: #00031F; " class="bg-no-repeat bg-center pt-8 lg:pb-48">
      <div class="container mx-auto">
        <div class="text-center text-white text-4xl">
          In The Wild
        </div>

        <div class="overflow-x-hidden px-12">
          <div ref="scroller" class="news-wrapper">
            <NewsCard v-for="(singleNews, index) in news" :key="index" :number="index + 1" :singleNews="singleNews"/>
          </div>
        </div>

        <div class="flex flex-row justify-between">
          <div class="scroll-button left" @click="scroll('left')">
            &larr;
          </div>
          <div class="scroll-button right" @click="scroll('right')">
            &rarr;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from '~/components/NewsCard'

export default {
  name: 'MemeNewsFeed',
  components: {
    NewsCard
  },
  props: {
    news: {
      type: Array,
      default: () => { return [] }
    }
  },
  methods: {
    scroll (direction) {
      if (direction === 'right') {
        this.$refs.scroller.scrollLeft += 400
      }
      if (direction === 'left') {
        this.$refs.scroller.scrollLeft -= 400
      }
    }
  }
}
</script>
<style lang="postcss" scoped>
.news-wrapper {
  background-image: linear-gradient(to right, #5C5C5C 50%, transparent 50%), linear-gradient(to right, #5C5C5C 50%, transparent 50%), linear-gradient(to bottom, #5C5C5C 50%, transparent 50%), linear-gradient(to bottom, #5C5C5C 50%, transparent 50%);
  background-position: 0 75px;
  background-repeat: repeat-x, repeat-x, no-repeat, no-repeat;
  background-size: 10px 1px, 10px 1px, 1px 1px, 1px 1px;
  border-color: #e3e7ea;
  @apply py-10 flex flex-row w-full gap-3 overflow-x-hidden;
}
.item {
  min-width: 250px;
}
.item.first {
  background: linear-gradient(to right, #00031f 50%, transparent 0%);
}
.item.last {
  background: linear-gradient(to left, #00031f 50%, transparent 0%);
}
.scroll-button {
  @apply bg-white text-2xl h-16 w-16 flex items-center justify-center rounded-full border border-solid border-mineshaft-10 cursor-pointer select-none relative;
  top: -185px;
  padding-bottom: 6px;
}

.scroll-button.left {
  left: -5px;
}
.scroll-button.right {
  left: 5px;
}

@screen md {
  .scroll-button.left {
    left: -25px;
  }
  .scroll-button.right {
    left: 25px;
  }
}
</style>
