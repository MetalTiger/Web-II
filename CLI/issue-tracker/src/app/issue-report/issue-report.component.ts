import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';
import { issues } from 'src/assets/mock-issues';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {
  issueForm: FormGroup | undefined;
  @Output() formClose = new EventEmitter();
  // Nos sirve para sacar información, en este caso el evento formClose es personalizado ya que se creo desde la lista
  suggestions: Issue[] = [];

  constructor(private builder: FormBuilder, private issueService: IssuesService) { }  

  ngOnInit(): void {  // Primero se genera el constructor y luego el onInit, el cual se carga cuando se crea el componente
    //Método que inicializa el formulario
    this.issueForm = this.builder.group({
      title: ['', Validators.required], // Se pueden añadir más validaciones después de la ,
      description: [''],
      priority: ['', Validators.required],
      type: ['', Validators.required],
    });

    // En este caso se hace una subscripción al componente para ver que su valor este cambiando
    this.issueForm.controls.title.valueChanges.subscribe((title: string) => {
        this.suggestions = this.issueService.getSuggestions(title);
      });
      

  }

  addIssue(){

    if (this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();    // Esto se hace para que al usuario le aparezcan los mensajes de error
      return
    }

    this.issueService.createIssue(this.issueForm?.value);
    this.formClose.emit();
  }

}
