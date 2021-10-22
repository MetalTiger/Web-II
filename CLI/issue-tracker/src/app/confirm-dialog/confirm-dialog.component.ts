import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  @Input() issueNo: number | null = null;           // Este
  // Input sirve para recibir datos de otros componentes 
  @Output() confirm = new EventEmitter<boolean>()   // Se tiene otro evento personalizado creado por el componente de la lista
  // Output pasar info del componente hacia afuera, es decir, otros componentes

  constructor() { }

  ngOnInit(): void {
  }

  agree() {
    this.confirm.emit(true);  // Aquí se manda llamar al método del componente de la lista onConfirm
    this.issueNo = null;
  }

  disagree() {
    this.confirm.emit(false);
    this.issueNo = null;
  }

}
