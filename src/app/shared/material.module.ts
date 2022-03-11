import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule, MatIconModule } from "@angular/material";
import { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatSidenavModule],
  exports: [MatButtonModule, MatIconModule, MatSidenavModule],
})
export class MaterialModule {}
