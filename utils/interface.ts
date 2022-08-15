/**
 * use interface & type
 */

import { Try } from 'ts-dkutil'
import { EntityManager } from 'typeorm'

export interface Dictionary<T> {
  [x: string]: T
}

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

/**
 * Services
 */

export interface Service<T> {
  create?: (params: T) => Promise<Try<Error, any>>
  update?: (params: T) => Promise<Try<Error, any>>
  delete?: (params: T) => Promise<Try<Error, any>>
}

export interface Repositoriable<T> {
  entityManager: EntityManager
  findOne(property: keyof T, params: any): Promise<T>
}
