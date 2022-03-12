import { Component, OnInit } from '@angular/core';
import { LogLevel, LogService } from '../shared/log.service';

@Component({
  selector: 'app-log-test',
  templateUrl: './log-test.component.html',
  styleUrls: ['./log-test.component.css']
})
export class LogTestComponent implements OnInit {
  logWithDate: any;

  constructor(private logger: LogService) { }

  ngOnInit(): void {
  }

  testLog(): void {
    this.logger.level = LogLevel.All;
    this.logger.debug(`Test the log() Method`, 'User::Geoff', `Method::testlog()`);
  }

}
