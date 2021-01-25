import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  people: Array<any> = []
  constructor() {
      // в setTimeout можно создать функцию прямо внутри
      setTimeout(() => {
          for (let i = 0; i < 10; i++) {
              this.people.push({
                  "name": "Имя " + i.toString(),
                  "surname": "Фамилия " + i.toString(),
                  "age": 10  + i,
                  "petname": "Имя питомца " + i.toString()
              })
          }
      }, 3000); // будет выполнено через 3 секунды
  }

  ngOnInit(): void {
  }

}
