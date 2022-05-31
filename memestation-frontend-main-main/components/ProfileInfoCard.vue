<template>
  <div class="item-card">
    <div>
      <div>
        {{param}}:
      </div>
    </div>
    <div class="flex-grow">
       <input :id=param class="inputBox" :value=userParam />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileInfoCard',
  props: {
    userParam: {
      type: String
    },
    param: {
      type: String
    }
  }
}
</script>

<style scoped>
.item-card {
  @apply border-solid border bg-white h-full p-4 font-bold flex items-center gap-4;
  border-color: #e3e7ea;
  box-shadow: 5px 5px #e3e7ea;
  margin-right: 5px;
}
.inputBox {
  @apply border-solid border bg-white h-full cursor-pointer p-1 flex items-center gap-4;
  width: -webkit-fill-available;
  border-color: #e3e7ea;
  box-shadow: 2px 2px #e3e7ea;
}
</style>
