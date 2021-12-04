import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getDatabase, ref, onValue } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyDPX4u01p6qyFnuBtcU_DIRITjK4E3krcM",
  authDomain: "appleshopvue.firebaseapp.com",
  projectId: "appleshopvue",
  storageBucket: "appleshopvue.appspot.com",
  messagingSenderId: "237593056031",
  appId: "1:237593056031:web:82af138b8c3bd0d50b562a",
  measurementId: "G-3R3RFDFQFM"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth()
const database = getDatabase()

export default {
    state: {
        info: {}
    },

    mutations: {
        setInfo(state, info) {
            state.info = info
        },

        clearInfo(state) {
            state.info = {}
        }
    },

    actions : {
        async fetchInfo ({dispatch, commit}) {
            try {
                const uid = await dispatch('getUid')
                console.log("ID: "+uid)
                        
                onValue(ref(database, '/users/' + uid + '/info'), (snapshot) => {
                        const data = snapshot.val()
                        console.log("USER: "+data)
                        commit('setInfo', data )
                })
            } catch (e) {
                throw e
            }
        }
    },

    getters: {
        info: s => s.info
    }
}