<template>
  <div class="container mx-auto pt-16">
    <div class="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4">
      <div class="box-outline-black col-span-2 row-span-2">
        <div class="flex flex-col justify-between p-8 pb-0">
          <div>
            <div class="text-mineshaft-60 text-sm">
              Portfolio Value
            </div>
            <div class="text-mineshaft-100 font-bold text-2xl">
              {{ user.balance }} USD
            </div>
          </div>
        </div>
        <!-- <UserValueGraph /> -->
      </div>
      <div class="box-outline col-span-1">
        <div class="label">
          Items
        </div>
        <div class="text">
          {{ user.amountItems }}
        </div>
      </div>
      <div class="box-outline col-span-1">
        <div class="label">
          Sale Requests
        </div>
        <div class="text">
          {{ saleRequests }}
        </div>
      </div>
      <div class="box-outline col-span-2">
        <div class="label">
          Collector Place
        </div>
        <div class="text">
          {{ position }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import UserValueGraph from '~/components/UserValueGraph'

export default {
  name: 'UserStats',
  components: {
    // UserValueGraph
  },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          id: 'Pepe pepe'
        }
      }
    },
    saleRequests: {
      type: Number,
      default: 2
    },
    position: {
      type: String,
      default: '1st Percentile'
    }
  }
}
</script>

<style scoped>
.box-outline {
  @apply flex flex-col border-solid border bg-white p-4;
  box-shadow: 5px 6px #E3E7EA;
  border-color: #E3E7EA;
  margin-right: 6px;
}
.box-outline-black {
  @apply flex flex-col bg-white border border-solid border-mineshaft-100;
  border-color: #E3E7EA;
  margin-right: 11px;
  box-shadow: 11px 11px #333333;
}
@screen lg {
  .box-outline {
    @apply p-8;
  }
  .box-outline-black {

  }
}
.label {
  @apply text-mineshaft-80 text-2xl;
}
.text {
  @apply text-mineshaft-100 text-3xl font-bold;
}
</style>
