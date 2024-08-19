import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

export interface Pet {
  id: number;
  name: string;
  tutor: string;
  species: string;
  breed: string;
  age: number;
  notes?: string;
}
@Injectable({
  providedIn: 'root'
})
export class PetService {
  // private apiUrl = 'https://api.example.com/pets'; // URL fictícia da API

  private pets: Pet[] = [
    { id: 1, name: 'Rex', tutor: 'Rihanna', species: 'dog', breed: 'German Shepherd', age: 5, notes: 'Very friendly' },
    { id: 2, name: 'Whiskers', tutor: 'Britney', species: 'cat', breed: 'Siamese', age: 3 },
    { id: 3, name: 'Bella', tutor: 'Beyoncé', species: 'dog', breed: 'Labrador', age: 2, notes: 'Loves to play fetch' }
  ];
  constructor() { }

  getPets(): Observable<Pet[]> {
    // return this.http.get<Pet[]>(this.apiUrl);
    return of(this.pets).pipe(
      delay(4000)
    )
  }

  // search pet by name or tutor's name
  searchPets(query: string): Observable<Pet[]> {
    const lowerQuery = query.toLowerCase();
    const filteredPets = this.pets.filter((pet) => pet.name.toLowerCase().includes(lowerQuery) || (pet.tutor && pet.tutor.toLowerCase().includes(lowerQuery)));
    return of(filteredPets).pipe(
      delay(4000)
    );
  }
}
