import { Injectable } from '@angular/core';
import { LogConsole, LogPublisher } from "./log-publishers";

@Injectable({
  providedIn: 'root'
})
export class LogPublishersService {

  publishers: LogPublisher[] = [];

  constructor() {
    this.buildPublishers();
  }
  buildPublishers(): void {
    //create an instance of the LogConsole class
    this.publishers.push(new LogConsole());
  }


}
