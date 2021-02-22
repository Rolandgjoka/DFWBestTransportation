export default class Logger {
  static log(object: any): void {
    
    console.log(object);
  }
  static logError(object: any): void {
    console.error(object);
  }
}
