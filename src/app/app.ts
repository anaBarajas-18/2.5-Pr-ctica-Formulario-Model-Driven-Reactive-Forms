import { Component } from '@angular/core';
import { RegistroComponent } from './components/registro/registro';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistroComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'formulario-reactivo';
}