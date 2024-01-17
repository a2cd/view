import { defineStore } from 'pinia'
import { shishuo, twgx } from '@/store/modules/poetry/data'
import { PoetryItem, PoetryState } from '@/store/modules/poetry/types'

const genList = (): PoetryItem[] => {
  const list: PoetryItem[] = []
  list.push(twgx)
  list.push(shishuo)
  return list
}

const usePoetryStore = defineStore('poetry', {
  state: (): PoetryState => ({
    list: [],
  }),

  getters: {
    getList(state: PoetryState): PoetryItem[] {
      return state.list
    },
  },

  actions: {
    setPoetryState(partial: Partial<PoetryState>) {
      this.$patch(partial)
    },

    init() {
      const poetryState: PoetryState = { list: genList() } as PoetryState
      this.setPoetryState(poetryState)
    },

    reset() {
      this.$reset()
    },
  },
})

export default usePoetryStore
