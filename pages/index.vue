<template>
  <main>
    <h1>Task Board</h1>
    <p>Create a list of tasks</p>

    <div class="create-new">
      <input 
        type="text" 
        v-model="newTask" 
        placeholder="Add a new task" 
        @keypress.enter="addTask" 
      />
      <button @click="addTask">Add Task</button>
    </div>

    <div class="tasks">
      <!-- Component -->
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      newTask: ''
    }
  },

  methods: {
    addTask() {
      if(this.newTask) { // It´s not empty

      }
    }
  }
}
</script>
