import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import { useLoginStore } from '../stores/login.js';

export const useProveedoresStore = defineStore('proveedores', () => {
    let token = ref(useLoginStore().user.token);

    let getProveedores = async () => {
        try {
            let res = await axios.get("/proveedores",
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

    let getProveedor = async (id) => {
        try {
            let res = await axios.get(`/proveedores/${id}`,
                {
                    headers: {
                        "token": token.value
                    }
                }
            )
            return res.data;
        }
        catch (error) {
            console.error(error);
        }
    }

    let postProveedor = async (proveedor) => {
        try {
            let res = await axios.post("/proveedores", proveedor,
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

    let putProveedor = async (id, proveedor) => {
        try {
            let res = await axios.put("/proveedores/" + id, proveedor,
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
        getProveedores, getProveedor, postProveedor, putProveedor
    }
});