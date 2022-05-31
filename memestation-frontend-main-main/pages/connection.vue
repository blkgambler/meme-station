<template>
  <div>
    <Header :key="headerVersion" />
    <ConnectionMenu v-on:update-header="forceHeaderRerender()"/>
  </div>
</template>

<script>
import ConnectionMenu from '~/components/ConnectionMenu'
import Header from '~/components/sections/Header'
export default {
  name: 'ConnectWallet',
  // Special layout without header so we can update it here
  layout: 'connection',
  components: {
    ConnectionMenu,
    Header
  },
  data () {
    return {
      headerVersion: 0
    }
  },
  methods: {
    // Force header to update when log in status changes
    forceHeaderRerender () {
      this.headerVersion += 1
    }
  }
}
</script>

<style scoped>
  .container {
    margin-bottom: 75vh;
    margin-top: -15vh;
    width: 100%;
  }
</style>
