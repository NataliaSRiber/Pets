import { Component, OnInit } from '@angular/core';
import { PetregistrationComponent } from '../../petregistration/petregistration.component';
import { PetsListComponent } from '../../pets-list/pets-list.component';
import { Pet, PetService } from '../../pet.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [PetregistrationComponent, PetsListComponent,CommonModule, FormsModule, RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  pets: Pet[] = [];
  // filteredPets: Pet[] = [];
  isLoading = true;
  searchQuery = '';
  notFoundMessage = '';

  constructor(private petService: PetService) {}
  ngOnInit(): void {
    this.loadPets();
  }

  loadPets(): void {
    this.petService.getPets().subscribe({
      next: (data) => {
        this.pets = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error searching pets', err);
        this.isLoading = false;
      }
    })
  }

  onSearch(query: string): void {
    this.searchQuery = query;
    if(query.trim()) {
      this.petService.searchPets(query).subscribe({
        next: (data) => {
          this.pets = data;
          this.notFoundMessage = data.length === 0 ? 'Animal not found!' : ''
        }
      });
    } else {
      this.loadPets();
      this.notFoundMessage = '';
    }
  }
}
