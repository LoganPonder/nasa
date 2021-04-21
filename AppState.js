import { reactive } from 'vue'
// import Space from './models/Space'

export const AppState = reactive({
  /** @type {Space[]} */
  results: {},
  /** @type {Space[]} */
  activeSpace: null
})
