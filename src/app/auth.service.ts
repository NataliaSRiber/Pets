import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'admin', password: '123', role: 'admin' },
    { username: 'user', password: '456', role: 'user' }
  ];
  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    return of(this.users.find(user => user.username === username && user.password === password)).pipe(
      delay(1000),
      tap(user => {
        if (user) {
          localStorage.setItem('userRole', user.role);
        } else {
          localStorage.removeItem('userRole');
        }
      }),
      map(user => !!user)
    );
  }

  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }

  logout(): void {
    // Remove o papel do usuário ao fazer logout
    localStorage.removeItem('userRole');
  }


  // private loggedInUserRole: string | null = null; // papel do usuário logado, inicialmente nulo

  // constructor() { }

  // login(username: string, password: string): Observable<boolean> {
  //   return of(this.users.find(user => user.username === username && user.password === password)) // of retorna o resultado do find
  //     .pipe( // usado para encadear operadores que transformam ou manipulam os dados emitidos pelo Observable.
  //       delay(1000),
  //       tap(user => this.loggedInUserRole = user ? user.role : null) // atualiza o loggedInUserRole
  //     )
  //     .pipe(map(user => !!user));
  // }

  // getUserRole(): string | null {
  //   return this.loggedInUserRole;
  // }
}

