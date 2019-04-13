<template>
  <div>
    <div class="card mt-3">
      <div class="card-header">
        <h2 class="text-center">{{ fund.name }}</h2>
      </div>
      <div class="card-body">
        <h5 class="card-title">RSIN: {{ fund.rsin }}</h5>
        <h6 class="card-title">Address: {{ fund.address }}</h6>
        <p class="card-text">{{ fund.descriprion }}</p>
        <div class="wrap-button" v-if="fund.accepted == false">
          <button class="btn btn-success" @click="accept(true)">Adding</button>
          <button class="btn btn-danger ml-3" @click="accept(false)">Decline</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      fund: {
        name: 'XFH Fund',
        address: 'Noorderstationsstraat 65, 1493 AN Groningen',
        rsin: '5437 8498 2343 1029',
        descriprion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus consequatur, culpa neque nulla nam modi odio corrupti quis voluptate necessitatibus facere iusto, architecto asperiores reiciendis tempora quod temporibus blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus consequatur, culpa neque nulla nam modi odio corrupti quis voluptate necessitatibus facere iusto, architecto asperiores reiciendis tempora quod temporibus blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus consequatur, culpa neque nulla nam modi odio corrupti quis voluptate necessitatibus facere iusto, architecto asperiores reiciendis tempora quod temporibus blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus consequatur, culpa neque nulla nam modi odio corrupti quis voluptate necessitatibus facere iusto, architecto asperiores reiciendis tempora quod temporibus blanditiis?',
        accepted: false
      },
      methods: {
        accept (chooise) {
          console.log(chooise)
        }
      }
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
