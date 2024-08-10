import { defineStore } from "pinia";
import { ref } from "vue";

export const UseAppStore = defineStore('App',()=>{

const showFooter = ref(true )
    return  {
        showFooter
    }
})