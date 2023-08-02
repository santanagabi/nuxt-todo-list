// store = handle application data and states

// 1-) states
export const state = () => ({
  tasks: [],
});

// 2-) mutations
// change the state
export const mutations = {
  ADD_TASK(state, task) {
    // create a new task and join it with the existing ones
    state.tasks = [{ content: task, done: false }, ...state.tasks];
    // state.tasks.push({ content: task, done: false });
    // state.tasks.unshift({ conten: task, done: false });
  },
  REMOVE_TASK(state, task) {
    // state.tasks.splice(state.tasks.indexOf(task), 1);
    state.tasks = state.tasks.filter((item) => item !== task);
  },
  TOGGLE_TASK(state, task) {
    task.done = !task.done;
  },

  // actions and getters
};

