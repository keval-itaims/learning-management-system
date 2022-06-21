import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmDialogData } from '../Interfaces/confirm-dialog-data';
import { ConfirmdialogComponent } from '../shared/confirmdialog/confirmdialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {

  constructor(private dialog:MatDialog) { }

  openConfirmDialog(data : ConfirmDialogData):Observable<boolean>{
    return this.dialog.open(ConfirmdialogComponent,{
      data,
      width:'400px',

      disableClose: true
    }).afterClosed()
  }
}
