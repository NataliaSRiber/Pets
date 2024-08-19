import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { AuthGuard } from './auth.guard';
import { PetsListComponent } from './pets-list/pets-list.component';
import { PetregistrationComponent } from './petregistration/petregistration.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'services', component: ServicesComponent, title: 'Services' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'product/:id', component: ProductDetailComponent, title: 'Detalhes do produto' },
  { path: 'admin', component: AdminComponent, title: 'Admin', canActivate: [AuthGuard], data: { role: 'admin' }, 
  // children: [
  //   { path: 'pets-list', component: PetsListComponent, title: 'Pets List' },
  //   { path: 'pet-registration', component: PetregistrationComponent, title: 'Pet Registration' }
  // ]
  },
  { path: 'user', component: UserComponent, title: 'Usuário', canActivate: [AuthGuard], data: { role: 'user' } },
  { path: '**', component: NotfoundComponent, title: 'Not found' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
