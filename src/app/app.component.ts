import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bookstore';

  ngOnInit() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCpF22sqmGG4kqUI8LbPH0PIg3Q0EYOyps'
    };

    firebase.initializeApp(firebaseConfig);
  }
}
