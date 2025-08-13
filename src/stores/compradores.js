import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useCompradoresStore = defineStore('compradores', () => {
    let token = ref(useLoginStore().user.token);

    let getCompradores = async () => {
        try {
            let res = await axios.get("/compradores",
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

    let getComprador = async (id) => {
        try {
            let res = await axios.get("/compradores/" + id,
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

    let postComprador = async (comprador) => {
        try {
            let res = await axios.post("/compradores", comprador,
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

    let putComprador = async (id, comprador) => {
        try {
            let res = await axios.put("/compradores/" + id, comprador,
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
        getCompradores, getComprador, postComprador, putComprador
    }
});