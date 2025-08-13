import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useSemillasStore = defineStore('semillas', () => {
    let token = ref(useLoginStore().user.token);

    let getSemillas = async () => {
        try {
            let res = await axios.get("/semillas",
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

    let getSemilla = async (id) => {
        try {
            let res = await axios.get("/semillas/" + id,
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

    let postSemilla = async (semilla) => {
        try {
            let res = await axios.post("/semillas", semilla,
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

    let putSemilla = async (id, semilla) => {
        try {
            let res = await axios.put("/semillas/" + id, semilla,
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
        getSemillas, getSemilla, postSemilla, putSemilla
    }
});