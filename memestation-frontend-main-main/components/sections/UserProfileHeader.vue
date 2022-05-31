<template>
  <div>
    <div class="h-56 pb-56 bg-center bg-cover" style="background-image: url('/images/profile-header.png')" />
    <div class="container mx-auto">
      <div class="flex flex-col items-center justify-center">
        <img :src="user.profilePicture" class="-mt-24 h-48 w-48 rounded-full border-8 border-solid border-white" alt="Profile picture">
        <div class="text-4xl font-bold text-mineshaft-100">
          {{ user.userName }}
        </div>
        <div class="text-2xl pt-3 pb-5 text-mineshaft-100">
          {{ /*user.id*/ }}
        </div>
        <div class="text-2xl text-mineshaft-80">
          {{ user.wallDescription }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfileHeader',
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          id: 'Pepe pepe'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
