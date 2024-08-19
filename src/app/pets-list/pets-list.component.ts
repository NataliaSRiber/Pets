import { Component, OnInit } from '@angular/core';
import { Pet, PetService } from '../pet.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pets-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pets-list.component.html',
  styleUrl: './pets-list.component.css'
})
export class PetsListComponent implements OnInit {
  pets: Pet[] = [];
  filteredPets: Pet[] = [];
  isLoading =  true;
  searchQuery = '';

  constructor(private petService: PetService){}
  ngOnInit(): void {
      this.loadPets();
  }

  loadPets(): void {
    this.petService.getPets().subscribe({
      next: (data) => {
        this.pets = data;
        this.filteredPets = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error searching pets', err);
        this.isLoading = false;
      }
    });
  }

  notFoundMessage = '';

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.petService.searchPets(this.searchQuery).subscribe({
        next: (data) => {
          this.filteredPets = data;
        }
      });
    } else {
      this.notFoundMessage = 'Animal não encontrado!';
      setTimeout(() => this.notFoundMessage = '', 3000);
      this.filteredPets = this.pets;
    }
    }
  }
