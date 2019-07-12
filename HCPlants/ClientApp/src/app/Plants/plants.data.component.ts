import { Component, Inject } from '@angular/core';

@Component({
  selector: 'plants-data-component',
  templateUrl: './plants-component.html'

})
export class PlantsDataComponent {

  public currentPlants = 0;

  public incrementPlants()
  {
      return this.currentPlants++;
  }

};
