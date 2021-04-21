<template>
  <div class="Results" v-if="state.results">
  <MediaElement :space="state.results" @click="setActive(space)" class="rounded shadow"/>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../../AppState'
import { spacesService } from '../services/SpacesService'
import MediaElement from './MediaElementComponent'

export default {
  name: 'results',
  setup () {
    const state = reactive({
      results: computed(() => AppState.results)
    })
    return {
      state,
      setActive (space) {
        spacesService.setActive(space)
      }
    }
  },
  components: {
    MediaElement
  }
}
</script>

<style lang="scss" scoped>

</style>
