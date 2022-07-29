import { ANALYZE_FOR_ENTRY_COMPONENTS, Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/classes/instructor';
import { MatTableDataSource } from '@angular/material/table';
import { InstructorService } from 'src/app/services/instructor.service';
import { Router } from '@angular/router';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { User } from 'src/app/classes/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UtilityService } from 'src/app/services/utility.service';




@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css']
})
export class InstructorDetailComponent implements OnInit {

  instructorDetail : User[] = [];
  isLoading: boolean = true;

  constructor(private instructorService: InstructorService, private router: Router, private confirmDialogService: ConfirmDialogService, private utilityService: UtilityService) { }

  ngOnInit(): void {

    this.getInstructor()

  }

  displayedColumns: string[] = ['profileImage', 'firstName', 'lastName', 'email', 'phoneNo', 'action'];
  dataSource: MatTableDataSource<Instructor[]> | any;


  private getInstructor() {
    this.instructorService.getInstructorDetails().subscribe(
      data => {
        this.isLoading = false;
        this.instructorDetail = data;
        this.dataSource = new MatTableDataSource(this.instructorDetail);
      },
      error => {
        this.isLoading = false;
        console.log(error);
      }
    )
  }

  onUpdateInstructor(element: any) {
    let id = element.userId;
    this.router.navigate(['/admin/instructor/update/', id]);

  }

  onDeleteInstrcutor(element: any) {
    let id = element.userId;
    alert("user Id : " + id)
    this.confirmDialogService.openConfirmDialog({
      title: 'Delete Instructor',
      message: 'Are you sure?',
      confirmText: 'Delete',
      cancleText: 'Cancle'
    }).subscribe(
      result => {
        if (result) {
          this.instructorService.deleteInstructor(id).subscribe(
            data => {
              this.utilityService.openSnackBar("Instructor deleted!", "close");
              this.getInstructor();

            },
            error => console.log(error)
          )
        }

      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
