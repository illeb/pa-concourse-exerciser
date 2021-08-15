import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionarrie-chooser',
  template: `
    <h1 mat-dialog-title>Componi questionario</h1>
    <div mat-dialog-content>
      <mat-form-field appearance="fill">
        <mat-label>Favorite Animal</mat-label>
        <!-- <input matInput [(ngModel)]="data.animal"> -->
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <!-- <button mat-button (click)="onNoClick()">No Thanks</button>
      <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button> -->
    </div>
  `,
  styleUrls: ['./questionarrie-chooser.component.scss']
})
export class QuestionarrieChooserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
