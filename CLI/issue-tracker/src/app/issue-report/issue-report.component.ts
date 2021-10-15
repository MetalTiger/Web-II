import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css']
})
export class IssueReportComponent implements OnInit {
  issueForm: FormGroup | undefined;
  @Output() formClose = new EventEmitter();

  constructor(private builder: FormBuilder, private issueService: IssuesService) { }

  ngOnInit(): void {
    this.issueForm = this.builder.group({
      title: [''],
      description: [''],
      priority: [''],
      type: [''],
    });
  }

  addIssue(){
    this.issueService.createIssue(this.issueForm?.value);
    this.formClose.emit();
  }

}
