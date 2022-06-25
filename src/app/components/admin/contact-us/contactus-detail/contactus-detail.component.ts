import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatTableDataSource} from '@angular/material/table';
import { Contact } from 'src/app/classes/contact';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-contactus-detail',
  templateUrl: './contactus-detail.component.html',
  styleUrls: ['./contactus-detail.component.css']
})
export class ContactusDetailComponent implements OnInit {

  constructor(private contactusService:UtilityService,private snackbar:MatSnackBar) { }


  contactusDetails!: Contact[];

  displayedColumns: string[] = ['name', 'emailId', 'message','action'];
  dataSource : MatTableDataSource<Contact[]> | any

  ngOnInit(): void {

    this.contactusService.getContactusDetail().subscribe(
      data => {
        console.log(data)

        this.contactusDetails = data.filter((item)=>{
          console.log(item)
          return item.status == 0;
        })
        console.log(this.contactusDetails)
        this.dataSource = new MatTableDataSource(this.contactusDetails);
      },
      error => console.log(error)
    )
  }

  openSnackbar(){
    this.snackbar.open("email send!",'close',{duration:2000})
  }
  onReply(element : any){
    console.log(element)
    this.openSnackbar();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
