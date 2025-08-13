import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useLoginStore = defineStore("login", () => {
    let user = ref("");
    let login = async (data) => {
        try {
            let res = await axios.post("/login", data);
            console.log(res);
            user.value = res.data;
            return res.data;
        } catch (error) {
            console.error(error);
        }
    }

    return {
        user,
        login
    }
},
{
    persist: {
        paths: ["user"]
    }
});