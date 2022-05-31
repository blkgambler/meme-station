<template>
  <div>
    <div class="container mx-auto my-12">
      <div class="text-mineshaft-100 font-bold text-3xl md:w-100 pb-10">
        The Federal Bureau of Professional Investigation (FBPI) is the best way to value your memes, no matter its nature!
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="grid grid-cols-1 gap-4">
          <InformationCard :number="1" text="Upload your Meme that you want valued" />
          <InformationCard :number="2" text="Our team of Elite Memes specialists will examine your Pepes" />
          <InformationCard :number="3" text="Your price estimate and score will be posted below within 2 weeks" />
        </div>
        <UploadBox />
      </div>
    </div>
    <div class="container mx-auto my-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="grid grid-cols-1 gap-4">
          <UploadItemCard
            v-for="(item, index) in items"
            :key="index"
            :image-url="item.imageURL"
            :show-remove-button="item.removeButton"
            :state="item.state"
          />
        </div>
        <div class="flex flex-col">
          <div class="text-black font-bold mb-3">
            Email Alerts or Come Back Soon
          </div>
          <p class="text-black mb-6">
            Our team of world class Meme Specialists will examine your memes, be asured. <br> <br> Keep checking this page for the results or have our professionals email you as soon as the analysis is ready for you.
          </p>
          <input type="text" placeholder="Email">
          <div class="pb-3 pt-6">
            <button class="button">
              <a href="/connection">Save</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InformationCard from '~/components/InformationCard'
import UploadBox from '~/components/UploadBox'
import UploadItemCard from '~/components/UploadItemCard'

export default {
  components: {
    UploadItemCard,
    InformationCard,
    UploadBox
  },
  data () {
    return {
      items: []
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
