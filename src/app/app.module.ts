import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Product } from './entities/product.entity';
import { Item } from './entities/item.entity';
import { ProductService } from './services/product.service';
import { SuccessService } from './success.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NaviComponent } from './navi/navi.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { InfoComponent } from './info/info.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
import { Product4Component } from './product4/product4.component';
import { Product5Component } from './product5/product5.component';
import { Product6Component } from './product6/product6.component';
import { Product7Component } from './product7/product7.component';
import { Product8Component } from './product8/product8.component';
import { Product9Component } from './product9/product9.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessComponent } from './success/success.component';
import { OrderComponent } from './order/order.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TermandcondComponent } from './termandcond/termandcond.component';
import { Product10Component } from './product10/product10.component';
import { Product11Component } from './product11/product11.component';
import { ExtraVirginCoconutHairOilComponent } from './extra-virgin-coconut-hair-oil/extra-virgin-coconut-hair-oil.component';
import { ColdPressedCoconutHairOilComponent } from './cold-pressed-coconut-hair-oil/cold-pressed-coconut-hair-oil.component';
import { IndoreSevComponent } from './indore-sev/indore-sev.component';
import { ColdPressedSunflowerOilComponent } from './cold-pressed-sunflower-oil/cold-pressed-sunflower-oil.component';
import { ColdPressedSesameOilComponent } from './cold-pressed-sesame-oil/cold-pressed-sesame-oil.component';
import { ColdPressedFlaxseedOilComponent } from './cold-pressed-flaxseed-oil/cold-pressed-flaxseed-oil.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      NaviComponent,
      FooterComponent,
      HomeComponent,
      SliderComponent,
      ContactComponent,
      AboutComponent,
      ProductComponent,
      InfoComponent,
      BackToTopComponent,
      Product1Component,
      Product2Component,
      Product3Component,
      Product4Component,
      Product5Component,
      Product6Component,
      Product7Component,
      Product8Component,
      Product9Component,
      CartComponent,
      CheckoutComponent,
      SuccessComponent,
      OrderComponent,
      ErrorPageComponent,
      TermandcondComponent,
      Product10Component,
      Product11Component,
      ExtraVirginCoconutHairOilComponent,
      ColdPressedCoconutHairOilComponent,
      IndoreSevComponent,
      ColdPressedSunflowerOilComponent,
      ColdPressedSesameOilComponent,
      ColdPressedFlaxseedOilComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule, CommonModule,
      HttpClientModule,
      RouterModule.forRoot([{
         path: '',
         component: HomeComponent
      }, {
         path: 'home',
         component: HomeComponent
      }, {
         path: 'contact',
         component: ContactComponent
      }, {
         path: 'product',
         component: ProductComponent
      }, {
         path: 'info',
         component: InfoComponent
      }, {
         path: 'about',
         component: AboutComponent
      }, {
         path: 'coldPressedGroundnutOil',
         component: Product1Component
      }, {
         path: 'coldPressedVirginCoconutOil',
         component: Product2Component
      }, {
         path: 'extraVirginCoconutOil',
         component: Product3Component
      }, {
         path: 'coconutBura',
         component: Product4Component
      }, {
         path: 'garlicPowder',
         component: Product5Component
      }, {
         path: 'coconutGola',
         component: Product6Component
      }, {
         path: 'product7',
         component: Product7Component
      }, {
         path: 'product8',
         component: Product8Component
      }, {
         path: 'goundnutGarlicChatney',
         component: Product9Component
      }, {
         path: 'coconutGarlicChatney',
         component: Product10Component
      }, {
         path: 'redchilliPowder',
         component: Product11Component
      }, {
         path: 'extraVirginCoconutHairOil',
         component: ExtraVirginCoconutHairOilComponent
      }, {
         path: 'coldPressedCoconutHairOil',
         component: ColdPressedCoconutHairOilComponent
      }, {
         path: 'indoriSev',
         component: IndoreSevComponent
      }, {
         path: 'sunflowerOil',
         component: ColdPressedSunflowerOilComponent
      }, {
         path: 'sesameOil',
         component: ColdPressedSesameOilComponent
      }, {
         path: 'flaxseedOil',
         component: ColdPressedFlaxseedOilComponent
      }, {
         path: 'cart',
         component: CartComponent
      }, {
         path: 'checkout',
         component: CheckoutComponent
      }, {
         path: 'success',
         component: SuccessComponent
      }, {
         path: 'order',
         component: OrderComponent
      }, {
         path: 'errorpage',
         component: ErrorPageComponent
      }, {
         path: 'termandcondition',
         component: TermandcondComponent
      }], {
         anchorScrolling: 'enabled',
      })
   ],
   providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, ProductService, SuccessService],
   bootstrap: [AppComponent]
})
export class AppModule { }
