import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.css']
})
export class DialogOverviewComponent implements OnInit {
  name: string;
  say: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  onClick() {
    const dialog = this.dialog.open(DialogComponent, {
      width: '300px',
      data: { name: this.name, say: this.say }
    });
    dialog.afterClosed().subscribe(
      r => this.say = r
    );
  }
}
