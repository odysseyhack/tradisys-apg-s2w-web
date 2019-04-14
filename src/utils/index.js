export const updateTasks = (state, payload) => {
  const { key, status } = payload
  const index = state.tasks.findIndex(t => t.name === key)
  if (index > -1) {
    state.tasks[index].status = status
  }
  localStorage.setItem('tasks', JSON.stringify(state.tasks))
}
