import { TaskStatus } from '@/models'

const createTask = (
  name,
  dappAddress,
  status
) => {
  return {
    name,
    dappAddress,
    status,
    description: 'description',
    thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
    organization: 'organisation',
    notice: ''
  }
}

const tasks = [
  createTask('task 1', '3Mtkt8VoiMzqDe1quhBKKQgN6BenGdc1hD1', TaskStatus.OPEN),
  createTask('task 2', '3MupBnZ4TGcTMqz4HVyZX55rmczs87xjn1w', TaskStatus.OPEN),
  createTask('task 3', '3MupBnZ4TGcTMqz4HVyZX55rmczs87xjn1w', TaskStatus.OPEN),
  createTask('task 4', '3Mv8cnZkWB5hrHBFYmHSNyfKRAqRFgtVzVR', TaskStatus.OPEN),
  createTask('task 5', '3MwPkeCtvzVjdGyDpEWur7cviXnZjHSthxR', TaskStatus.OPEN),
  createTask('task 6', '3N3pWw5m76WLY8nc5D7GqKxVXfqTr2iyMjM', TaskStatus.OPEN),
  createTask('task 7', '3N5tTeRfywvD58TbveZgMtAkvRtmM2yvXWx', TaskStatus.OPEN),
  createTask('task 8', '3NBZxDv2CzNGfSCdLVS9qo3UkQPV1tcRvyr', TaskStatus.PROGRESS),
  createTask('task 9', '3NA2186TAyWCowiAoeVaqL2HbdCgMbHrH71', TaskStatus.PROGRESS),
  createTask('task 10', '3N71TshY9DHywKiqZwwPrZzhzyuBEY3RcFm', TaskStatus.REJECTED)
]

localStorage.setItem('tasks', JSON.stringify(tasks))
