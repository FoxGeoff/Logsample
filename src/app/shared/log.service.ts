import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';

export enum LogLevel {
  All, Debug, Info, Warn, Error, Fatal, Off
}
export class LogEntry {
  // Public properties
  entryDate = new Date();
  message = "";
  level = LogLevel.Debug;
  extraInfo: any[] = [];
  logWithDate = true;

  buildLogString(): string {
    let str = "";
    if (this.logWithDate) {
      str = `${new Date()} - `;
    }

    str += `Type: ${LogLevel[this.level]} - Message: ${this.message} - Info: ${this.formatParams(this.extraInfo)}`;

    return str;

  }

  private formatParams(params: any[]): string {

    let str = "";

    if (params.some(p => typeof p == `object`)) {
      for (let item of params) {
        return str += JSON.stringify(item) + ","
      }
    }

    return params.join(`,`);

  }

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

  private writeToLog(msg: string, newLevel: LogLevel, params: any[]): void {
    if (this.shouldLog(newLevel)) {
      let entry = new LogEntry();

      entry.message = msg;
      entry.level =  newLevel;
      entry.extraInfo = params;
      entry.logWithDate = this.logWithDate;

      // Log the values
      console.log(entry.buildLogString());
    }
  }

  debug(msg: string, ...optionalParams: any[]): void {
    this.writeToLog(msg, LogLevel.Debug, optionalParams);
  }

  info(msg: string, ...optionalParams: any[]): void {
    this.writeToLog(msg, LogLevel.Info, optionalParams);
  }

  warn(msg: string, ...optionalParams: any[]): void {
    this.writeToLog(msg, LogLevel.Warn, optionalParams);
  }

  error(msg: string, ...optionalParams: any[]): void {
    this.writeToLog(msg, LogLevel.Error, optionalParams);
  }

  fatal(msg: string, ...optionalParams: any[]): void {
    this.writeToLog(msg, LogLevel.Fatal, optionalParams);
  }

  log(msg: any, ...optionalParams: any[]): void {
    this.writeToLog(msg, LogLevel.All, optionalParams);
  }

  private formatParams(params: any[]): string {

    let str = "";

    if (params.some(p => typeof p == `object`)) {
      for (let item of params) {
        return str += JSON.stringify(item) + ","
      }
    }

    return params.join(`,`);

  }

}
