import { Component } from '@angular/core';
import {ItemComponent} from "../item/item.component";

@Component({
  selector: 'app-beranda-container',
  standalone: true,
  imports: [
    ItemComponent
  ],
  templateUrl: './beranda-container.component.html',
  styleUrl: './beranda-container.component.css'
})
export class BerandaContainerComponent {

}
