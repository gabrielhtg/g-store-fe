import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {BerandaContainerComponent} from "../beranda-container/beranda-container.component";

@Component({
  selector: 'app-beranda-page',
  standalone: true,
  imports: [
    NavbarComponent,
    BerandaContainerComponent
  ],
  templateUrl: './beranda-page.component.html',
  styleUrl: './beranda-page.component.css'
})
export class BerandaPageComponent {

}
