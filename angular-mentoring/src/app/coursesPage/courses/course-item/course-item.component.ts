import { Component, EventEmitter, Output, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { EditorCourseComponent } from '../../editor-course/editor-course.component';


@Component({
  selector: 'am-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {

  private deleteModalRef: MatDialogRef<DeleteModalComponent>;
  private editorCourseRef: MatDialogRef<EditorCourseComponent>;

  constructor(private dialog: MatDialog, private dialogEditor: MatDialog, private changeDetector: ChangeDetectorRef) { }

  @Input() courseItem;
  @Output() deleteCourse = new EventEmitter<any>();

  ratingStar = '';
  isTopRated = false;

  ngOnInit(): void {
    if (this.isTopRated) {
      this.ratingStar = 'start';
    }
    this.changeDetector.detectChanges();
  }
  openEditorCourse() {
    this.editorCourseRef = this.dialogEditor.open(EditorCourseComponent, {
      data: this.courseItem,
      panelClass: 'editor-modalbox'
    });
  }
  openDeleteModalCourse() {
    this.deleteModalRef = this.dialog.open(DeleteModalComponent, {
      data: {
        id: `${this.courseItem.id}`,
        nameCourse: `${this.courseItem.caption}`
      },
      panelClass: 'delete-modalbox'
    });

    this.deleteModalRef.afterClosed().subscribe(result => {
      // tslint:disable-next-line: curly
      if (!!result) this.deleteCourse.emit(`${this.courseItem.id}`);
    });
  }

}
