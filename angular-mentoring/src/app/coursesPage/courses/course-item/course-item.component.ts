import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { MatDialogRef, MatDialog } from '@angular/material';


@Component({
  selector: 'am-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  private deleteModalRef: MatDialogRef<DeleteModalComponent>;

  constructor(private dialog: MatDialog) { }

  @Input() courseItem;
  @Output() deleteCourse = new EventEmitter<any>();

  ratingStar = '';
  isTopRated = false;

  ngOnInit(): void {
    if (this.isTopRated) {
      this.ratingStar = 'start';
    }
  }

  removeCourse() {
    this.deleteCourse.emit('course was removed by id:');
    this.deleteModalRef = this.dialog.open(DeleteModalComponent, {
      data: {
        id: `${this.courseItem.id}`,
        nameCourse: `${this.courseItem.caption}`
      },
    });
  }

}
