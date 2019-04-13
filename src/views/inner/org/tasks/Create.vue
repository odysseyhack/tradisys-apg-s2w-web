<template>
  <div>
    <div class="card mt-5">
      <div class="card-header">
        <h1>Create task</h1>
      </div>
      <div class="card-body">
        <b-card-text>
          <b-form @submit="onCreate">
            <b-form-group
              id="input-group-10"
              label="What need do?"
              label-for="input-10"
            >
            <b-form-input
              id="input-10"
              v-model="task.action"
              required
              placeholder="Clear nearest park"
            ></b-form-input>
          </b-form-group>

          <b-form-group
              id="input-group-10"
              label="Describe your task"
              label-for="input-10"
            >
            <b-form-input
              id="input-10"
              v-model="task.description"
              required
              placeholder="Collect 10 bottles"
            ></b-form-input>
          </b-form-group>

          <b-form-group
              id="input-group-10"
              label="How need time for that?"
              label-for="input-10"
            >
            <b-form-input
              id="input-10"
              v-model="task.hours"
              required
              placeholder="How need time for that?"
            ></b-form-input>
          </b-form-group>
          <div class="button-wrap">
            <b-button style="float: right;" type="submit" variant="primary">Make task</b-button>
          </div>
        </b-form>

        </b-card-text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      task: {
        action: '',
        description: '',
        hours: ''
      }
    }
  },
  methods: {
    onCreate () {
      alert(this.task)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
