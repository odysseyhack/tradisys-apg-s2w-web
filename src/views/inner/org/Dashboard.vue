<template>
  <div class="container-fluid">
    <h1 class="display-4">Social Organization</h1>
    <hr>
    <p class="h5">Overview</p>
    <b-card-group deck>
      <b-card
        header="Open"
        border-variant="default"
        header-border-variant="default"
      >
        <b-card-text>
          <h2 class="font-weight-bold">
            {{tasks.open}}
          </h2>
        </b-card-text>
      </b-card>

      <b-card
        header="In Progress"
        border-variant="primary"
        header-border-variant="primary"
      >
        <b-card-text>
          <h2 class="font-weight-bold">
            {{tasks.progress}}
          </h2>
        </b-card-text>
      </b-card>

      <b-card
        header="Complete"
        border-variant="success"
        header-border-variant="success"
      >
        <b-card-text>
          <h2 class="font-weight-bold">
            {{tasks.complete}}
          </h2>
        </b-card-text>
      </b-card>

      <b-card
        header="Rejected"
        border-variant="warning"
        header-border-variant="warning"
      >
        <b-card-text>
          <h2 class="font-weight-bold">
            {{tasks.rejected}}
          </h2>
        </b-card-text>
      </b-card>
    </b-card-group>
    <b-progress height="2rem" class="mt-4" :max="1" show-value>
      <b-progress-bar
        show-progress
        :value="(tasks.open / tasks.total)"
        variant="secondary">
        {{tasks.open}}
      </b-progress-bar>
      <b-progress-bar
        show-progress
        animated
        :value="(tasks.progress / tasks.total)"
        variant="primary">
        {{tasks.progress}}
      </b-progress-bar>
      <b-progress-bar
        :value="(tasks.complete / tasks.total)"
        variant="success">
        {{tasks.complete}}
      </b-progress-bar>
      <b-progress-bar
        :value="(tasks.rejected / tasks.total)"
        variant="warning">
        {{tasks.rejected}}
      </b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tasks: {
        open: 8,
        progress: 12,
        complete: 17,
        rejected: 3,
        total: 40
      }
    }
  }
}
</script>

<style scoped>

</style>
