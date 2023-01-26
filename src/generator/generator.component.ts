import { Component } from '@angular/core';
import { min } from 'rxjs';

@Component({
  selector: 'generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent {
  newCompanyName = '';

  onClickGenerate() {
    this.newCompanyName = generateNewCompanyName();
  }
}

const generateNewCompanyName = () => {
  const minLength = 2;
  const maxLength = 8;
  const randomLength = Math.floor( Math.random() * maxLength );
  let middlePart = '';
  for(let i = 0; i < randomLength + minLength; i++) {
    middlePart += getRandomMiddleLetter();
  }
  console.log({middlePart});
  
  return 'i' + middlePart + 'o';
};

const getRandomMiddleLetter = () => {
  const availableLetters = ['a', 'c', 'e', 'i', 'n', 'o', 's', 't', 'u', 'v'];
  console.log(availableLetters[Math.floor(Math.random() * availableLetters.length)]);
  
  return availableLetters[Math.floor(Math.random() * availableLetters.length)];
};