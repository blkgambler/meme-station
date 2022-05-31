<template>
  <div>
    <UserProfileHeader :user="user"/>
    <UserStats :user="user"/>
    <div class="container mx-auto py-20">
      <UserGalleryItems :user="user"/>
    </div>
  </div>
</template>

<script>
import UserGalleryItems from '~/components/sections/UserGalleryItems'
import UserProfileHeader from '~/components/sections/UserProfileHeader'
import UserStats from '~/components/sections/UserStats'

export default {
  components: {
    UserGalleryItems,
    UserProfileHeader,
    UserStats
  },
  data () {
    return {
      user: undefined
    }
  },
  beforeMount () {
    this.$axios.get('https://api.memestation.com/user/' + this.$route.params.id).then((response) => {
      this.user = response.data
    }).catch((e) => {
      console.log(e.toString())
    })
  }
}
</script>
