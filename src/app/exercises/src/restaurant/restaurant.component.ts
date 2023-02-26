import { Component, OnInit } from '@angular/core';
import { Observable, Subject, zip } from 'rxjs';
import { mergeMap, tap, take, map } from 'rxjs/operators';

type Kebab = ['salade', 'tomate', 'oignon', 'viande', 'pain'];
let customerId = 0;
let saladeCounter = 0;
let tomateCounter = 0;
let oignonCounter = 0;
let viandeCounter = 0;
let painCounter = 0;

interface Commande {
  montant: number;
  customerId: number;
}

interface Produit {
  produit: Kebab;
  customerId: number;
}

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
})
export class RestaurantComponent implements OnInit {
  kebab$!: Observable<Kebab>;
  livraison$!: Observable<Produit>;

  _commande = new Subject<Commande>();
  _salade = new Subject<'salade'>();
  _tomate = new Subject<'tomate'>();
  _oignon = new Subject<'oignon'>();
  _viande = new Subject<'viande'>();
  _pain = new Subject<'pain'>();

  ngOnInit(): void {
    this.kebab$ = zip(
      this._salade.pipe(tap(console.log)),
      this._tomate.pipe(tap(console.log)),
      this._oignon.pipe(tap(console.log)),
      this._viande.pipe(tap(console.log)),
      this._pain.pipe(tap(console.log))
    ).pipe(tap((kebab) => console.log('Enjoy ! ', kebab)));

    this.livraison$ = this._commande.pipe(
      tap((commande) => console.log('Commande reçue', commande)),
      mergeMap(({ montant, customerId }) =>
        this.kebab$.pipe(
          take(montant),
          map((kebab) => ({ produit: kebab, customerId }))
        )
      ),
      tap((produit) => console.log('Produit livré', produit))
    );
  }

  lancerCommande() {
    const montant = Math.floor(Math.random() * 3 + 1);
    ++customerId;
    console.log('ID', customerId);
    this._commande.next({ montant, customerId });
  }
}
