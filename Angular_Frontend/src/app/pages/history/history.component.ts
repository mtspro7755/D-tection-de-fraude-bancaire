import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PredictionService} from "../../services/prediction.service";
import {FormsModule} from "@angular/forms";
import {DatePipe, DecimalPipe, NgClass, NgForOf, NgIf, CommonModule} from "@angular/common";
//import { Chart,registerables  } from 'chart.js';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    FormsModule,
    DecimalPipe,
    DatePipe,
    NgClass,
    NgForOf,
    NgIf,
    CommonModule
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit, AfterViewInit {
  @ViewChild('fraudeChart') chartRef!: ElementRef<HTMLCanvasElement>;

  historique: any[] = [];
  historiqueFiltre: any[] = [];
  chargement = true;
  erreur = '';
  filtre = 'all';
  recherche = '';
  chart!: Chart;
  chartReady = false;

  constructor(private predictionService: PredictionService) {}

  ngOnInit() {
    this.predictionService.getHistorique().subscribe({
      next: (data) => {
        this.historique = data;
        this.historiqueFiltre = data;
        this.chargement = false;
        this.chartReady = true; // 🟢 Active le <canvas> dans le DOM
      },
      error: (err) => {
        this.erreur = "Erreur lors du chargement de l'historique.";
        this.chargement = false;
      }
    });
  }

  ngAfterViewInit() {
    // ⏳ attend un petit moment pour s'assurer que le DOM est prêt
    setTimeout(() => {
      if (this.historique.length > 0 && this.chartRef) {
        this.initChart();
      }
    }, 100);
  }

  initChart() {
    const nbFraude = this.historique.filter(item => item.prediction === 1).length;
    const nbNormal = this.historique.length - nbFraude;

    if (this.chart) this.chart.destroy();

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Fraude', 'Normal'],
        datasets: [{
          data: [nbFraude, nbNormal],
          backgroundColor: ['#dc3545', '#198754']
        }]
      },
      options: {
        plugins: { legend: { position: 'bottom' } },
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  filtrer() {
    this.historiqueFiltre = this.historique.filter(item => {
      const type = item.prediction === 1 ? 'fraude' : 'normal';
      return (
        (this.filtre === 'all' || this.filtre === type) &&
        JSON.stringify(item).toLowerCase().includes(this.recherche.toLowerCase())
      );
    });
  }
}
