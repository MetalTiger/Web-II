import { Injectable } from '@angular/core';
import { Issue } from './issue'; 
import { issues } from 'src/assets/mock-issues';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  //private issues: Issue[] = issues; // Datos de prueba
  private issues: Issue[] = [];

  constructor() { }

  getPendingIssues(): Issue[] {
    return this.issues.filter((issue) => !issue.completed);
  }
  
  createIssue(issue: Issue){
    issue.issueNo = this.issues.length + 1;
    this.issues.push(issue);
  }

  completeIssue(issue: Issue){
    const selectedIssue: Issue = {
      ...issue,   // Se ignoran los otros parametros y te vas al último
      completed: new Date(),
    };

    const index = this.issues.findIndex((i) => i === issue);
    this.issues[index] = selectedIssue;

  }

  getSuggestions(title:string): Issue[] {
    if (title.length > 3) {
      return this.issues.filter(issue =>
        issue.title.indexOf(title) !== -1);
    }
    return [];
  }

  editIssue(issue: Issue) {
    const selectedIssue: Issue = issue
    //console.log(selectedIssue.issueNo + " " + selectedIssue.title);

    const index = this.issues.findIndex((i) => i.issueNo === issue.issueNo);
    this.issues[index] = selectedIssue;
    //console.log(index)
    //console.log(this.issues[index])

  }

}
