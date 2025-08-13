import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useFincasStore = defineStore('fincas', () => {
    let token = ref(useLoginStore().user.token);

    let getFincas = async () => {
        try {
            let res = await axios.get("/fincas",
                {
                    headers: {
                        "token": token.value
                    }
                }
            )
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    let getFinca = async (id) => {
        try {
            let res = await axios.get("/fincas/" + id,
                {
                    headers: {
                        "token": token.value
                    }
                }
            )
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    return {
        getFincas, getFinca
    }
});