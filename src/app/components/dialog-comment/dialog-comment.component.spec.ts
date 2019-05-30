import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCommentComponent } from './dialog-comment.component';
import { MatCardModule, MatInputModule, MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogCommentComponent', () => {
  let component: DialogCommentComponent;
  let fixture: ComponentFixture<DialogCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCommentComponent],
      imports: [FormsModule, MatInputModule, MatDialogModule, BrowserAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MatDialog, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
