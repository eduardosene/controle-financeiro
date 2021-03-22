import { SpendsService } from './../spends.service';
import { Component, OnInit } from '@angular/core';
import { Spend } from '../spend.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spends-create',
  templateUrl: './spends-create.component.html',
  styleUrls: ['./spends-create.component.css'],
})
export class SpendsCreateComponent implements OnInit {
  spend: Spend = {
    date: new Date(),
    product: '',
    place: '',
    price: 0,
    payment: '',
  };

  constructor(private spendsService: SpendsService, private router: Router) {}

  ngOnInit(): void {}

  createSpend() {
    this.spendsService.create(this.spend).subscribe(() => {
      this.spendsService.showMessage('Produto criado!');
      this.router.navigate(['/spends']);
    });
  }
  cancelSpend() {
    this.router.navigate(['/spends']);
  }
}
