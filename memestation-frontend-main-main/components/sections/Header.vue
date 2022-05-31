<template>
  <div>
    <div class="bg-white border-b-2 border-solid border-mineshaft-100 px-4 xl:p-0 fixed top-0 w-full z-50">
      <div class="container mx-auto flex md:flex-row flex-col justify-between items-center py-6">
        <div class="flex items-center">
          <nuxt-link to="/">
            <img src="/images/logo-dark.png" class="h-12" alt="Logo">
          </nuxt-link>
        </div>
        <div class="py-6 md:py-0">
          <ul>
            <li class="flex flex-wrap items-center justify-center">
              <nuxt-link :class="['page-link', isActiveRoute('/')]" to="/">
                Discover
              </nuxt-link>
              <nuxt-link :class="['page-link', isActiveRoute('/connection')]" to="/connection">
                My Gallery
              </nuxt-link>
              <nuxt-link :class="['page-link', isActiveRoute('/upload')]" to="/upload">
                FBPI
              </nuxt-link>
              <div v-if="isLoggedIn">
                <nuxt-link :class="['page-link', isActiveRoute('/profile')]" to="/profile">
                  Profile
                </nuxt-link>
              </div>
            </li>
          </ul>
        </div>
        <div v-if="!isLoggedIn" class="py-4 md:py-0 logButton" @click="login()">
          Login
        </div>
        <div v-else class="py-4 md:py-0 logButton" @click="logout()">
            Logout
        </div>
      </div>
    </div>
    <div class="pb-48 pt-12 md:pb-24 md:pt-0" />
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      isLoggedIn: this.$auth.user
    }
  },
  computed: {
    userWallet () {
      let address
      if (localStorage.getItem('metamask') !== null) {
        address = localStorage.getItem('metamask')
      } else {
        address = JSON.parse(localStorage.getItem('walletconnect')).accounts[0]
      }
      return address.slice(0, 6) + '...' + address.slice(-4)
    }
  },
  methods: {
    isActiveRoute (route) {
      return this.$route.fullPath === route ? 'active' : ''
    },
    showUserWallet () {
      console.log('Showing User Wallet')
    },
    login () {
      this.$auth.loginWith('auth0')
    },
    logout () {
      this.$auth.logout()
      window.location.reload()
    }
  }
}
</script>

<style scoped>
.page-link {
  @apply py-3 mx-2;
}
@screen lg {
  .page-link {
    @apply mx-4;
  }
}
.page-link.active {
  @apply mx-2 px-5 border border-solid border-mineshaft-100;
  box-shadow: 5px 5px #333333; /* mineshaft-100*/
}
.logButton {
  @apply mx-4 py-3 px-5 text-white bg-elm-100 border border-solid border-elm-100;
  box-shadow: 5px 5px #7AB8B2; /* elm-60*/
  cursor: pointer;
}
.wallet.active {
  @apply mx-4 px-5 border border-solid border-mineshaft-100;
  color: #000000;
  background-color: #7AB8B2;
  box-shadow: 5px 5px #333333; /* mineshaft-100*/
}
.wallet-address {
  /* font-size: ; */
}
</style>
