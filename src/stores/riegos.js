import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useRiegosStore = defineStore('riegos', () => {
    let token = ref(useLoginStore().user.token);

    let getRiegos = async () => {
        try {
            let res = await axios.get("/riegos",
                {
                    headers: {
                        "token": token.value,
                    },
                }
            )
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }

    let getRiego = async (id) => {
        try {
            let res = await axios.get("/riegos/" + id,
                {
                    headers: {
                        "token": token.value,
                    },
                }
            )
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    let postRiego = async (riego) => {
        try {
            let res = await axios.post("/riegos", riego,
                {
                    headers: {
                        "token": token.value,
                    },
                }
            )
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    let putRiego = async (id, riego) => {
        try {
            let res = await axios.put("/riegos/" + id, riego,
                {
                    headers: {
                        "token": token.value,
                    },
                }
            )
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    return {
        getRiegos, getRiego, postRiego, putRiego
    }
});