import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useAnalisisSuelosStore = defineStore('analisisSuelos', () => {
    let token = ref(useLoginStore().user.token);

    let getAnalisisSuelos = async () => {
        try {
            let res = await axios.get("/analisis-suelos",
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

    let getAnalisisSuelo = async (id) => {
        try {
            let res = await axios.get("/analisis-suelos/" + id,
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

    let postAnalisisSuelo = async (analisisSuelo) => {
        try {
            let res = await axios.post("/analisis-suelos", analisisSuelo,
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

    let putAnalisisSuelo = async (id, analisisSuelo) => {
        try {
            let res = await axios.put("/analisis-suelos/" + id, analisisSuelo,
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
    getAnalisisSuelos , getAnalisisSuelo, postAnalisisSuelo, putAnalisisSuelo
}
});