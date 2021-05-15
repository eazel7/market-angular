import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MatDrawer, MatDrawerContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatCommonModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';


const routes: Routes = [
  {
    path: '', component: ShopComponent,
    children: [
      { path: '', component: HomeComponent, outlet: 'main' },
      { path: 'detalle', component: ItemDetailComponent, outlet: 'main'}
    ]
  }
];

@NgModule({
  declarations: [ShopComponent, HomeComponent, ItemDetailComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCommonModule,
    RouterModule.forChild(routes)
  ]
})

export class ShopModule { }
