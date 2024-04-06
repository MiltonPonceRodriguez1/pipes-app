import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  exports: [
    ButtonModule,
    InputTextModule,
    MenubarModule,
    MenuModule,
    RippleModule,
  ]
})
export class PrimeNgModule { }
