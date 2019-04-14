import { TaskStatus } from '@/models'

const createTask = (
  name,
  dappAddress,
  description,
  status
) => {
  return {
    name,
    dappAddress,
    status,
    description,
    thumbnail: 'https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg',
    organization: 'organisation',
    notice: ''
  }
}

const tasks = [
  createTask(
    'Latin dancer to partner wheelchair dancers',
    '3MwBUcsJ8iRwT8pDpebvzQXfaS4nLVmsnvk',
    'We are setting up a non-profit organisation to organise Latin dance projects in 2019 for wheelchair dancers, refugees and autists. We are looking for dance partners to help them.',
    TaskStatus.OPEN
  ),
  createTask(
    'Vacancy Volunteers wanted for between-hours-care (BHC)',
    '3NARGDErtCGmAXMVNgLRB2Uo4JjVaayhLEd',
    'Supervising (in total) some 150 children during recess hours.',
    TaskStatus.OPEN
  ),
  createTask(
    'Host/ Hostess',
    '3NCMqf9y3y8a88j7EyiDTzJs7q6fp9uvurk',
    'You attend our sports accomodation during games and competitions. You welcome our members and visitors and you explain them on which field they are going to play, where the dressing rooms are and (during the outdoor season) offer drinks and food against payment.',
    TaskStatus.OPEN
  ),
  createTask(
    'Nurse / caregiver individual health care',
    '3N6U4JxieH3dnucpBb4zwuiQJRUuHSzeHGJ',
    'Stichting ThuisPoli is looking for a socially committed nurse / caregiver individual health care to assist us in providing care and maintaining a good standard of practical vocational training.',
    TaskStatus.OPEN
  ),
  createTask(
    'Search for a volunteer who likes swimming',
    '3N6VNu9mxt7qBAZapyNGjn1GTu4NdGuZRNg',
    'We are looking for someone who wants to accompany a person with severe multiple disabilities during swimming.\n' +
    'Swimming is organized weekly on Mondays and Thursdays. On Monday\'s from 13.00 and on Thursday\'s from 11.00.',
    TaskStatus.OPEN
  ),
  createTask(
    'Grant writer/ Fundraiser ',
    '3NCjT1efjvdH99RLpNqgSCj915AWspPr92W',
    'Develop fundraising programs\n' +
    '• Monitor progress of fundraising activities\n' +
    '• Identify and build relationships with potential donors\n' +
    '• Research prospective donors',
    TaskStatus.OPEN
  ),
  createTask(
    'Looking for business mentors for newcomers',
    '3MriNuwfu1H9S8FSUH75QuWqbff5GJqTTDS',
    'The business mentor helps a refugee who is new in the Netherlands with setting up their own business. The refugees follow a business incubation program but need additional support to understand Dutch society and its rules and regulations etc.',
    TaskStatus.OPEN
  ),
  createTask(
    'Educator',
    '3N1DzVVT6jrobCvgfKuN1WehtBqvYhkP2fi',
    'We need a Educator to keep our organization trained and educated. \n' +
    '- Conducting and maintaining educational programs both general and job specific as well as global and local\n' +
    '- Publication and management of courses and trainings\n' +
    '- Scheduling training sessions and inviting volunteers\n' +
    '- Training volunteers',
    TaskStatus.OPEN
  ),
  createTask(
    'Production manager live performances',
    '3N2Haeubf4G9LHU7UnoHwCiYxtRXRZckWC5',
    'Production manager for:\n' +
    'live performances, \n' +
    'rehearsals, \n' +
    'video and photo recordings, \n' +
    'sale of merchandise.',
    TaskStatus.OPEN
  ),
  createTask(
    'Dog Lover Wanted!',
    '3N8jmtQ8STaZnw5JHtoYYX9F5BpxKLTZrEu',
    'We are looking for enthusiastic dog lovers who would like to help out at the dog department. Here some of the shelter dogs live but also the dogs who are enjoying their holiday.\n' +
    'Your duties will be cleaning the dog accommodations, but also assisting the staff with other chores, such as feeding, washing etc. If all the work is done, there is also time to play with the dogs.',
    TaskStatus.OPEN
  )
]

localStorage.setItem('tasks', JSON.stringify(tasks))
