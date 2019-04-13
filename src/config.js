// Application config
//
// Environment vars should be defined by following method:
// https://cli.vuejs.org/guide/mode-and-env.html

export default {
  api: {
    backend: '172.16.162.80/api',
    endpoints: {
      customer: {
        register: 'customer/register'
      },
      org: {
        register: 'org/register'
      }
    }
  }
}
