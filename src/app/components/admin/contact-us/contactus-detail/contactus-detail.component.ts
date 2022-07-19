import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { Contact } from 'src/app/classes/contact';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-contactus-detail',
  templateUrl: './contactus-detail.component.html',
  styleUrls: ['./contactus-detail.component.css']
})
export class ContactusDetailComponent implements OnInit {

  constructor(private contactusService:UtilityService,private snackbar:MatSnackBar,private router:Router) { }


  contactusDetails: Contact[] = [];
  isLoading:boolean = true;

  displayedColumns: string[] = ['name', 'emailId', 'message','action'];
  dataSource : MatTableDataSource<Contact[]> | any

  ngOnInit(): void {

    this.getCotactMessage();
  }


  getCotactMessage(){
    this.contactusService.getContactMessages().subscribe(
      data => {
        this.isLoading = false;
        this.contactusDetails = data.filter((item)=>{
          return item.status == 0;
        })
        this.dataSource = new MatTableDataSource(this.contactusDetails);
      },
      error => {
        this.isLoading = false;
        console.log(error)
      }
    )
  }
  onReply(element : any){
    let id = element.cId;
    this.router.navigate(['/admin/contact-us/reply/',id])
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
