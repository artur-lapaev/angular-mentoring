import { Component, EventEmitter, Output, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'am-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {

  private deleteModalRef: MatDialogRef<DeleteModalComponent>;

  constructor(
    private dialog: MatDialog,
    private dialogEditor: MatDialog,
    private changeDetector: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute) { }

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

  openDeleteModalCourse() {
    this.deleteModalRef = this.dialog.open(DeleteModalComponent, {
      data: {
        id: `${this.courseItem.id}`,
        nameCourse: `${this.courseItem.name}`
      },
      panelClass: 'delete-modalbox'
    });

    this.deleteModalRef.afterClosed().subscribe(result => {
      // tslint:disable-next-line: curly
      if (!!result) this.deleteCourse.emit(`${this.courseItem.id}`);
    });
  }

}
