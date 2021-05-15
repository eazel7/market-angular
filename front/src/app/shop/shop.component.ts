import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerLoginComponent } from '../customer-login/customer-login.component';
import { CustomerLoginService } from '../customer-login/customer-login.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  showFiller = true

  constructor(private loginService: CustomerLoginService) {

  }

  ngOnInit(): void {
  }

  showAuthenticate(): Boolean {
    return this.loginService.isAuthenticated(true);
  }

}
