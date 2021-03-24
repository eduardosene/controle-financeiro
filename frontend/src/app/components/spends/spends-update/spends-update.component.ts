import { SpendsService } from './../spends.service';
import { Spend } from './../spend.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-spends-update',
  templateUrl: './spends-update.component.html',
  styleUrls: ['./spends-update.component.css'],
})
export class SpendsUpdateComponent implements OnInit {
  spend: Spend;

  constructor(
    private spendsService: SpendsService,
    private activateddRouter: ActivatedRoute,
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
    const id = this.activateddRouter.snapshot.paramMap.get('id');
    this.spendsService.readById(Number(id)).subscribe((spend) => {
      this.spend = spend;
    });
  }
  updateSpend() {
    this.spendsService.update(this.spend).subscribe(() => {
      this.spendsService.showMessage('Alterado com sucesso!');
      this.router.navigate(['/spends']);
    });
  }
  cancelSpend() {
    this.router.navigate(['/spends']);
  }
}
