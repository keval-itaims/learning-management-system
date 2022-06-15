import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';




const MaterialComponents =[
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatSelectModule,
  MatProgressBarModule
]
@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports:[MaterialComponents]

})
export class MaterialModule { }
