import { defineStore } from "pinia";
import { allTasks } from "../http/task-api";
import { computed, reactive, ref } from "vue";

// Two arguments 
// 1.Unique name:Is used by Pinia to connect the store to the view Dev tools
// 2. An object option where we'll define state getters and actions (obj or function)

const tmp = {
    state: () => ({
       
    }),
    getters: {

    },
    actions: {
       
    }
}

export const useTaskStore = defineStore('taskStore', ()=>{
    const tasks = ref([])

    const uncompletedTasks = computed(()=>tasks.value.filter(task => !task.is_completed))
    const completedTasks = computed(()=>tasks.value.filter(task => task.is_completed))

    const fetchAllTasks = async()=> {
        const {data} = await allTasks();
        tasks.value = data.data;
    }

    return {
        tasks, completedTasks, uncompletedTasks, fetchAllTasks
    }
})