import { Observable, of } from "rxjs";
import { LogEntry } from "./log.service";

export abstract class LogPubisher {
  location: string | undefined;

  abstract log(record: LogEntry): Observable<boolean>;
  abstract clear(): Observable<boolean>;
}

export class LogConsole extends LogPubisher {

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