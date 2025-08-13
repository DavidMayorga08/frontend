import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from './login.js';

export const useFertilizanteStore = defineStore('fertilizante', () => {
    let token = ref(useLoginStore().user.token);

    let getFertilizantes = async () => {
        try {
            let res = await axios.get("/fertilizantes",
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

    let getFertilizante = async (id) => {
        try {
            let res = await axios.get("/fertilizantes/" + id,
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

    let postFertilizante = async (fertilizante) => {
        try {
            let res = await axios.post("/fertilizantes", fertilizante,
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

    let putFertilizante = async (id, fertilizante) => {
        try {
            let res = await axios.put("/fertilizantes/" + id, fertilizante,
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
        getFertilizantes, getFertilizante, postFertilizante, putFertilizante
    }
});