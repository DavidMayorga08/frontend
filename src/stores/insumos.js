import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useInsumosStore = defineStore('insumos', () => {
    let token = ref(useLoginStore().user.token);

    let getInsumos = async () => {
        try {
            let res = await axios.get("/insumos",
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

    let getInsumo = async (id) => {
        try {
            let res = await axios.get("/insumos/" + id,
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

    let postInsumo = async (insumo) => {
        try {
            let res = await axios.post("/insumos", insumo,
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

    let putInsumo = async (id, insumo) => {
        try {
            let res = await axios.put("/insumos/" + id, insumo,
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
        getInsumos, getInsumo, postInsumo, putInsumo
    }
});