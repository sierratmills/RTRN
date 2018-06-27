import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { NewAccountPage } from '../pages/new-account/new-account';
import { ProfilePage } from '../pages/profile/profile';
import { MainPage } from '../pages/main/main';
import { UserprofPage } from '../pages/userprof/userprof';
import { ShopPage } from '../pages/shop/shop';
import { MapPage } from '../pages/map/map';

import { ComponentsModule } from '../components/components.module';
import { SearchResultsPage} from '../pages/Search-results/search-results';
import { StoreSitePage } from '../pages/store-site/store-site';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    LoginPage,
    NewAccountPage,
    ProfilePage,
    MainPage,
    UserprofPage,
    ShopPage,
    MapPage,
    SearchResultsPage,
    StoreSitePage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    NewAccountPage,
    ProfilePage,
    MainPage,
    UserprofPage,
    ShopPage,
    MapPage,
    SearchResultsPage,
    StoreSitePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
