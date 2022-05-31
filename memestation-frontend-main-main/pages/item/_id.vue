<template>
  <div v-if="meme !== undefined">
    <ItemDescription :meme="meme" />
    <div class="container mx-auto pb-20 z-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        <FileInfo :info="meme.info" class="lg:col-span-1 col-span-2" />
        <FileGraph :price="meme.listingPrice" class="lg:col-span-1 col-span-2" />
        <FileOwners class="col-span-2" />
      </div>
    </div>
    <MemeNewsFeed :news="meme.news"/>
  </div>
</template>

<script>
import FileInfo from '~/components/FileInfo'
import FileOwners from '~/components/FileOwners'
import ItemDescription from '~/components/sections/ItemDescription'
import MemeNewsFeed from '~/components/sections/MemeNewsFeed'
import FileGraph from '~/components/FileGraph'

export default {
  components: {
    FileOwners,
    FileInfo,
    FileGraph,
    ItemDescription,
    MemeNewsFeed
  },
  data () {
    return {
      meme: undefined
    }
  },
  mounted () {
    this.$axios.get('https://api.memestation.com/memes/').then((response) => {
      // Find the meme by it's ID in the list of all memes until there's an endpoint for that
      this.meme = response.data.find(item => item.id === this.$route.params.id)
    }).catch((e) => {
      console.log(e.toString())
    })
  }
}
</script>
