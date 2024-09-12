import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {
  updateUserForm!: FormGroup; //  no nulo o inicializada.

  constructor(private fb: FormBuilder, private navCtrl: NavController) {}

  ngOnInit() {
    this.updateUserForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      id: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.updateUserForm.valid) {
      const password = this.updateUserForm.get('password')!.value;
      const confirmPassword = this.updateUserForm.get('confirmPassword')!.value;
  
      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }
  
      // lógica backend
      alert('Formulario enviado correctamente');
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}