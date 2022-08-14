/**
 * use interface & type
 */

export interface Dictionary<T> {
  [x: string]: T
}

export interface ResultExceptionParams {
  type: string
  msg: string
}

/**
 * Try
 */

type Success<T> = {
  readonly _tag: 'success'
  readonly result: T
}

type Fail<T> = {
  readonly _tag: 'failed'
  readonly error: T
}

export type Try<E, T> = Success<T> | Fail<E>

/**
 * [x : string] : T
 * err : ErrorParams
 */

/**
 * serialize
 */
export interface Serializeable {
  toDict(): any
  inject(data: any): this
}
