import { Injectable } from '@angular/core';

@Injectable()

export class LocalStorageService {
  stringifyData(data: object): string {
    return JSON.stringify(data);
  }
  parseData(data: string): object {
    return JSON.parse(data);
  }
  setItem(key: string, value: any): void {
    localStorage.setItem(key, this.stringifyData(value));
  }
  getItem(key: string): object {
    return this.parseData(localStorage.getItem(key));
  }
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
