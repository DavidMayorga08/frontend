import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useClimasStore = defineStore('climas', () => {
    let token = ref(useLoginStore().user.token);

    let getClimas = async () => {
        try {
            let res = await axios.get("/climas",
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

    let postClima = async (clima) => {
        try {
            let res = await axios.post("/climas", clima,
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
        getClimas,
        postClima
    }
});