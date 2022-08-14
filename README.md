### Nest-Hello-World

- Desc
 - Nest 공부겸 간단한 API

- init

```
  nest g -h
```

- Library

```
  npm i fp-ts (functional programming)
  npm i chalk (console.log by custom)
  npm i lodash
```

- test

```
  make test-curl
```

- todo

  - [x] chalk
  - [x] userService
  - [x] loggerService (custom)
  - [ ] fp-ts
  - [ ] await-to-js

- imports, controllers, providers, export

```json
/*
  imports는 말그대로 해당 모듈을 import
  export로 밖으로 내보낼 수 있다.

  A 모듈에서 B,C, D import모듈을 받아서 사용하고
  해당 B,C,D는 다른곳에서 사용하지 않는다면 export를 하지 않는다
  */

// A 모듈만 export 할때
imports: [B, C, D]
// ...

// A 모듈 포함 모든 모듈이 다른데서 사용할 때
imports: [B, C, D]
exports: [B, C, D]
```
