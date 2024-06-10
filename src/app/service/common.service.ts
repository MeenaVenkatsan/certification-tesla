import { Injectable } from '@angular/core';
import { SelectedCar } from '../model/type';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private SelectedCarBehavior = new BehaviorSubject<SelectedCar>(new SelectedCar());
  SelectedCarObservable:Observable<SelectedCar> = this.SelectedCarBehavior.asObservable();
  SelectedCar(SelectedCar: SelectedCar){
    this.SelectedCarBehavior.next(SelectedCar);
  }
}
