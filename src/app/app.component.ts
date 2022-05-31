import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imie = 'Korwin';
  nazwisko = 'Mikke';
  mail = 'tadzik.kanalarz@gmail.com';
  nrtel = '123456789';
  adres = ['Ćetrzewia Gdańskiego', '25', '45-120', 'Gdańsk', 'Wielkopolska'];
  pokaz = false;
}
export interface Osoba {
  imie: string;
  nazwisko: string;
  mail: string;
  nrtel: string;
  adres: string;
}
