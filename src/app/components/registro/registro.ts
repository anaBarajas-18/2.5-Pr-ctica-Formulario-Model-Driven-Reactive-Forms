import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class RegistroComponent {
  private fb = inject(FormBuilder);

  // Definimos el formulario y sus validaciones
  registroForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    apellidos: ['', [Validators.required]],
    correo: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required]],
    contrasena: ['', [Validators.required, Validators.minLength(8)]]
  });

  datosEnviados: any = null;

  enviarFormulario() {
    if (this.registroForm.invalid) return;

    // Guardamos los datos para mostrarlos en pantalla
    this.datosEnviados = this.registroForm.value;
    console.log('Datos registrados:', this.datosEnviados);
    
    // this.registroForm.reset();
  }
}