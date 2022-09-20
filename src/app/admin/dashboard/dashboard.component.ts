import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('Me pinté por completo, pero sigo en proceso de carga');
  }

  ionViewWillEnter(): void{
    console.log('Componente pintado. Iniciando animación...')
  }

  ionViewDidEnter(): void{
    console.log('Componente pintado. Animación terminada')
  }

  ionViewWillLeave(): void{
    alert('Adiós, amigo')
    console.log('Componente iniciado. Animación de salida')
  }

  ionViewDidLeave(): void{
    alert('Ya me voy. No hay nada que hacer')
    console.log('Animación terminada. Iniciando destrucción')
  }

  ngOnDestroy(): void {
    alert('Ya me fui. Fue un gusto')
    console.log('Salí de la memoria. Me destruí')
  }
}
