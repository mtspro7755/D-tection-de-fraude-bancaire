import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {HistoryComponent} from "./pages/history/history.component";
import {AProposComponent} from "./pages/a-propos/a-propos.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'history', component: HistoryComponent},
  {path:'a-propos', component: AProposComponent},
  { path: '**', redirectTo: '' }

];
