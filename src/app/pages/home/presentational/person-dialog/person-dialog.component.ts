import { Component, OnInit ,Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PersonItem } from 'src/app/shared/models';
import { HomePageActions } from './../../store/actions';
import { Store } from '@ngrx/store';
import { State } from '../../store/reducers/home-reducers';

@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.scss']
})
export class PersonDialogComponent implements OnInit {
  personId!: string;
  personName!: string;
  personEmail!: string;
  personForm!: FormGroup;
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<PersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: PersonItem,
    private store: Store<State>) {

     }

  ngOnInit(): void {
    this.personForm = this.fb.group({
      name: [this.personName, [Validators.required,
      Validators.min(0)]],
      email: [this.personEmail, [Validators.required,
      Validators.email]],
    });
  }
  saveUser(formValues: { personName: any; personEmail: any; }) {
    let personItem: PersonItem = {
      id: 0,
      name: formValues.personName,
      email: formValues.personEmail,
      isSent: false
    };

    console.log('saveUser sonuc : ' + JSON.stringify(personItem));
    
    this.store.dispatch(HomePageActions.createPerson( {payload: personItem} ))

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

