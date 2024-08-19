import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export interface Card {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  private cards: Card[] = [
    {
      id: 1,
      name: 'Premium Dog Food',
      description: 'High-quality dry food for adult dogs with chicken and vegetables.',
      price: 29.99,
      rating: 4.7,
      imageUrl: '../assets/1.jpg'
    },
    {
      id: 2,
      name: 'Catnip Toys',
      description: 'Set of 3 catnip-filled toys to keep your cat entertained.',
      price: 12.99,
      rating: 4.5,
      imageUrl: '../assets/2.jpg'
    },
    {
      id: 3,
      name: 'Comfortable Pet Bed',
      description: 'Soft and cozy bed for pets of all sizes, made with hypoallergenic materials.',
      price: 45.00,
      rating: 4.8,
      imageUrl: '../assets/3.jpg'
    },
    {
      id: 4,
      name: 'Interactive Dog Ball',
      description: 'Durable rubber ball that dispenses treats when your dog plays with it.',
      price: 18.50,
      rating: 4.6,
      imageUrl: '../assets/1.jpg'
    },
    {
      id: 5,
      name: 'Cat Litter Box',
      description: 'Easy-to-clean litter box with high sides to prevent spills.',
      price: 22.99,
      rating: 4.4,
      imageUrl: '../assets/2.jpg'
    },
    {
      id: 6,
      name: 'Pet Grooming Kit',
      description: 'Complete grooming kit including brushes, clippers, and nail trimmers.',
      price: 34.95,
      rating: 4.7,
      imageUrl: '../assets/3.jpg'
    },

  ]
  constructor() { }

  getCards(): Observable<Card[]> {
    return of(this.cards).pipe(
      delay(1000)
    )
  }

  getProductbyId(id: number): Observable<Card | undefined> {
    const filteredCard = this.cards.find(card => card.id === id);
    return of(filteredCard)
  }

  searchProducts(query: string): Observable<Card[]> {
    const lowerQuery = query.toLowerCase();
    const filteredProducts = this.cards.filter((card) => card.name.toLowerCase().includes(lowerQuery) || (card.description && card.description.toLowerCase().includes(lowerQuery)));
    return of(filteredProducts);
  }
}
