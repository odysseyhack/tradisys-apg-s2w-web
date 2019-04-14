// Application config
//
// Environment vars should be defined by following method:
// https://cli.vuejs.org/guide/mode-and-env.html

export default {
  api: {
    backend: 'http://localhost:8081/',
    endpoints: {
      org: {
        register: 'api/register',
        tasks: 'org/tasks'
      }
    }
  }
}
