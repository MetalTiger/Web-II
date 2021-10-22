import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  showReportIssue = false;
  showEditIssue = false;
  selectedIssue: Issue | null = null;

  constructor(private issueService: IssuesService) { }  // si queremos usar el servicio debe estar inyectado en el constructor además de importarlo

  private getIssues(){
    this.issues = this.issueService.getPendingIssues(); // El controlador pide las cosas al servicio, y este trae la info ya sea por API's o algo parecido
  }

  ngOnInit(): void {
    this.getIssues();   // Este se pone aquí para que en cuanto entre se traiga los datos
  }

  onCloseReport(){
    this.showReportIssue = false;
    this.getIssues();
  }

  onConfirm(confirmed: boolean){
    if (confirmed && this.selectedIssue) {
      this.issueService.completeIssue(this.selectedIssue);
      this.getIssues();
    }
    this.selectedIssue = null;
  }

  onCloseEdit(){
    this.getIssues();
    this.selectedIssue = null
    this.showEditIssue = false;
    
    //this.getIssues();
    //console.log(this.issues[0])
  }

}
