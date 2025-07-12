import { Component } from '@angular/core';
import {PredictionService} from "../../services/prediction.service";
import {FormsModule} from "@angular/forms";
import {CommonModule,DatePipe, DecimalPipe, NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  variables = Array(13).fill(null); // Pour *ngFor
  features: number[] = new Array(13).fill(0);
  result: any = null;
  loading = false;

  constructor(private predictionService: PredictionService) {}

  onSubmit() {
    this.loading = true;
    this.result = null;

    this.predictionService.predict(this.features).subscribe({
      next: (data) => {
        this.result = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur API :', err);
        this.loading = false;
        this.result = { prediction: -1, error: 'Erreur serveur' };
      }
    });
  }

  loadFraude() {
    this.features = [0.45, -0.32, 0.12, -0.98, 0.75, -0.45, 0.34, -0.76, 0.56, -0.23, 0.11, -0.56, 0.29];
    this.result = null;
  }

  loadNormal() {
    this.features = [3.25, -2.80, 4.10, -3.75, 2.50, -3.20, 4.15, -4.00, 3.90, -2.95, 3.60, -3.10, 3.70];
    this.result = null;
  }
}
