<template>
  <div>
    <div class="container mx-auto my-12">
      <div class="text-mineshaft-100 font-bold text-3xl md:w-100 pb-10">
        Meme Station User Profile
      </div>
    <div class="pb-5">
      <img :src=user.picture />
    </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="grid grid-cols-1 gap-4">
          <ProfileInfoCard param="Name" :userParam=user.name />
          <ProfileInfoCard param="Nickname" :userParam=user.nickname />
          <ProfileInfoCard param="E-mail" :userParam=user.email />
          <div v-if="wallet">
            <ProfileInfoCard param="Wallet Id" :userParam=wallet />
          </div>
        </div>
      </div>
      <button class="button mt-5" @click="saveChanges()">Save changes</button>
    </div>
  </div>
</template>

<script>
import ProfileInfoCard from '~/components/ProfileInfoCard.vue'

export default {
  middleware: 'auth',
  components: {
    ProfileInfoCard
  },
  data () {
    return {
      user: this.$auth.user,
      wallet: localStorage.getItem('metamask')
    }
  },
  mounted () {
    this.$axios.get(`http://localhost:8080/user/${this.user.sub}`).then((response) => {
      this.users = response.data
    })
  },
  methods: {
    saveChanges () {
    }
  }
}
</script>
<style scoped>
.button {
  @apply py-3 px-10 text-white bg-elm-100 border border-solid border-elm-100;
  box-shadow: 5px 5px #7AB8B2; /* elm-60*/
}
</style>
