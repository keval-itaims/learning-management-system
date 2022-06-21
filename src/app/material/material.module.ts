import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


const MaterialComponents =[
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
  MatSelectModule,
  MatProgressBarModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,

]
@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports:[MaterialComponents]

})
export class MaterialModule { }
