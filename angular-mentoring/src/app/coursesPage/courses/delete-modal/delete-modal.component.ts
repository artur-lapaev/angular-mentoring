import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoursesServiceService } from '../../courses-service.service';


@Component({
  selector: 'am-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {

  constructor(
    private dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private course: CoursesServiceService) { }

  close() {
    this.dialogRef.close();
  }

  delete() {
    this.course.removeItem(+this.data.id);
    this.dialogRef.close(true);
  }
}
