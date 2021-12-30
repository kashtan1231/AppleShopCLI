<template>
  <div class="Login">
    <div class="container">

      <form @submit.prevent="SubmitUser()">
        <div class="formBox">
          <p class="label">Вход</p>

          <form action="/" class="backForm">
            <button class="backButton">❮</button>
          </form>

          <div class="formGroup">
            <label for="email">
              <p class="formLabel">Почта:</p>
            <p v-show="
                 v$.formUser.email.email.$invalid && v$.formUser.email.$error" class="formError"
              >Введите почту корректно</p></label>

            <input  @blur="v$.formUser.email.$touch()"
                    :class="[v$.formUser.email.$error  ? 'invalid' : 'formInput']"
                    v-model.trim="formUser.email"
                    type="text" id="email" placeholder="test@mail.ua" />
          </div>

          <div class="formGroup">
            <label for="password">
              <p class="formLabel">Пароль:</p>
              <p v-show="error" class="formError">Неверная почта или пароль</p>
            </label>
            <input  @blur="v$.formUser.password.$touch()"
                    class="formInput"
                    v-model.trim="formUser.password"
                    type="password" id="password" 
                    placeholder="••••••••••" />
          </div>

          <button class="regButton" type="button" @click="redirectToLink('/register')">
            Нет аккаунта? Создайте.
          </button>

          <button class="logButton" type="submit" :disabled="disabledRegBtn">Войти</button>
        </div>
      </form>

    </div>
  </div>
</template>

<style>
@import "../assets/login.css";
</style>

<script>
import useVuelidate from "@vuelidate/core"
import {
  required,
  email
} from "@vuelidate/validators"

export default {
  setup() {
    return { v$: useVuelidate() }
  },

  data: () => ({
    formUser: {
      email: "",
      password: "",
    }
  }),

  methods: {
    redirectToLink(link) {
      window.location = link
    },
    
    async SubmitUser() {
      const formData = {
        email: this.formUser.email,
        password: this.formUser.password,
      }

      this.$store.state.email = formData.email

      try {
        await this.$store.dispatch("login", formData)
        this.$router.push("/")
      } catch (e) {}
    }
  },

  computed: {
    disabledRegBtn() {
      return (
        this.v$.formUser.email.email.$invalid ||
        this.v$.formUser.password.$invalid
      )
    },

    error() {
      return this.$store.getters.error
    }
  },

  watch: {
    error(fbError) {
      console.log('Watch'+fbError)
    }
  },

  validations: () => ({
    formUser: {
      email: {
        email,
      },
      password: {
        required
      }
    }
  })
}
</script>
