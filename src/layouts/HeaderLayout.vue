<template>
  <header>
    <div class="menu">

      <div class="contents">

        <div class="logoBox">
          <a href="/" class="redirect">
            <img
              src="../images/fixed/appleLogo.png"
              alt="appleLogo"
              class="appleLogo"
              />
          </a>
        </div>
        

        <div class="menuButton" @click="isMenuButtonPressed = !isMenuButtonPressed">
          <div :class="isMenuButtonPressed === true ? 'firstX' : 'first'"></div>
          <div :class="isMenuButtonPressed === true ? 'secondX' : 'second'"></div>
          <div :class="isMenuButtonPressed === true ? 'thirdX' : 'third'"></div>
          <div :class="isMenuButtonPressed === true ? 'fourthX' : 'fourth'"></div>
        </div>

          <button :class="isProfileButtonPressed === false ? 'logButton profButton' : 'logButtonX profButton'" @click="isProfileButtonPressed = !isProfileButtonPressed, uid(),  info(), layout()">
          <div class="logBox profBox">
            <img src="../images/fixed/login.png" alt="login">
            <p>{{ name }}</p>
          </div>
          </button>

          <button v-if="isProfileButtonPressed" v-show="name !== 'Профиль'" href="/login" class="enterButton profButton" @click="logout()">
          <div class="enterBox profBox">
            <p>Выйти</p>
          </div>
          </button>

          <button v-if="isProfileButtonPressed" v-show="name === 'Профиль'" href="/login" class="enterButton profButton" @click="redirectToLink('/login')">
          <div class="enterBox profBox">
            <p>Войти</p>
          </div>
          </button>

      </div>

      <transition name="bar">
        <div v-if="isMenuButtonPressed" class="gridBoxHeader" @click='isProductShow = true'>
          <div class="bar">
            <a href="/imac" class="imacList">iMac</a>
            <a href="/iphone" class="iphoneList">iPhone</a>
            <a href="/ipad" class="ipadList">iPad</a>
            <a href="/macbook" class="macbookList">MacBook</a>
            <a href="/watch" class="watchList">Watch</a>
            <a href="/airpods" class="airpodsList">Airpods</a>
            <a href="/tv" class="tvList">TV и Дом</a>
          </div>

          <div class="product">
            <span>{{ getTopper }}</span>
          </div>
        </div>
      </transition>
    </div>
  </header>

  <router-view />

  <footer>
    <div class="footerContainer">

      <div class="socials">
        <p>Мы в социальных сетях:</p>

        <div class="socialsGrid">
          <a href="https://facebook.com/" target="_blank">
            <img src="../images/fixed/facebookLogo.png" alt="facebookLogo" />
          </a>

          <a href="https://instagram.com/" target="_blank">
            <img src="../images/fixed/instaLogo.png" alt="instaLogo" />
          </a>

          <a href="https://www.youtube.com/" target="_blank">
            <img src="../images/fixed/youtubeLogo.png" alt="youtubeLogo" />
          </a>
        </div>
      </div>

      <div class="rights">
        <p>© Apple Inc., 2021 г. Все права защищены.</p>
      </div>

      <div class="contacts">
        <p>00001, г.Киев, улица Героїв Майдуну, палатка №54</p>
        <p>Контактный телефон: 050 148-82-28</p>
      </div>

      <div class="payment">
        <p>Мы принимаем:</p>

        <div class="paymentGrid">
          <img src="https://ion.ua/assets/images/accept-visa.svg" alt="visa" />
          <img
            src="https://ion.ua/assets/images/accept-mc.svg"
            alt="mastercard"
          />
          <img
            src="https://ion.ua/assets/images/apple_pay-icon.svg"
            alt="apple pay"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg/2560px-Google_Pay_%28GPay%29_Logo_%282018-2020%29.svg.png"
            alt="google pay"
          />
        </div>
      </div>

    </div>
  </footer>
</template>

<style >
@import "../assets/index.css";
</style>

<script>
export default {
  data: () => ({
    isMenuButtonPressed: true,
    isProfileButtonPressed: false
  }),
  
  async mounted() {
      let number = 0
      const interval = setInterval(() => {
        if(Object.keys(this.$store.getters.info).length === 0) {
          this.$store.dispatch('fetchInfo')
        } 
        number++
        console.log(number)
        if(this.$store.getters.info.name || number === 20) clearInterval(interval)
      }, 100)
  },

  methods: {
    redirectToLink(link) {
      window.location = link
    },
    async logout() {
      await this.$store.dispatch('logout')
    },
    async uid() {
      const uid = await this.$store.dispatch('getUid')
      if (uid) {
        console.log(uid)
      } else {
        console.log("Nema")
      }
    },

    async info() {
      await this.$store.dispatch('fetchInfo')
    },

    layout() {
      console.log(this.$route.meta.layout)
    }
  },

  computed: {
    getTopper () {
      return this.$store.getters.returnTopper
    },
    name() {
      const name = this.$store.getters.info.name
      return name ? name : 'Профиль'
    }
  }
}
</script>
