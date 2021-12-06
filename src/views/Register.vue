<template>
  <div class="Register">
    <div class="container">
      <br />
      <pre></pre>

      <form @submit.prevent="SubmitUser()">
        <div class="formBox">
          <p class="label">Регистрация</p>

          <form action="/" class="backForm">
            <button class="backButton">❮</button>
          </form>

          <div class="formGroup">
            <label for="name">
              <p class="formLabel">Имя:</p>
              <p v-show=" v$.formUser.name.maxLength.$invalid &&
                          v$.formUser.name.$error" class="formError"
              >Максимум {{ v$.formUser.name.maxLength.$params.max }} символов</p>
            </label>

            <input
              @blur="v$.formUser.name.$touch()"
              :class="[v$.formUser.name.$error ? 'invalid' : 'formInput']"
              v-model.trim="formUser.name" type="text" id="name"
              :placeholder="v$.formUser.name.$error ? 'Обязательное поле' : 'activniy_gomez'"/>
          </div>

          <div class="formGroup">
            <label for="email">
              <p class="formLabel">Почта:</p>
              <p v-show="
                 v$.formUser.email.email.$invalid && v$.formUser.email.$error" class="formError"
              >Введите почту корректно</p>
              <p v-show="error" class="formError">Такая почта уже занята</p>
            </label>

            <input
              @blur="v$.formUser.email.$touch()"
              :class="[v$.formUser.email.$error || error  ? 'invalid' : 'formInput']"
              v-model.trim="formUser.email" type="text" id="email"
              placeholder="activniy_gomez@mail.ua"/>
          </div>

          <div class="formGroup">
            <label for="password">
              <p class="formLabel">Пароль:</p>
              <p v-show="
                  v$.formUser.password.minLength.$invalid &&
                  v$.formUser.password.$error" 
                  class="formError"
              >Минимум {{ v$.formUser.password.minLength.$params.min }} символов</p>

              <p v-show=" v$.formUser.password.maxLength.$invalid &&
                          v$.formUser.password.$error" class="formError"
              >Максимум {{ v$.formUser.password.maxLength.$params.max }} символов</p>
            </label>

            <input
              @blur="v$.formUser.password.$touch()"
              :class="[v$.formUser.password.$error ? 'invalid' : 'formInput']"
              v-model.trim="formUser.password" type="password" id="password"
              :placeholder="v$.formUser.password.$error ? 'Обязательное поле' : '••••••••••'"/>
          </div>

          <button class="regButton" type="button" @click="redirectToLink('/login')">
            Есть аккаунт? Войдите.
          </button>

          <button class="logButton" type="submit" :disabled="disabledRegBtn">Создать</button>
          
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
  email,
  minLength,
  maxLength
} from "@vuelidate/validators"

export default {
  setup() {
    return { v$: useVuelidate() }
  },

  data: () => ({
    formUser: {
      name: "",
      email: "",
      password: ""
    }
  }),

  methods: {
    redirectToLink(link) {
      window.location = link
    },

    async SubmitUser() {
      const formData = {
        name: this.formUser.name,
        email: this.formUser.email,
        password: this.formUser.password
      }

      try {
        await this.$store.dispatch("register", formData)

        this.$router.push("/")
      } catch (e) {throw e}
    }
  },

  computed: {
    disabledRegBtn() {
      return (
        this.v$.formUser.name.$invalid ||
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
      console.log(fbError)
    }
  },

  validations: () => ({
    formUser: {
      name: {
        required,
        maxLength: maxLength(10)
      },
      email: {
        email
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(20)
      }
    }
  })
}
</script>
