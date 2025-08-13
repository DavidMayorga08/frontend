import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useProduccionesStore = defineStore("producciones", () => {
    let token = ref(useLoginStore().user.token);

    let getProducciones = async () => {
        try {
            let res = await axios.get("/producciones",
                {
                    headers: {
                        "token": token.value
                    }
                }
            )
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    let getProduccion = async (id) => {
        try {
            let res = await axios.get("/producciones/" + id,
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

    let postProduccion = async (produccion) => {
        try {
            let res = await axios.post("/producciones", produccion,
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

    let putProduccion = async (id, produccion) => {
        try {
            let res = await axios.put("/producciones/" + id, produccion,
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
        getProducciones, getProduccion, postProduccion, putProduccion
    }
});