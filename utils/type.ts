export enum LogType {
  INFO = 'log',
  DEBUG = 'debug',
  ERROR = 'error',
}

export enum ExceptionType {
  INTERNAL_ERR = 'interal-server-error',
}

export enum EmailType {
  GMAIL = 'Gmail',
}

export enum EnvType {
  DEV = 'dev',
  PROD = 'prod',
}

export enum StatusCode {
  SUCCESS = 201,
}

export enum Url {
  /**
   * users
   */
  ROOT_USERS = 'users',
  EMAIL_VERIFY = '/email-verify',
  LOGIN = '/login',
  _ID = '/:id',
}
