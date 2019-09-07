import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoursesServiceService } from '../../courses-service.service';
import { DeleteCourseInfoService } from './delete-course-info.service';


@Component({
  selector: 'am-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {

  @Output() idDeleteCourse = new EventEmitter<number>();

  constructor(
    private dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private deleteCourseInfo: DeleteCourseInfoService,
    // It would be better to use ecents here and pass delete event upd to courses page
    // create new services for pass delete event
    private course: CoursesServiceService) { }

  close() {
    this.dialogRef.close();
  }

  delete() {
    this.deleteCourseInfo.setID(+this.data.id);
    this.dialogRef.close(true);
  }
}
