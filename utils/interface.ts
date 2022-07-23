import { ExceptionType } from './type'

/**
 * use interface & type
 */

interface Dictionary<T> {
  [x: string]: T
}

interface ErrorParams {
  msg: string
  type: ExceptionType
}

/**
 * ReturnParams
 */
export interface ReturnParams<T> {
  params: T
  exception: ErrorParams
}

/**
 * [x : string] : T
 * err : ErrorParams
 */
export type ServiceReturnParams<T> = Dictionary<T> & {
  err: ErrorParams
}
