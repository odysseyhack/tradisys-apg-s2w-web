import { TaskStatus } from '@/models'

const tasks = [
  {
    name: 'task 1',
    description: 'description',
    thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
    organization: 'organisation',
    status: TaskStatus.OPEN,
    notice: ''
  },
  {
    name: 'task 2',
    description: 'description',
    thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
    organization: 'organisation',
    status: TaskStatus.OPEN,
    notice: ''
  },
  {
    name: 'task 3',
    description: 'description',
    thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
    organization: 'organisation',
    status: TaskStatus.OPEN,
    notice: ''
  },
  {
    name: 'task 4',
    description: 'description',
    thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
    organization: 'organisation',
    status: TaskStatus.COMPLETED,
    notice: 'Amazing'
  },
  {
    name: 'task 5',
    description: 'description',
    thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
    organization: 'organisation',
    status: TaskStatus.CLOSED,
    notice: 'Amazing'
  },
  {
    name: 'task 6',
    description: 'description',
    thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
    organization: 'organisation',
    status: TaskStatus.CLOSED,
    notice: 'Amazing'
  },
  {
    name: 'task 7',
    description: 'description',
    thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
    organization: 'organisation',
    status: TaskStatus.REJECTED,
    notice: 'Amazing'
  },
  {
    name: 'task 8',
    description: 'description',
    thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
    organization: 'organisation',
    status: TaskStatus.PROGRESS,
    notice: 'Amazing'
  }
]

localStorage.setItem('tasks', JSON.stringify(tasks))
