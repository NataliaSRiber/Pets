import { Component, Input } from '@angular/core';
import { Card } from '../../home-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-card.component.html',
  styleUrl: './products-card.component.css'
})
export class ProductsCardComponent {
@Input() cards: Card[] = [];
@Input() isLoading =  true;
@Input() notFoundMessage = '';

product: Card | undefined;

constructor(private router: Router){}

  goToDetailPage(id: number): void {
    this.router.navigate([`/product/${id}`])
  }
}
