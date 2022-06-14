import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';


const MaterialComponents =[
  MatButtonModule,
  MatSidenavModule
]
@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports:[MaterialComponents]

})
export class MaterialModule { }
