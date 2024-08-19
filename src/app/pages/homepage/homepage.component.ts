import { Component, OnInit } from '@angular/core';
import { Card, HomeServiceService } from '../../home-service.service';
import { ProductsCardComponent } from '../../components/products-card/products-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ProductsCardComponent, CommonModule, FormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  cards: Card[] = [];
  isLoading = true;
  notFoundMessage = '';
  searchQuery = '';

  constructor(private homeService: HomeServiceService) {}
  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.homeService.getCards().subscribe({
      next: (data) => {
        this.cards = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error searching cards', err);
        this.isLoading = false;
      }
    })
  }

  onSearchProduct(query: string): void {
    this.searchQuery = query;
    if(query.trim()) {
      this.homeService.searchProducts(query).subscribe({
        next: (data) => {
          this.cards = data;
          this.notFoundMessage = data.length === 0 ? 'Product not found!' : ''
        }
      });
    } else {
      this.loadCards();
      this.notFoundMessage = '';
    }
  }
}
