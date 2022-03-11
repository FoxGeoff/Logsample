import { Component, OnInit } from '@angular/core';
import { LogService } from '../shared/log.service';

@Component({
  selector: 'app-log-test',
  templateUrl: './log-test.component.html',
  styleUrls: ['./log-test.component.css']
})
export class LogTestComponent implements OnInit {

  constructor(private logger: LogService) { }

  ngOnInit(): void {
  }

  testLog(): void {
    this.logger.log(`Test the log() Method`);
  }

}
