import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spends-view',
  templateUrl: './spends-view.component.html',
  styleUrls: ['./spends-view.component.css'],
})
export class SpendsViewComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigateToProductCreate() {
    this.router.navigate(['spends/create']);
  }
}
