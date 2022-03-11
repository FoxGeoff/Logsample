import { Injectable } from '@angular/core';

export enum LogLevel {
  All, Debug, Info, Warn, Error, Fatal, Off
}

@Injectable({
  providedIn: 'root'
})
export class LogService {

  level = LogLevel.All;
  logWithDate = true;

  constructor() { }

  private shouldLog(newLevel: LogLevel): boolean {

    if (this.level !== LogLevel.Off && newLevel >= this.level) {
      return true;
    }

    return false;

  }

  private writeToLog(msg: string, newLevel: LogLevel): void {
    if (this.shouldLog(newLevel)) {
      let str = "";
      if (this.logWithDate) {
        str = `${new Date()} -`;
      }

      str += `Type: ${LogLevel[newLevel]} - Message: ${JSON.stringify(msg)}`;
      console.log(str);

    }
  }

  log(msg: any): void {
    this.writeToLog(msg, LogLevel.All);
  }

}
