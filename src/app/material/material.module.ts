import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const MaterialComponents =[
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
  MatSelectModule,
  MatProgressBarModule
]
@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports:[MaterialComponents]

})
export class MaterialModule { }
