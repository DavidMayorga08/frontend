import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const usePreparacionSuelosStore = defineStore('preparacionSuelos', () => {
    let token = ref(useLoginStore().user.token);

    let getPreparacionSuelos = async () => {
        try {
            let res = await axios.get("/preparacion-suelos",
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

    let getPreparacionSuelo = async (id) => {
        try {
            let res = await axios.get("/preparacion-suelos/" + id,
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

    let postPreparacionSuelo = async (preparacionSuelo) => {
        try {
            let res = await axios.post("/preparacion-suelos", preparacionSuelo,
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

    let putPreparacionSuelo = async (id, preparacionSuelo) => {
        try {
            let res = await axios.put("/preparacion-suelos/" + id, preparacionSuelo,
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
        getPreparacionSuelos, getPreparacionSuelo, postPreparacionSuelo, putPreparacionSuelo
    }
});