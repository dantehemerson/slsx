export type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined

export interface ClassDictionary {
  [id: string | number | any]: any
}

export interface ClassArray extends Array<ClassValue> {}

declare const slsx: (...classes: ClassValue[]) => any[]

export default slsx
