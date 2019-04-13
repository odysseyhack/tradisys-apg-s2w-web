<template>
  <div class="container">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">
        <div>
          <b-card no-body>
            <b-tabs card>
              <b-tab title="Participant" active>
                <b-card-text>
                  <h3>Participant</h3>
                  <register-form-participant></register-form-participant>
                </b-card-text>
              </b-tab>
              <b-tab title="Fund">
                <b-card-text>
                  <h3>Fund</h3>
                  <register-form-fund></register-form-fund>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

<script>
import RegisterFormParticipant from '@/components/RegisterFormParticipant.vue'
import RegisterFormFund from '@/components/RegisterFormFund.vue'

export default {

  name: 'Register',
  components: {
    RegisterFormParticipant,
    RegisterFormFund
  }
}
</script>

<style lang="scss">
  .nav-tabs .nav-item {
    width: 50% !important;
  }
</style>
