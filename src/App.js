// src/App.js
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import CategoryFilter from "./components/CategoryFilter";
import femum from "./screen/femum.jpg";
import femdois from "./screen/femdois.jpg";
import femtrez from "./screen/femtrez.jpg";
import femquatro from "./screen/femquatro.jpg";
import femcinco from "./screen/femcinco.jpg";
import femseis from "./screen/femseis.jpg";
import femsete from "./screen/femsete.jpg";
import femoito from "./screen/femoito.jpg";
import femnove from "./screen/femnove.jpg";
import femdez from "./screen/femdez.jpg";
import femonze from "./screen/femonze.jpg";
import femdoze from "./screen/femdoze.jpg";
import masum from "./screen/masum.jpg";
import masdois from "./screen/masdois.jpg";
import mastrez from "./screen/mastrez.jpg";
import masquatro from "./screen/masquatro.jpg";
import mascinco from "./screen/mascinco.jpg";
import masseis from "./screen/masseis.jpg";
import massete from "./screen/massete.jpg";
import masoito from "./screen/masoito.jpg";
import masnove from "./screen/masnove.jpg";
import masdez from "./screen/masdez.jpg";
import masonze from "./screen/masonze.jpg";
import masdoze from "./screen/masdoze.jpg";

import "./styles/App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  useEffect(() => {
    // Simulação de chamada à API para obter produtos
    const sampleProducts = [
      {
        id: 1,
        name: "212 VIP ROSÉ",
        category: "Feminino",
        price: 999,
        image: [femum, femdois],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 2,
        name: "LADY MILLION",
        category: "Feminino",
        price: 645,
        image: [femdois],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 3,
        name: "212 SEXY",
        category: "Feminino",
        price: 499,
        image: [femtrez],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 4,
        name: "LIGHT BLUE",
        category: "Feminino",
        price: 599,
        image: [femquatro],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 5,
        name: "OLIMPÍA",
        category: "Feminino",
        price: 599,
        image: [femcinco],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 6,
        name: "VALAIA",
        category: "Feminino",
        price: 599,
        image: [femseis],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 7,
        name: "BLACK XS",
        category: "Feminino",
        price: 599,
        image: [femsete],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 8,
        name: "ANGEL",
        category: "Feminino",
        price: 599,
        image: [femoito],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 9,
        name: "COCO MADEMOISELLE",
        category: "Feminino",
        price: 599,
        image: [femnove],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 10,
        name: "JADORE",
        category: "Feminino",
        price: 599,
        image: [femdez],

        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 11,
        name: "GOOD GIRL",
        category: "Feminino",
        price: 599,
        image: [femonze],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 12,
        name: "SCANDAL",
        category: "Feminino",
        price: 599,
        image: [femdoze],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },

      {
        id: 13,
        name: "hypnôse",
        category: "Masculino",
        price: 799,
        image: [masum],

        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 14,
        name: "212 VIP BLACK",
        category: "Masculino",
        price: 599,
        image: [masdois],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 15,
        name: "ARMANI code",
        category: "Masculino",
        price: 599,
        image: [mastrez],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 16,
        name: "FERRARI BLACK scuderia",
        category: "Masculino",
        price: 599,
        image: [masquatro],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 17,
        name: "1 Million",
        category: "Masculino",
        price: 699,
        image: [mascinco],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 18,
        name: "Maison Francis kurkdjian",
        category: "Masculino",
        price: 619,
        image: [masseis],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 19,
        name: "SAUVAGE",
        category: "Masculino",
        price: 619,
        image: [massete],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 20,
        name: "INVICTUS",
        category: "Masculino",
        price: 619,
        image: [masoito],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 21,
        name: "POLO",
        category: "Masculino",
        price: 619,
        image: [masnove],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 22,
        name: "HUGO BOSS",
        category: "Masculino",
        price: 619,
        image: [masdez],

        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 23,
        name: "PEGASUS EXCLUSIF",
        category: "Masculino",
        price: 619,
        image: [masonze],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
      {
        id: 24,
        name: "212 VIP",
        category: "Masculino",
        price: 619,
        image: [masdoze],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 60 },
        ],
      },
    ];
    setProducts(sampleProducts);
  }, []);

  const addToCart = (product, selectedSize) => {
    const selectedVariant = product.variants.find(
      (v) => v.size === selectedSize
    );
    const cartProduct = {
      ...product,
      selectedSize: selectedSize,
      price: selectedVariant.price,
    };
    setCartItems([...cartItems, cartProduct]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="app">
      <Header />
      <CategoryFilter
        selectedCategory={selectedCategory}
        setCategory={setSelectedCategory}
      />
      <ProductList products={filteredProducts} addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Footer />
    </div>
  );
};

export default App;
