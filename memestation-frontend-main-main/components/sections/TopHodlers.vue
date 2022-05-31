<template>
  <div style="background-image:url('/images/hodlers-background.png')" class="bg-no-repeat bg-top py-20">
    <div class="container mx-auto">
      <div class="flex flex-row justify-between">
        <div class="font-bold text-4xl pb-16 text-mineshaft-100">
          Top Hodlers
        </div>
        <div>
          <multiselect
            v-model="selected"
            :options="options"
            :multiple="false"
            class="multiselect-custom white"
            :close-on-select="false"
            :clear-on-select="false"
            :preserve-search="true"
            placeholder="Period"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        <Hodler v-for="(user, index) in users.slice(0, 4)" :key="index" :username="user.userName" :imageUrl="user.profilePicture" :userId="user.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import Hodler from '~/components/Hodler'

export default {
  name: 'TopHodlers',
  components: {
    Hodler,
    Multiselect
  },
  props: {
    users: {
      type: Array,
      default: () => { return [] }
    }
  },
  data () {
    return {
      selected: null,
      options: ['Today']
    }
  }
}
</script>
