import { defineStore } from "pinia";

// Two arguments 
// 1.Unique name:Is used by Pinia to connect the store to the view Dev tools
// 2. An object option where we'll define state getters and actions (obj or function)
export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
        task:{
            id:1,
            name: "First task",
            is_completed: false
        }
    })
})