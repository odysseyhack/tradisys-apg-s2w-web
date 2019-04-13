<template>
  <div class="container-fluid">
    <h1 class="display-4">{{ user.firstName}} {{ user.lastName}}</h1>
    <hr>
    <p class="h5">Overview</p>
    <b-card-group deck>
      <b-card
        header="Karma"
        border-variant="warning"
        header-border-variant="warning"
      >
        <b-card-text>
          <h2 class="font-weight-bold">
            {{user.karma}}
          </h2>
        </b-card-text>
      </b-card>

      <b-card
        header="Vote tokens"
        border-variant="primary"
        header-border-variant="primary"
      >
        <b-card-text>
          <h2 class="font-weight-bold">
            {{user.tokens}}
          </h2>
        </b-card-text>
      </b-card>

      <b-card
        header="Completed"
        border-variant="success"
        header-border-variant="success"
      >
        <b-card-text>
          <h2 class="font-weight-bold">
            {{user.completed}}
          </h2>
        </b-card-text>
      </b-card>

      <b-card
        header="Hours"
        border-variant="info"
        header-border-variant="info"
      >
        <b-card-text>
          <h2 class="font-weight-bold">
            {{user.time}}
          </h2>
        </b-card-text>
      </b-card>
    </b-card-group>
    <hr>
    <p class="h5">Current task</p>
    <div class="card flex-row flex-wrap mt-3">
      <div class="card-header border-0 p-0">
          <img src="https://www.holland.com/static/design/0BC4B5D1-A9FA-4DDE-875A-3D3F8A9C9C35-1633-fsm/gfx/9d3d-b54db275f891_1900x1050.jpg" alt="" width="300">
      </div>
      <div class="card-block px-2 p-1">
          <h4 class="card-title">Lorem ipsmus</h4>
          <span class="card-text">Description.</span><br>
      </div>
      <div class="card-footer w-100 text-muted p-2">
          <span>Somwergatn strasse 67 TH</span>
          <p style="margin: 0 10px 0 0; display: inline-block; float:right; font-weight: 700;" class="mb-0">5 hours</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        firstName: 'Rob',
        lastName: 'Tennesy',
        karma: 216,
        tokens: 31,
        completed: 7,
        time: 46
      }
    }
  }
}
</script>

<style scoped>

</style>
