<template>
  <div>
    <HottestMemes />
    <TopHodlers :users="users"/>
    <TopGainers />
    <ExploreItems />
  </div>
</template>

<script>
import HottestMemes from '~/components/sections/HottestMemes'
import TopHodlers from '~/components/sections/TopHodlers'
import TopGainers from '~/components/sections/TopGainers'
import ExploreItems from '~/components/sections/ExploreItems'

export default {
  components: {
    HottestMemes,
    TopHodlers,
    TopGainers,
    ExploreItems
  },
  data () {
    return {
      users: undefined
    }
  },
  mounted () {
    this.$axios.get('https://api.memestation.com/user').then((response) => {
      this.users = response.data
    }).catch((e) => {
      console.log(e.toString())
    })
  }
}
</script>
