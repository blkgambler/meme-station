<template>
  <div :class="['wrapper', profitable ? 'up' : 'down']">
    <div class="name">
      {{ name }}
    </div>
    <div class="price">
      {{ price }}
      <span :class="['arrow', profitable ? 'arrow-up' : 'arrow-down']" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'StockStatus',
  props: {
    name: {
      type: String,
      default: 'Pepe Meme'
    },
    price: {
      type: String,
      default: '$1,230'
    },
    profitable: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.wrapper {
  @apply flex flex-row py-4 px-6 gap-2;
}
.down {
  background-color: #1A1A1A;
}
.up {
  background-color: #0B2E2A;
}
.name {
  @apply text-white;
}
.price {
  @apply flex flex-row items-center gap-2;
}
.down .price {
  color: #D65F41;
}
.up .price {
  color: #05C23A;
}
.arrow {
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
}
.arrow-up {
  border-bottom: 7px solid #05C23A;
}
.arrow-down {
  border-top: 7px solid #D65F41;
}
</style>
