import { Component, OnInit } from '@angular/core';
import { Card, HomeServiceService } from '../../home-service.service';
import { ProductsCardComponent } from '../../components/products-card/products-card.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ProductsCardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  cards: Card[] = [];
  isLoading = true;
  notFoundMessage = '';

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
}
