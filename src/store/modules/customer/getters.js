import { TaskStatus } from '@/models'

export default {
  tasks: state => state.tasks,
  tasksOpen: state => state.tasks.filter(t => t.status === TaskStatus.OPEN),
  tasksCompleted: state => state.tasks.filter(t => t.status === TaskStatus.COMPLETED),
  tasksRejected: state => state.tasks.filter(t => t.status === TaskStatus.REJECTED),
  tasksProgress: state => state.tasks.filter(t => t.status === TaskStatus.PROGRESS)
}
