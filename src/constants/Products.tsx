import hungton from '../images/products/hungton.jpg';
import sunset from '../images/products/sunsetBank.jpg';
import rfcue from '../images/products/RFCU.png';
import Chime from "../images/products/chime.png";
import chaseBank from "../images/products/chaseBank.png"
import woodForestBank from "../images/products/woodforestBank.jpg"
import {Product} from "../types/product"

export const products: Product[] = [
    {
        id: 1,
        name: "RFCU BANK",
        image: rfcue,
        price: 160.99,
        amount: 43231.00,
    },
    {
        id: 2,
        name: "Huntington Bank",
        image: hungton,
        price: 310.99,
        amount: 3521.00,
    },
    {
        id: 3,
        name: "Sunset Bank",
        image: sunset,
        price: 420.99,
        amount: 7523.00,
    },
    {
        id: 4,
        name: "RFCU Bank",
        image: rfcue,
        price: 150.99,
        amount: 2780.00
    },
    {
        id: 5,
        name: "Chime Bank",
        image: Chime,
        price: 390.99,
        amount: 4526.98
    },
    {
        id: 6,
        name: "Chase Bank",
        image: chaseBank,
        price: 514.99,
        amount: 8934.00
    },
    {
        id: 7,
        name: "woodforest national bank",
        image: woodForestBank,
        price: 512.99,
        amount: 7023.00
    }
];
