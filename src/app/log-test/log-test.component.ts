import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
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
    this.logger.debug(`Test the log()`, `User::Geoff`, `Method::testlog()`);
  }

  objectLog(): void {
    let product = new Product();

    product.id = 100;
    product.date = new Date();
    product.name = "sombrero grande";
    product.price = 21.56;
    product.url = "https://sombreros.com";

    this.logger.log(`[A new product]
     `, product);
  }

  clearLog(): void {
    this.logger.clear();
  }

}
