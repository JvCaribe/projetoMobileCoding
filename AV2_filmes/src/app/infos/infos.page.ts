import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
=======
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItemDivider, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
>>>>>>> 8b572f755e293e1b10562e87e11e2d9a91412a81

@Component({
  selector: 'app-infos',
  templateUrl: './infos.page.html',
  styleUrls: ['./infos.page.scss'],
  standalone: true,
<<<<<<< HEAD
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
=======
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItemDivider, IonLabel, RouterLink, IonIcon]
>>>>>>> 8b572f755e293e1b10562e87e11e2d9a91412a81
})
export class InfosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
