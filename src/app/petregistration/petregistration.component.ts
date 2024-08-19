import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-petregistration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './petregistration.component.html',
  styleUrl: './petregistration.component.css'
})
export class PetregistrationComponent {
  pet = {
    name: '',
    tutor: '',
    species: '',
    breed: '',
    age: null,
    notes: '',
  }
  successMessage = '';

  onSubmit(form: NgForm) {
    if(form.valid) {
      console.log('Pet Registered:', this.pet);
      form.resetForm();
      this.successMessage = 'Animal cadastrado com sucesso!';
      setTimeout(() => this.successMessage = '', 3000);
    }
  }
}
