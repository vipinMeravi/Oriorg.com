import { Injectable } from '@angular/core';
import { Item } from '../entities/item.entity';
import { Product } from '../entities/product.entity';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductService {

    private products: Product[];
    private items: Item[] = [];
    private total: number = 0;
    private total1: number = 0;
    private discountValue: number = 0;
    private messageSource = new BehaviorSubject(this.total1);
    currentMessage = this.messageSource.asObservable();

    constructor() {
        this.products = [
            { id: 'p1', name: 'Cold Pressed Groundnut Oil', price: 260, photo: 'cold_pressed_groundnut_oil_new.jpeg', offer_value: 0 },
            { id: 'p10', name: 'Cold Pressed Groundnut Oil', price: 170, photo: 'cold_pressed_groundnut_oil_new.jpeg', offer_value: 0 },
            { id: 'p2', name: 'Cold Pressed Virgin Coconut oil', price: 349, photo: 'cold_pressed_virgin_coconut_oil_new.jpeg', offer_value: 0 },
            { id: 'p11', name: 'Cold Pressed Virgin Coconut oil', price: 199, photo: 'cold_pressed_virgin_coconut_oil_new.jpeg', offer_value: 0 },
            { id: 'p3', name: 'Extra Virgin Coconut Oil', price: 599, photo: '6.png', offer_value: 0 },
            { id: 'p12', name: 'Extra Virgin Coconut Oil', price: 399, photo: '6.png', offer_value: 0 },
            { id: 'p13', name: 'Extra Virgin Coconut Oil', price: 199, photo: '6.png', offer_value: 0 },
            // { id: 'p4', name: 'OriOrg Coconut Bura ', price: 250, photo: '6.jpg' ,offer_value:0},
            // { id: 'p5', name: 'OriOrg Garlic Powder', price: 90, photo: '4.jpg' ,offer_value:0},
            // { id: 'p6', name: 'OriOrg Coconut Gola', price: 250, photo: '9.jpg' ,offer_value:0},
            { id: 'p7', name: 'Groundnut Chutney', price: 280, photo: 'groundnutGarlicChatney.jpeg', offer_value: 0 },
            // { id: 'p8', name: 'Charcoal briquettes', price: 290, photo: '8.jpg' ,offer_value:0},
            { id: 'p9', name: 'OriOrg Groundnut Garlic Chatney', price: 40, photo: 'groundnutGarlicChatney.jpeg', offer_value: 0 },
            { id: 'p14', name: 'OriOrg Coconut Garlic Chatney', price: 40, photo: 'coconutGarlicChatney.jpeg', offer_value: 0 },
            { id: 'p15', name: 'OriOrg Redchilli Powder', price: 45, photo: 'groundnutGarlicChatney.jpeg', offer_value: 0 },
            { id: 'p16', name: 'Cold Pressed Coconut Oil - 100 ml', price: 50, photo: 'cold_pressed_coconut_hair_oil.jpeg', offer_value: 0 },
            { id: 'p17', name: 'Extra Virgin Coconut Oil - 100 ml', price: 100, photo: 'extra_virgin_coconut_hair_oil.jpeg', offer_value: 0 },

            { id: 'p18', name: 'Cold Pressed Sunflower Oil', price: 329, photo: 'sunflower_oil.jpeg', offer_value: 0 },
            { id: 'p19', name: 'Cold Pressed Sunflower Oil', price: 179, photo: 'sunflower_oil.jpeg', offer_value: 0 },

            { id: 'p20', name: 'Cold Pressed Sesame Oil', price: 449, photo: 'sesame_oil.jpeg', offer_value: 0 },
            { id: 'p21', name: 'Cold Pressed Sesame Oil', price: 249, photo: 'sesame_oil.jpeg', offer_value: 0 },

            { id: 'p22', name: 'Cold Pressed Flaxseed Oil', price: 599, photo: 'flaxseed_oil.jpeg', offer_value: 0 },
            { id: 'p23', name: 'Cold Pressed Flaxseed Oil', price: 349, photo: 'flaxseed_oil.jpeg', offer_value: 0 },
            // { id: 'p18', name: 'Indori Sev Mix Gravy', price: 40, photo: 'indoreSev.jpeg' ,offer_value:0},
        ];
    }
    changeMessage(message: number) {
        this.messageSource.next(message)
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

    loadCart(): Item[] {
        this.items = [];

        let cart = JSON.parse(localStorage.getItem('cart'));
        for (var i = 0; i < cart.length; i++) {
            let item = JSON.parse(cart[i]);
            this.items.push({
                product: item.product,
                quantity: item.quantity
            });
        }
        return this.items;
    }

    loadPrice(): number {
        this.total = 0;
        let cart = JSON.parse(localStorage.getItem('cart'));
        for (var i = 0; i < cart.length; i++) {
            let item = JSON.parse(cart[i]);
            this.total += item.product.price * item.quantity;
        }
        return this.total;
    }

    loadDiscount(): number {
        this.discountValue = 0;
        let cart = JSON.parse(localStorage.getItem('cart'));
        for (var i = 0; i < cart.length; i++) {
            let item = JSON.parse(cart[i]);
            console.log("Item value : ", item, "Offer Value : ", item.product.offer_value);
            this.discountValue += item.quantity * item.product.offer_value;
        }
        return this.discountValue;
    }

    loadQuantity(): number {
        this.total1 = 0;
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart != null) {
            for (var i = 0; i < cart.length; i++) {
                let item = JSON.parse(cart[i]);
                this.total1 += item.quantity;
            }
        }
        return this.total1;
    }

}
