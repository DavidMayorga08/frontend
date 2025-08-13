import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useParcelasStore = defineStore('parcelas', () => {
    let token = ref(useLoginStore().user.token);

    let getParcelas = async () => {
        try {
            let res = await axios.get("/parcelas",
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

    let getParcela = async (id) => {
        try {
            let res = await axios.get(`/parcelas/${id}`
                ,
                {
                    headers: {
                        "token": token.value
                    }
                }
            )
            return res.data;
        }
        catch (error) {
            console.log(error);
        }
    }

    let postParcela = async (parcela) => {
        try {
            let res = await axios.post("/parcelas", parcela,
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

    let putParcela = async (id, parcela) => {
        try {
            let res = await axios.put("/parcelas/" + id, parcela,
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

    return {
        getParcelas, getParcela, postParcela, putParcela
    }
});