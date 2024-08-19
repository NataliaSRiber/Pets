import { Component, OnInit } from '@angular/core';
import { Card, HomeServiceService } from '../../home-service.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product?: Observable<Card | undefined> = of(undefined);

  constructor(
    private route: ActivatedRoute, // acessa os parâmetros da rotas
    private homeService: HomeServiceService,
    private router: Router,
  ){}

  ngOnInit(): void {
    // paramMap: Um observable que emite um ParamMap sempre que os parâmetros da rota mudam.
    // pipe(...): Método usado para encadear operadores RxJS.
    this.product = this.route.paramMap.pipe(
      //switchMap: Operador RxJS que cancela qualquer observable anterior e assina um novo observable. É usado aqui para transformar o ParamMap em um Observable com os detalhes do produto.
      switchMap(params => {
        const id = Number(params.get('id'));
        if (isNaN(id)) {
          this.router.navigate(['/notfound']);
          return of(undefined);
        }
        // Operador RxJS usado para executar efeitos colaterais com o produto retornado. Se o produto não for encontrado, redireciona para a página /notfound
        return this.homeService.getProductbyId(id).pipe(
          tap((product: any) => {
            if (!product) {
              this.router.navigate(['/notfound']);
            }
          })
        );
      })
    );
  }
}
