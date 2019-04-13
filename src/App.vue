<template>
  <router-view/>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted () {
    setTimeout(() => {
      this.setWavesKeeperInitialization()
    }, 500)
  },
  methods: {
    ...mapActions({
      setWavesKeeperInitialization: 'setWavesKeeperInitialization'
    })
  }
}
</script>

<style lang="scss">
  body, html {
    height: 100%;
    width: 100%;
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
  }

  .content {
    height: inherit;
    overflow-y: scroll;
  }
</style>
