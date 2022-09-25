import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckInService } from './check-in.service';
import { CheckInInterface } from './interfaces/check-in.interface';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css'],
})
export class CheckInComponent implements OnInit {
  checkInForm: FormGroup;
  tglMasuk: String;

  constructor(private checkInService: CheckInService) {}

  ngOnInit(): void {
    this.initForm();
    this.setInitValue();
    this.saveOnChange();
  }

  title = 'Check-In';
  isTitleChange = false;
  activitas = 'Aktivitas Dalam Ruangan';
  isActivitasChange = false;

  initForm(): void {
    this.checkInForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      nik: new FormControl('', [Validators.required]),
      mall: new FormControl('', [Validators.required]),
    });
  }

  setInitValue(): void {
    this.onDataChange();
    this.tglMasuk = this.checkInService.getDate();
  }

  onDataChange(): void {
    const data: CheckInInterface = this.checkInService.getUserData();

    this.checkInForm.patchValue({
      username: data.username,
      nik: data.nik,
      mall: data.mall,
    });
  }

  saveOnChange(): void {
    this.checkInForm.valueChanges.subscribe((val) => {
      this.checkInService.setUserData(val);
    });
  }

  activitasOnClick(): void {
    this.isActivitasChange = !this.isActivitasChange;

    if (this.isActivitasChange) {
      this.activitas = 'Aktivitas Dalam Ruangan';
    } else {
      this.activitas = 'Aktivitas Luar Ruangan';
    }
  }

  titleOnClick(): void {
    this.isTitleChange = !this.isTitleChange;

    if (this.isTitleChange) {
      this.title = 'Check-In';
    } else {
      this.title = 'Check-Out';
    }
  }

  reloadPage(): void {
    location.reload();
  }
}
