import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temp-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temp-converter.component.html',
  styleUrl: './temp-converter.component.css'
})
export class TempConverterComponent {
  celsius: number = 0;
  fahrenheit: number = 0;
  celsius1: number = 0;
  fahrenheit1: number = 0;
  convertToCelsius() {
    this.fahrenheit = (this.celsius)* 9 / 5 + 32;
    return this.fahrenheit;
  }

  convertToFahrenheit() {
    this.celsius1= (this.fahrenheit1 - 32) * 5 / 9;
    return this.celsius1;
  }
}
