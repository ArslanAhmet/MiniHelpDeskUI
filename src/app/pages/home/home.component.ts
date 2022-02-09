import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PersonDialogComponent } from './presentational/person-dialog/person-dialog.component';

import { Store } from '@ngrx/store';
import { PersonItem } from 'src/app/shared/models';
@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  showMenu = false;
  constructor(private observer: BreakpointObserver,
    private dialog: MatDialog) {}
  open(menu: { openMenu: () => void; }){
    menu.openMenu();
    }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }
  createUser(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    // dialogConfig.data = {
    //   name : string,
    //   email: string
    // };

    const dialogRef = this.dialog.open(PersonDialogComponent,
      dialogConfig);


    dialogRef.afterClosed().subscribe(
      val => {

        // this.loadKangalsPage();
      },

    );
  }
}
