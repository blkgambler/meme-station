<template>
  <div class="border border-solid border-mineshaft-100">
    <div class="border-mineshaft-100 bg-white border-b border-solid p-5 font-bold">
      Info
    </div>
    <div class="flex flex-col flex-wrap bg-strange-blue-30">
      <div v-for="(infoData, index) in information" :key="index" class="row">
        <span>{{ infoData.label }}</span>
        <span>{{ infoData.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FileInfo',
  props: {
    info: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      information: []
    }
  },
  mounted () {
    Object.keys(this.$props.info).map((info) => {
      switch (info) {
        case 'fileType':
          this.information.push({
            label: 'File Type',
            value: this.$props.info[info]
          })
          break
        case 'origin':
          this.information.push({
            label: 'Origin',
            value: this.$props.info[info]
          })
          break
        case 'fileSize':
          this.information.push({
            label: 'File Size',
            value: this.$props.info[info]
          })
          break
        case 'maxInstances':
          this.information.push({
            label: 'Max Instances',
            value: this.$props.info[info]
          })
          break
        default:break
      }
    })
  }
}
</script>

<style scoped>
.row {
  @apply flex justify-between items-center m-5 mb-0 pb-5 border-solid border-b;
  border-color: #3333331f;
}
.row:last-of-type {
  @apply border-none;
}
</style>
