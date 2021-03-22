import { SpendsService } from './../spends.service';
import { Component, OnInit } from '@angular/core';
import { Spend } from '../spend.model';

@Component({
  selector: 'app-spends-read',
  templateUrl: './spends-read.component.html',
  styleUrls: ['./spends-read.component.css'],
})
export class SpendsReadComponent implements OnInit {
  columnsToDisplay = ['date', 'product', 'place', 'price', 'payment'];
  spends: Spend[];

  constructor(private spendsService: SpendsService) {
    this.spends = [];
  }

  ngOnInit(): void {
    this.spendsService.read().subscribe((spends) => {
      this.spends = spends;
    });
  }
}
