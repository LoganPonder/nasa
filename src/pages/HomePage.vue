<template>
<div class="component container-fluid bg-warning">
    <div class="row">
        <div class="col text-center mt-5">
            <h1 class="display-3">SPACE with NASA</h1>
            <button @click="search" class="btn btn-dark text-white rounded shadow">EXPLORE</button>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <h3>Images to explore...</h3>
            <Results />
        </div>
    </div>
</div>
</template>

<script>
import { reactive } from 'vue'
import { spacesService } from '../services/SpacesService'
import Results from '../components/ResultsComponent'

export default {
  name: 'HomePage',
  setup () {
    const state = reactive({
      query: ''
    })
    return {
      state,
      async search () {
        try {
          await spacesService.getSpace(state.query)
          state.query = ''
        } catch (e) {
          console.error(e)
        }
      }
    }
  },
  components: {
    Results
  }
}
</script>

<style lang="scss" scoped>

</style>
