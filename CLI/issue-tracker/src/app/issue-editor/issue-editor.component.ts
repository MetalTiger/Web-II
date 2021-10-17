import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-editor',
  templateUrl: './issue-editor.component.html',
  styleUrls: ['./issue-editor.component.css']
})

export class IssueEditorComponent implements OnInit {
  issueForm: FormGroup | undefined;
  @Input() issue: Issue | null = null
  @Output() formClose = new EventEmitter();

  constructor(private builder: FormBuilder, private issueService: IssuesService) { }

  ngOnInit(): void {

    this.issueForm = this.builder.group({
      issueNo: [this.issue?.issueNo],
      title: [this.issue?.title.toString(), Validators.required],
      description: [this.issue?.description],
      priority: [this.issue?.priority, Validators.required],
      type: [this.issue?.type, Validators.required],
    });

    //this.issueForm.controls.title.setValue(this.issue?.title.toString());
    
    //console.log(this.issue?.title.toString())

  }

  editIssue() {
    if (this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return
    }

    this.issueService.editIssue(this.issueForm?.value);
    this.formClose.emit();
  }

}
