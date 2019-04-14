import { TaskStatus } from '@/models'

const createTask = (
  name,
  status
) => {
  return {
    name,
    status,
    description: 'description',
    thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
    organization: 'organisation',
    notice: ''
  }
}

const tasks = [
  createTask('task 1', TaskStatus.OPEN),
  createTask('task 2', TaskStatus.OPEN),
  createTask('task 3', TaskStatus.OPEN),
  createTask('task 4', TaskStatus.COMPLETED),
  createTask('task 5', TaskStatus.CLOSED),
  createTask('task 6', TaskStatus.CLOSED),
  createTask('task 7', TaskStatus.REJECTED),
  createTask('task 8', TaskStatus.PROGRESS)
]

localStorage.setItem('tasks', JSON.stringify(tasks))
