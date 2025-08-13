import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useCultivosStore = defineStore('cultivos', () => {
    let token = ref(useLoginStore().user.token);

    let getCultivos = async () => {
        try {
            let res = await axios.get("/cultivos",
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

    let getCultivo = async (id) => {
        try {
            let res = await axios.get("/cultivos/" + id,
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

    let postCultivo = async (cultivo) => {
        try {
            let res = await axios.post("/cultivos", cultivo,
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

    let putCultivo = async (id, cultivo) => {
        try {
            let res = await axios.put("/cultivos/" + id, cultivo,
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
        getCultivos, getCultivo, postCultivo, putCultivo
    }
    });