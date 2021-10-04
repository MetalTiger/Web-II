import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Subscription } from 'rxjs'; // Esto se hace para poder desuscribirse 

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  posts: ScullyRoute[] = [];  // Propiedad que tendrá las rutas de los posts
  private routeSub: Subscription | undefined;   // Puede ser undefined porque se puede tener valor de subscripción o no, porque puede que nunca se mande a llamar

  constructor(private scullyService: ScullyRoutesService) {  // Se inyecta el servicio de Scully
  
  }

  ngOnInit(): void {
    this.routeSub = // Se asigna para controlar el status de la subscripción
    this.scullyService.available$.subscribe((posts) => {
      this.posts = posts.filter((post) => post.title); // Se filtran los posts por el título
    });

  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe(); // Se desuscribe del servicios

  }

}
