<template>
 <div class="container-fluid">
    <h1 class="display-4">General</h1>
    <hr>
    <p class="h5">Task overview</p>
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
    <hr>
    <p class="h5">Organization overview</p>
     <b-card-group deck>
      <b-card
        style="background-color: #1cc88a; color: white;"
      >
      <b-card-text>
          <h5>Active</h5>
          <h2 class="font-weight-bold">
            {{tasks.active}}
          </h2>
        </b-card-text>
      </b-card>

      <b-card
        style="background-color: #f6c23e; color: white;"
      >
      <b-card-text>
          <h5>Waiting validation</h5>
          <h2 class="font-weight-bold">
            {{tasks.new}}
          </h2>
        </b-card-text>
      </b-card>
     </b-card-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tasks: {
        open: 600,
        progress: 430,
        complete: 1024,
        rejected: 32,
        total: 1500,
        active: 67,
        new: 7
      }
    }
  }
}
</script>
