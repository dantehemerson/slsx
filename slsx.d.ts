export type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined

export interface ClassDictionary {
  [id: string | number]: any
}

export interface ClassArray extends Array<ClassValue> {}

declare const slsx: (...classes: ClassValue[]) => number[]

export default slsx
