import { Component } from '@angular/core';
import { PetregistrationComponent } from '../../petregistration/petregistration.component';
import { PetsListComponent } from '../../pets-list/pets-list.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [PetregistrationComponent, PetsListComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
