<template>
  <div>
    <!-- Connection Page has no static Header as we need to update when user connects -->
    <Nuxt />
    <Footer />
  </div>
</template>

<script>

import Footer from '~/components/sections/Footer'

export default {
  components: {
    Footer
  }
}
</script>
<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #FDFEFF;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
