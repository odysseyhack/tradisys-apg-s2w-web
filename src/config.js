// Application config
//
// Environment vars should be defined by following method:
// https://cli.vuejs.org/guide/mode-and-env.html

export default {
  api: {
    backend: 'http://localhost/',
    endpoints: {
      customer: {
        register: 'api/register'
      },
      org: {
        register: 'api/register'
      }
    }
  }
}
