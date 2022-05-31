<template>
  <div>
    <img class="'object-fill'" :style="$route.path.match('/item/') ? 'background-color: #00031f': ''" src="/images/footer.png" alt="Footer image">

    <div class="bg-mineshaft-100 px-4 xl:p-0">
      <div class="container mx-auto flex md:flex-row flex-col justify-between items-center py-6">
        <div class="flex items-center">
          <nuxt-link to="/">
            <img src="/images/logo-light.png" class="h-12" alt="Logo">
          </nuxt-link>
        </div>
        <div class="py-4 md:py-0">
          <ul>
            <li>
              <a class="page-link" href="#">Privacy Policy</a>
              <a class="page-link" href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="grid grid-cols-3 gap-3">
            <li>
              <a class="social-link" href="">
                <img src="/images/icons/facebook.png" class="social-facebook" alt="Facebook">
              </a>
            </li>
            <li>
              <a class="social-link" href="">
                <img src="/images/icons/instagram.png" alt="Instagram">
              </a>
            </li>
            <li>
              <a class="social-link" href="">
                <img src="/images/icons/twitter.png" alt="Twitter">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.page-link {
  @apply text-white px-5;
}
@screen lg {
  .page-link {
    @apply text-xl;
  }
}
.social-link {
  @apply text-mineshaft-100 rounded-full flex items-center justify-center bg-white ;
}
.social-link img {
  @apply m-4;
  width: 18px;
  height: 18px;
}
.social-link img.social-facebook {
  width: auto;
}
</style>
