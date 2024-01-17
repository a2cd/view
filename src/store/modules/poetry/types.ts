export interface PoetryItem {
  id: number
  poetryName: string
  poet: string
  poetEpoch: string
  text: string
  notes: string[]
  translate: string
  order: number
}

export interface PoetryState {
  list: PoetryItem[]
}
