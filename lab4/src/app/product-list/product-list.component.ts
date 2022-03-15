import { Component, Input, OnInit} from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  product = products

  getShareLink(link: string): string {
    return `https://t.me/share/url?url=${
      link
    }&text=${"Hi! Look what I've found on the Amazon."}`;
  }
}