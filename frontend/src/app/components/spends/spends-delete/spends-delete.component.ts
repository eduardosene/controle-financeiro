import { SpendsService } from './../spends.service';
import { Component, OnInit } from '@angular/core';
import { Spend } from '../spend.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-spends-delete',
  templateUrl: './spends-delete.component.html',
  styleUrls: ['./spends-delete.component.css'],
})
export class SpendsDeleteComponent implements OnInit {
  spend: Spend;
  constructor(
    private spendsService: SpendsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.spend = {
      date: new Date(),
      product: '',
      place: '',
      price: 0,
      payment: '',
    };
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.spendsService.readById(Number(id)).subscribe((spend) => {
      this.spend = spend;
    });
  }
  deleteSpend() {
    this.spendsService.delete(Number(this.spend.id)).subscribe(() => {
      this.spendsService.showMessage('Excluido com sucesso!');
      this.router.navigate(['/spends']);
    });
  }
  cancelSpend() {
    this.router.navigate(['/spends']);
  }
}
