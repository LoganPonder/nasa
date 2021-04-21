import { AppState } from '../../AppState'
import Space from '../models/Space'
import { spaceApi } from './AxiosService'

class SpacesService {
  async getSpace (query) {
    const res = await spaceApi.get(query)
    console.log(res.data)
    AppState.results = new Space(res.data)
    console.log(AppState.results)
  }

  setActive (space) {
    AppState.setActive = space
  }
}

export const spacesService = new SpacesService()
