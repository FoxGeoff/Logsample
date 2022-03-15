import { Injectable } from '@angular/core';
import { LogConsole, LogLocalStorage, LogPublisher } from "./log-publishers";

@Injectable({
  providedIn: 'root'
})
export class LogPublishersService {

  publishers: LogPublisher[] = [];

  constructor() {
    this.buildPublishers();
  }
  buildPublishers(): void {
    // Create an instance of the LogConsole class
    this.publishers.push(new LogConsole());
    // Create an intant of the LocalStorage class
    this.publishers.push(new LogLocalStorage());
  }


}
