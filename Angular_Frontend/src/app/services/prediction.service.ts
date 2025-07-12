import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PredictionService {
  apiUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

  predict(features: number[]) {
    return this.http.post<any>(`${this.apiUrl}/predict`, { features });
  }

  getHistorique() {
    return this.http.get<any[]>(`${this.apiUrl}/history`);
  }
}
