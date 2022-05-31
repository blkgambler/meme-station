<template>
  <div class="text-center header">
    <div class="text-4xl text-mineshaft-100">
      <span>Connect your Ethereum Wallet to</span>
      <br />
      <div class="font-bold">
        <span>Meme Station</span>
      </div>
    </div>
    <div class="first-group-element">
      <span>
        In order to connect your wallet, a valid access code must be
        provided.
      </span>
    </div>
    <div class="first-group-element">
      <button
        :disabled="!isValidInviteCode || isConnecting || isWalletConnectActive || isMetaMaskActive"
        @click="connectWithMetaMask()"
      >
        <div
          class="connect-btn metamask"
          :class="{
            'enabled-btn': isValidInviteCode,
            'disabled-btn': !isValidInviteCode || isWalletConnectActive || isMetaMaskActive
          }"
        >
          <div class="btn-img">
            <img
              align="left"
              src="../assets/images/metamask.svg"
              alt="Metamask Icon"
            />
          </div>
          <div v-if="!isConnecting && isMetaMaskInstalled" class="btn-text">
            <span>Connect to MetaMask</span>
          </div>
          <div v-else-if="!isMetaMaskInstalled" class="btn-text">
            <span>Install MetaMask</span>
          </div>
          <!-- Show loading bar for when user is connecting -->
          <div v-else class="btn-text btn-loading"></div>
        </div>
      </button>
      <br />
      <span class="desc-text">Chrome, Firefox, Brave</span>
    </div>
    <div class="other-elements">
      <button
        @click="connectWithWalletConnect()"
        :disabled="!isValidInviteCode || isConnecting || isMetaMaskActive || isWalletConnectActive"
      >
        <div
          class="connect-btn walletconnect"
          :class="{
            'enabled-btn': isValidInviteCode,
            'disabled-btn': !isValidInviteCode || isMetaMaskActive || isWalletConnectActive
          }"
        >
          <div class="btn-img">
            <img
              align="left"
              src="../assets/images/walletconnect.svg"
              alt="Metamask Icon"
            />
          </div>
          <div v-if="!isConnecting" class="btn-text">
            <span>Use WalletConnect</span>
          </div>
          <div v-else class="btn-text btn-loading"></div>
        </div>
      </button>
      <br />
      <span class="desc-text">Balance, Cipher, Status, Toshi</span>
    </div>
    <div class="first-group-element">
      <label for="invite-code">Enter your invite code</label>
      <br />
      <div class="input-button section-element-margin">
        <input
          class="invite-input"
          name="invite-code"
          type="text"
          placeholder="Invite code..."
        />
        <button class="submit-btn" @click="validateInviteCode()">
          <span>Access</span>
        </button>
      </div>
      <div class="section-element-margin" v-show="showErrorMessage">
        <span class="error-message">Invalid Invite Code!</span>
      </div>
    </div>
  </div>
</template>

<script>
import WalletConnect from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'
import detectEthereumProvider from '@metamask/detect-provider'

export default {
  name: 'ConnectionMenu',
  data () {
    return {
      isValidInviteCode: true,
      showErrorMessage: false,
      isConnecting: false,
      isMetaMaskInstalled: false,
      isWalletConnectActive: localStorage.getItem('walletconnect') !== null,
      isMetaMaskActive: localStorage.getItem('metamask') !== null
    }
  },
  async mounted () {
    const ethereum = await detectEthereumProvider()
    if (ethereum) {
      this.isMetaMaskInstalled = true
      ethereum.on('accountsChanged', this.handleUserSession)
    } else {
      this.isMetaMaskInstalled = false
    }
  },
  methods: {
    async connectWithMetaMask () {
      if (this.isMetaMaskInstalled && !this.isMetaMaskActive) {
        const ethereum = await detectEthereumProvider()

        // Begin Connecting Process
        this.isConnecting = true
        await ethereum
          .request({ method: 'eth_requestAccounts' })
          .then((results) => {
            localStorage.setItem('metamask', results)
          })
          .catch((error) => {
            console.error(error)
            console.error('Wallet connection failed')
          })

        this.isConnecting = false
      } else {
        window.location.href = 'https://metamask.io/download'
      }
    },
    connectWithWalletConnect () {
      if (!this.isWalletConnectActive) {
        const connector = new WalletConnect({
          bridge: 'https://bridge.walletconnect.org', // Required
          qrcodeModal: QRCodeModal
        })

        // Check if connection is already established
        if (!connector.connected) {
          connector.createSession()
        }

        // Subscribe to connection events
        connector.on('connect', (error, payload) => {
          if (error) {
            throw error
          }

          // Get provided accounts and chainId
          const { accounts } = payload.params[0]
          localStorage.setItem('walletconnect', 'mock')
          this.handleUserSession(accounts)
        })

        connector.on('disconnect', (error, payload) => {
          if (error) {
            throw error
          }
          localStorage.removeItem('walletconnect')
          this.disconnectUserSession()
        })
      }
    },
    validateInviteCode () {
      // Only for demo purposes
      this.showErrorMessage = true
    },
    // Save wallet into storage and initiate a session
    handleUserSession (accounts) {
      if (accounts.length === 0) {
        this.disconnectUserSession()
      } else if (accounts.length === 1) {
        this.$router.push({
          path: '/'
        })
      } else {
        console.log('Cannot have multiple wallets at once!')
      }
      this.$emit('update-header')
      this.isWalletConnectActive = localStorage.getItem('walletconnect') !== null
      this.isMetaMaskActive = localStorage.getItem('metamask') !== null
    },
    disconnectUserSession () {
      localStorage.removeItem('metamask')
      this.$router.push({
        path: '/connection'
      })
    }
  }
}
</script>

<style scoped>
.header {
  padding-bottom: 5vh;
  margin-top: 10vh;
  display: block;
}
.first-group-element {
  margin-top: 10vh;
}
.other-elements {
  margin-top: 4vh;
}
.connect-btn {
  height: 3.3em;
  width: 16.5em;
  padding: 3px;
  border-radius: 7px;
  display: flex;
  position: relative;
}
.enabled-btn {
  background-color: white;
}
.disabled-btn {
  cursor: not-allowed;
}
.metamask {
  background-color: #f58630;
}
.walletconnect {
  background-color: #155cd6;
}
.btn-img {
  height: 100%;
  width: 20%;
  margin-left: 5px;
  margin-top: 3px;
  transition: all 0.2s;
}
.btn-text {
  width: 80%;
  height: 100%;
  margin: 3px;
  text-align: center;
  padding-top: 7px;
  font-weight: bold;
  transition: all 0.2s;
}
.btn-loading::after {
  content: "";
  position: absolute;
  width: 32px;
  height: 32px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border: 4px solid transparent;
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: button-loading-spinner 1s ease infinite;
}
@keyframes button-loading-spinner {
  from {
    transform: rotate(0turn);
  }

  to {
    transform: rotate(1turn);
  }
}
.desc-text {
  font-weight: 100;
  font-size: 11px;
  color: gray;
}
.section-element-margin {
  margin-top: 7px;
}
.input-button {
  display: flex;
  width: 20.5em;
  margin-right: auto;
  margin-left: auto;
}
.invite-input {
  width: 70%;
  height: 100%;
}
.submit-btn {
  background-color: #d65f41;
  width: 30%;
}
.error-message {
  color: red;
  font-size: 15px;
}
</style>
