<template>
  <div class="mx-auto container">
    <div class="bg-soapstone-100 p-2 md:p-6 lg:p-12 mt-12 z-20">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-24">
        <div class="item-card lg:col-span-2">
          <div class="flex flex-col justify-center items-center bg-damask-5 p-4 m-0 flex-grow">
            <img :src="meme.fileURL" :alt="meme.title" style="height: 300px; width: 300px" class="mx-6 my-8">
          </div>
        </div>
        <div class="flex flex-col lg:col-span-3">
          <div class="text-2xl font-bold">
            {{ meme.title }}
          </div>
          <div class="pt-4 flex justify-between items-center">
            <div class="flex items-center gap-4">
              <div class="price">
                {{ meme.listingPrice }} USD
              </div>
              <div v-if="meme.usdPrice">
                ${{ meme.usdPrice }}
              </div>
            </div>
            <a class="underline font-bold" target="_blank" href="https://etherscan.io">EtherScan</a>
          </div>
          <div class="pt-8">
            {{ meme.description }}
          </div>
          <div class="pt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <UserOwnership title="Owner" :name="meme.ownerName" :image-url="meme.ownerPicture" :ownerId="meme.ownerId" />
            <UserOwnership title="Creator" :name="meme.creatorName" :image-url="meme.creatorPicture" :ownerId="meme.creatorId"/>
          </div>
          <div class="flex justify-between">
            <div class="py-6 lg:pt-12 z-20">
              <span class="buy-button">
                <a href="/connection"> Buy Now</a>
              </span>
            </div>
            <div class="my-5 px-3 py-2 gap-3 flex z-20">
              <div>
                <div class="pill">
                  {{ likes }}
                </div>
                <div class="action-button">
                  <img src="/images/icons/like.png" class="w-6 h-auto" alt="like">
                </div>
              </div>
              <div>
                <div class="pill">
                  {{ shares }}
                </div><div class="action-button">
                  <img src="/images/icons/share.png" class="w-6 h-auto" alt="share">
                </div>
              </div>
              <div>
                <div class="pill">
                  {{ comments }}
                </div><div class="action-button">
                  <img src="/images/icons/comment.png" class="w-6 h-auto" alt="comments">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative hidden md:block opacity-50 z-10" style="left:-120px; top: -119px;">
      <img src="/images/dotted-pattern.png" alt="">
    </div>
  </div>
</template>

<script>

import UserOwnership from '~/components/UserOwnership'

export default {
  name: 'ItemDescription',
  components: {
    UserOwnership
  },
  props: {
    meme: {
      type: Object,
      default: () => {
        return {
          title: 'Pepe pepe',
          fileURL: '/images/pepe1.png',
          listingPrice: 0.00,
          usdPrice: 0.00,
          description: 'Pepe description'
        }
      }
    }
  },
  data () {
    return {
      likes: 0,
      shares: 3,
      comments: 5
    }
  }
}
</script>

<style scoped>
.item-card {
  @apply flex flex-col border-solid border flex-grow bg-white h-full border-mineshaft-100 flex-grow z-20;
  box-shadow: 11px 11px #333333; /* mineshaft-100*/
  margin-right: 11px;
}
.buy-button {
  @apply py-3 px-5 text-white bg-elm-100 border border-solid border-elm-100 cursor-pointer;
  box-shadow: 5px 5px #7AB8B2; /* elm-60*/
}
.price {
  @apply px-2 py-1 border-solid border border-mineshaft-100 bg-white;
  box-shadow: 2px 2px #333333; /* mineshaft-100*/
  margin-bottom: 2px;
  margin-right: 2px;
}
.action-button {
  @apply flex justify-center items-center p-3 rounded-full bg-white border border-solid border-mineshaft-10 cursor-pointer;
}
.action-button img {
  @apply h-6;
}
.pill {
  @apply relative float-right -ml-3 -mt-2 bg-damask-100 text-white px-2 py-1 rounded-full text-xs;
}
</style>
