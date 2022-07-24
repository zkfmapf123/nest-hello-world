export function DataToString() {
  // Write 데코레이터
  return function (target: any, property: string, descriptoer: PropertyDescriptor) {
    console.log(target)
    return target
  }
}
