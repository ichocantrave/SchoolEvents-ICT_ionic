import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular';
@Component({
    selector:'app-no-encontrada',
    templateUrl:'./no-encontrada.page.html',
    styleUrls:['./no-encontrada.page.scss'],
    imports:[IonContent,RouterLink]
})
export class NoEncontradaPage {}
