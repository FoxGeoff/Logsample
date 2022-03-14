import { Observable, of } from "rxjs";
import { LogEntry } from "./log.service";

export abstract class LogPublisher {
  location: string = "";

  abstract log(record: LogEntry): Observable<boolean>;
  abstract clear(): Observable<boolean>;
}

export class LogConsole extends LogPublisher {

  log(record: LogEntry): Observable<boolean> {
    // Log to the console
    console.log(record.buildLogString());

    return of(true);

  }

  clear(): Observable<boolean> {
    console.clear();

    return of(true);

  }
}

export class LogLocalStorage extends LogPublisher {

  constructor() {
    super();

    this.location = "logging";
  }

  log(record: LogEntry): Observable<boolean> {
    let ret = false;
    let values: LogEntry[] = [];

    try {
      values = JSON.parse(localStorage.get(this.location)) || [];
      // Add a new log entry to the array
      values.push(record);
      // Store  the complete array into local storage
      localStorage.setItem(this.location, JSON.stringify(values));
    }
    catch (ex) {
      console.log(ex);
    }

    return of(ret);

  }

  clear(): Observable<boolean> {
    localStorage.removeItem(this.location);
    return of(true);

  }

}
