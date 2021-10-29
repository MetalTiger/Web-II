import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { filter, map, switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  // Metodo llamado al inicializar el componente
  ngOnInit(): void {
    this.updates.available.pipe(
      switchMap(() => this.snackbar.open('A new version is available!', 'Update now').afterDismissed()),  // Se Muestra el snackbar
      filter(result => result.dismissedByAction),
        map(() => this.updates.activateUpdate().then(() =>  //La actualización se aplica
          location.reload())) // La pagina se actualiza
      ).subscribe();
      /* 
        -SwitchMap es llamado cuando hay una versión disponible
        -Se muestra el snackbar por medio del método open
        -El observable afterDismissed se emite cuando el snackbar se cierra
        -Map llama al método activateUpdate para aplicar la actualización
      */

  }

  // SwUpdate es usado para recibir notificaciones cuando una nueva actualizacion de la aplicación este disponible, esto gracias a la propiedad observable pipe
  // El snackbar se usará para notificar al usuario sobre esta actualización 
  constructor(private updates: SwUpdate, private snackbar: MatSnackBar){} 

}
