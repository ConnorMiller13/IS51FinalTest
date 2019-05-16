import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { LocalStorageService } from '../localStorageService';

export interface IBike {
  id: number;
  image: '';
  description: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  bikes: Array<any> = [];
  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
    this.bikes = await this.loadBikeFromFile();

  }
  async loadBikeFromFile() {
    const inventory = await this.http.get('./assets/inventory.json').toPromise();
    return inventory.json();
  }
  addBikeModel1() {
    const newBike: IBike = {
      'id': null,
      'image': '../../assets/bike1.jpeg',
      'description': null,
      'price': null,
      'quantity': null,
    };
    this.bikes.unshift(newBike);
    this.saveToLocalStorage('bikes', this.bikes);
  }
  addBikeModel2() {
    const newBike2: IBike = {
      'id': null,
      'image': '../../assets/bike2.jpeg',
      'description': null,
      'price': null,
      'quantity': null,
    };
    this.bikes.unshift(newBike2);
    this.saveToLocalStorage('bikes', this.bikes);
  }
  addBikeModel3() {
    const newBike3: IBike = {
      'id': null,
      'image': '../../assets/bike3.jpeg',
      'description': null,
      'price': null,
      'quantity': null,
    };
    this.bikes.unshift(newBike3);
    this.saveToLocalStorage('bikes', this.bikes);
  }
  saveToLocalStorage(key: string, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  deleteBike(index: number) {
    this.bikes.splice(index, 1);
    this.saveToLocalStorage('bikes', this.bikes);
  }

 checkout() {
  this.router.navigate(['invoice']);
 }


}
