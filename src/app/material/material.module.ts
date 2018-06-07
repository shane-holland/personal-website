import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule,
        MatToolbarModule, MatIconModule, MatInputModule, MatSelectModule,
        MatSidenavModule, MatGridListModule,
        MatListModule, MatSnackBarModule, MatDialogModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatGridListModule,
    MatSnackBarModule,
    MatDialogModule,
    MatExpansionModule],
exports: [
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatGridListModule,
    MatSnackBarModule,
    MatDialogModule,
    MatExpansionModule]
})
export class MaterialModule {}
