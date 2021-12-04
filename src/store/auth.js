import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { getDatabase, ref, set } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyDPX4u01p6qyFnuBtcU_DIRITjK4E3krcM",
  authDomain: "appleshopvue.firebaseapp.com",
  projectId: "appleshopvue",
  storageBucket: "appleshopvue.appspot.com",
  messagingSenderId: "237593056031",
  appId: "1:237593056031:web:82af138b8c3bd0d50b562a",
  measurementId: "G-3R3RFDFQFM"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const database = getDatabase()

export default {
  actions: {

    async login({ commit }, { email, password }) {
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },

    getUid() {
      const user = auth.currentUser
      console.log("currentUser: " + user)
      return user ? user.uid : null
    },

    async register({dispatch, commit}, {email, password, name}) {
      try {
        await (createUserWithEmailAndPassword(auth, email, password))
        
        const uid = await dispatch('getUid')

        await set(ref(database,`/users/${uid}/info`), {
          name,
          email,
          password
        })

      } catch (e) {
        commit('setError', e)
        throw e
      }
    },

    async logout({commit}) {
      await signOut(auth)
      commit('clearInfo')
    }
    
  }
}
