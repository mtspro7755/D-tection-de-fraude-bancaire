import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {HistoryComponent} from "./pages/history/history.component";
import {AProposComponent} from "./pages/a-propos/a-propos.component";
import {FooterComponent} from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent, HistoryComponent, AProposComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Frontend';
}
