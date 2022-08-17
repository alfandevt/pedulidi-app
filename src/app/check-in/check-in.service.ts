import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { CheckInInterface } from './interfaces/check-in.interface';
faker.locale = 'id_ID';

@Injectable({ providedIn: 'root' })
export class CheckInService {
  constructor() {}

  userData: CheckInInterface = {
    username: null,
    nik: null,
    mall: null,
  };

  getDate(): string {
    return new Date().toLocaleString();
  }

  // setUsername(username: string): void {
  //     localStorage.setItem('username', username)
  // }

  // setNik(nik: string): void {
  //     localStorage.setItem('nik', nik)
  // }

  // setMall(mall: string): void {
  //     localStorage.setItem('mall', mall)
  // }

  setUserData(data: CheckInInterface): void {
    localStorage.setItem('username', data.username);

    localStorage.setItem('nik', data.nik);

    localStorage.setItem('mall', data.mall);
  }

  getUserData(): CheckInInterface {
    this.userData.username = this.getUsername() || 'John Doe';
    this.userData.nik = this.getNik() || '31751003020030002';
    this.userData.mall = this.getMall() || 'Metland Mall Cileungsi';
    return this.userData;
  }

  getUsername(): string {
    const username = localStorage.getItem('username');
    if (username) {
      return username;
    }
    return null;
  }

  getNik(): string {
    const nik = localStorage.getItem('nik');
    if (nik) {
      return nik;
    }
    return null;
  }

  getMall(): string {
    const mall = localStorage.getItem('mall');
    if (mall) {
      return mall;
    }
    return null;
  }
}
