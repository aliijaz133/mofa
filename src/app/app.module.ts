import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp({})),
    provideFirebaseApp(() => initializeApp({"projectId":"mofa-pak","appId":"1:491255760632:web:fdf69a7a5048ee0bafdd0d","databaseURL":"https://mofa-pak-default-rtdb.firebaseio.com","storageBucket":"mofa-pak.appspot.com","apiKey":"AIzaSyCx6AfpGGhaf3Jjv49f-7MuAY4srL_Td8c","authDomain":"mofa-pak.firebaseapp.com","messagingSenderId":"491255760632","measurementId":"G-5YTWNK5JR0"})),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
  ],
  providers: [provideToastr()],
  bootstrap: [AppComponent]
})
export class AppModule { }
