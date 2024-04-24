import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'milton';
  public nameUpper: string = 'MILTON';
  public fullName: string = 'mIlToN pONcE';
}
