import { Component, Input } from '@angular/core';
import { Pet } from '../pet.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pets-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pets-list.component.html',
  styleUrl: './pets-list.component.css'
})
export class PetsListComponent {

@Input() pets: Pet[] = [];
@Input() isLoading =  true;
@Input() notFoundMessage = '';
}
