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
      <!-- {{ $store.state.tasks }} -->
      <Task 
        v-for="(task, i) in $store.state.tasks"
        :key="i"
        :task="task"
      />
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
        // mutation -> commit
        this.$store.commit('ADD_TASK', this.newTask);
        this.newTask = '';
      }
    }
  }
}
</script>
