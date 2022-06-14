import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';




const MaterialComponents =[
  MatButtonModule,
  MatSidenavModule,
  MatIconModule
]
@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports:[MaterialComponents]

})
export class MaterialModule { }
