<template>
  <div class="wrap-register">
    <div class="container">
      <div class="row">
        <div class="col-6 align-self-center">
          <h1 class="main-header text-center">registration</h1>
        </div>
        <div class="col-6">
          <b-card no-body>
            <b-tabs card>
              <b-tab title="Customer" active>
                <b-card-text>
                  <b-form @submit="onCustomerSubmit" v-if="show">
                    <b-form-group
                      id="input-group-1"
                      label="First name"
                      label-for="input-1"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="customer.firstName"
                        required
                        placeholder="Bob"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      id="input-group-2"
                      label="Second name"
                      label-for="input-2"
                    >
                      <b-form-input
                        id="input-2"
                        v-model="customer.secondName"
                        required
                        placeholder="Rozenberg"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      id="input-group-3"
                      label="BSN"
                      label-for="input-3"
                    >
                      <b-form-input
                        id="input-3"
                        v-model="customer.bsn"
                        required
                        placeholder="2345 2431 342"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      id="input-group-4"
                      label="Address"
                      label-for="input-4"
                    >
                      <b-form-input
                        id="input-4"
                        v-model="customer.address"
                        required
                        placeholder="Surinamestraat 27 2585 GJ  Den Haag"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      id="input-group-5"
                      label="Your birth"
                      label-for="input-5"
                    >
                      <b-form-input
                        id="input-5"
                        v-model="customer.birth"
                        type="date"
                        required
                      ></b-form-input>
                    </b-form-group>

                    <div class="button-wrap">
                      <b-button style="float: right" type="submit" variant="primary">Submit</b-button>
                    </div>
                  </b-form>
                </b-card-text>
              </b-tab>
              <b-tab title="Organization">
                <b-card-text>
                  <b-form @submit="onOrgSubmit" v-if="show">
                    <b-form-group
                      id="input-group-10"
                      label="Name"
                      label-for="input-10"
                    >
                      <b-form-input
                        id="input-10"
                        v-model="organization.name"
                        required
                        placeholder="Name"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      id="input-group-11"
                      label="Address"
                      label-for="input-11"
                    >
                      <b-form-input
                        id="input-11"
                        v-model="organization.address"
                        required
                        placeholder="Surinamestraat 27 2585 GJ  Den Haag"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group
                      id="input-group-12"
                      label="RSIN"
                      label-for="input-13"
                    >
                      <b-form-input
                        id="input-14"
                        v-model="organization.rsin"
                        required
                        placeholder="3425 4355 2343"
                      ></b-form-input>
                    </b-form-group>

                    <div class="button-wrap">
                      <b-button style="float: right;" type="submit" variant="primary">Submit</b-button>
                    </div>
                  </b-form>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BackendApi } from '@/api'

export default {
  data () {
    return {
      customer: {
        firstName: '',
        secondName: '',
        bsn: '',
        address: '',
        birth: ''
      },
      organization: {
        name: '',
        address: '',
        role: 'ORGANIZATION',
        type: 'ORGANIZATION',
        status: 'VERIFIED',
        rsin: ''
      },
      show: true
    }
  },
  methods: {
    async onCustomerSubmit (evt) {
      evt.preventDefault()
      try {
        await BackendApi.Customer.register(this.customer)
      } catch (e) {
        console.error(e)
      }
    },
    async onOrgSubmit (evt) {
      evt.preventDefault()
      try {
        const a = await BackendApi.Org.register(this.organization)
        console.log(a)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style lang="scss">
  .wrap-register {
    height: 100%;
    display: flex;
    align-items: center;
    background: #2575fc;
    background: -webkit-linear-gradient(to left, #6a11cb, #2575fc);
    background: -o-linear-gradient(to left, #6a11cb, #2575fc);
    background: -moz-linear-gradient(to left, #6a11cb, #2575fc);
    background: linear-gradient(to left, #6a11cb, #2575fc);

    .btn-primary {
      background: #111111;
      border-color: transparent;
      transition: 0.3s;
    }

    .btn-primary:hover {
      background-color: #444;
    }

    .btn-primary:active {
      background: #2575fc;
      background: -webkit-linear-gradient(to left, #6a11cb, #2575fc);
      background: -o-linear-gradient(to left, #6a11cb, #2575fc);
      background: -moz-linear-gradient(to left, #6a11cb, #2575fc);
      background: linear-gradient(to left, #6a11cb, #2575fc);
      -webkit-transition: all 0.4s;
      -o-transition: all 0.4s;
      -moz-transition: all 0.4s;
      transition: all 0.1s;
    }

    .nav-tabs .nav-item {
      width: 50% !important;
      text-align: center;
    }

    .button-wrap {
      height: 32px;
    }

    .card-header {
      background: #111111;
    }

    .card {
      border: none;
    }

    .nav-tabs .nav-link {
      color: whitesmoke;
    }

    .nav-tabs .nav-link.active {
      color: #111111;
    }

    .nav-link {
      transition: 0.3s;
    }

    .nav-link:hover {
      border-color: transparent;
      background-color: #444;
    }

    .nav-link.active:hover {
      background-color: white;
    }

    .main-header {
      text-transform: uppercase;
      color: whitesmoke;
      font-family: Arial, sans-serif;
      font-weight: 200;
    }
  }

</style>
