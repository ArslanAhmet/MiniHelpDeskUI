import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserItem } from 'src/app/shared/models';
import * as fromHome from "../../../home/store/reducers/index";
import * as homeActions from "../../../home/store/actions/index";
import { Store } from '@ngrx/store';
import { State } from '../../store/reducers/home-reducers';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {
  userId!: string;
  userName!: string;
  userEmail!: string;
  userForm!: FormGroup;
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: UserItem,
    private store: Store<State>) {

     }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [this.userName, [Validators.required,
      Validators.min(0)]],
      email: [this.userEmail, [Validators.required,
      Validators.email]],
    });
  }
  saveUser(formValues: { userName: any; userEmail: any; }) {
    let userItem: UserItem = {
      id: '',
      name: formValues.userName,
      email: formValues.userEmail,
      isSent: false
    };

    console.log('saveUser sonuc : ' + JSON.stringify(userItem));
    let user:string = JSON.stringify(userItem)
    this.store.dispatch(homeActions.setPaginationHeader( {payload: user} ))

    // this.userService.updateKangal(this.kangalId, kangal).subscribe(
    //   result => {
    //     this.dialogRef.close(kangal);
    //   }
    // );

  }
  dismiss() {
    this.dialogRef.close(null);
  }
}

