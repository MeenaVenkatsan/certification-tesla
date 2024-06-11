import { Component } from '@angular/core';
import { SelectedCar } from '../model/type';
import { CommonService } from '../service/common.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss'
})
export class Step3Component {

  selectedCar:SelectedCar=new SelectedCar();

  constructor(private commonService: CommonService){}

  ngOnInit()
  {
    this.commonService.SelectedCarObservable.subscribe(selectedCar => this.selectedCar=selectedCar); 
  }
}
