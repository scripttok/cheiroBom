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
import femdezesseis from "./screen/femdezesseis.jpg";
import femquize from "./screen/femquize.jpg";
import cinquentaml from "./screen/cinquentaml.jpg";
import cemml from "./screen/cemml.jpg";

import azzaromas from "./screen/azzaromas.jpg";
import badboymas from "./screen/badboymas.jpg";
import goodgirlfem from "./screen/goodgirlfem.jpg";
import jeanpaulmas from "./screen/jeanpaulmas.jpg";
import jomalonefem from "./screen/jomalonefem.jpg";
import linterditofem from "./screen/linterditofem.jpg";
import mywayfem from "./screen/mywayfem.jpg";
import phantommas from "./screen/phantommas.jpg";
import polomasc from "./screen/polomasc.jpg";
import tandtvipfem from "./screen/tandtvipfem.jpg";
import tomfordmas from "./screen/tomfordmas.jpg";
import silvermas from "./screen/silvermas.jpg";
import bleumas from "./screen/bleumas.jpg";
import dolcemas from "./screen/dolcemas.jpg";
import poloverde from "./screen/poloverde.jpg";

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
        image: [femum, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },

      {
        id: 122,
        name: "DOLCE & GABBANA",
        category: "Masculino",
        price: 999,
        image: [dolcemas, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 134,
        name: "BLEU de CHANEL",
        category: "Masculino",
        price: 999,
        image: [bleumas, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 111,
        name: "SILVER SCENT",
        category: "Masculino",
        price: 999,
        image: [silvermas, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 231,
        name: "POLO SPORT",
        category: "Masculino",
        price: 999,
        image: [polomasc, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 3331,
        name: "TOM FORD",
        category: "Masculino",
        price: 999,
        image: [tomfordmas, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 1345,
        name: "212 VIP ",
        category: "Feminino",
        price: 999,
        image: [tandtvipfem, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 666,
        name: "PHANTOM",
        category: "Masculino",
        price: 999,
        image: [phantommas, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 1222,
        name: "MYWAY",
        category: "Feminino",
        price: 999,
        image: [mywayfem, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 33311,
        name: "l`INTERDIT",
        category: "Feminino",
        price: 999,
        image: [linterditofem, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 4444,
        name: "Jo Malone",
        category: "Feminino",
        price: 999,
        image: [jomalonefem, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 44445544,
        name: "POLO RALPH LAUREN",
        category: "Masculino",
        price: 999,
        image: [poloverde, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 55555,
        name: "JeanPaul GAULTIER",
        category: "Masculino",
        price: 999,
        image: [jeanpaulmas, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 6666,
        name: "GOOD GIRL",
        category: "Feminino",
        price: 999,
        image: [goodgirlfem, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 7777,
        name: "BAD BOY",
        category: "Masculino",
        price: 999,
        image: [badboymas, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 99999,
        name: "AZZARO",
        category: "masculino",
        price: 999,
        image: [azzaromas, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },

      {
        id: 100,
        name: "Kenzo",
        category: "Feminino",
        price: 999,
        image: [femdezesseis, cinquentaml, femquize, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },

      {
        id: 2,
        name: "LADY MILLION",
        category: "Feminino",
        price: 645,
        image: [femdois, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 3,
        name: "212 SEXY",
        category: "Feminino",
        price: 499,
        image: [femtrez, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 4,
        name: "LIGHT BLUE",
        category: "Feminino",
        price: 599,
        image: [femquatro, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 5,
        name: "OLIMPÍA",
        category: "Feminino",
        price: 599,
        image: [femcinco, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 6,
        name: "VALAIA",
        category: "Feminino",
        price: 599,
        image: [femseis, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 7,
        name: "BLACK XS",
        category: "Feminino",
        price: 599,
        image: [femsete, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 8,
        name: "ANGEL",
        category: "Feminino",
        price: 599,
        image: [femoito, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 9,
        name: "COCO MADEMOISELLE",
        category: "Feminino",
        price: 599,
        image: [femnove, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 10,
        name: "JADORE",
        category: "Feminino",
        price: 599,
        image: [femdez, cinquentaml, cemml],

        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 11,
        name: "GOOD GIRL",
        category: "Feminino",
        price: 599,
        image: [femonze, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 12,
        name: "SCANDAL",
        category: "Feminino",
        price: 599,
        image: [femdoze, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },

      {
        id: 13,
        name: "hypnôse",
        category: "Feminino",
        price: 799,
        image: [masum, cinquentaml, cemml],

        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 14,
        name: "212 VIP BLACK",
        category: "Masculino",
        price: 599,
        image: [masdois, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 15,
        name: "ARMANI code",
        category: "Feminino",
        price: 599,
        image: [mastrez, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 16,
        name: "FERRARI BLACK scuderia",
        category: "Masculino",
        price: 599,
        image: [masquatro, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 17,
        name: "1 Million",
        category: "Masculino",
        price: 699,
        image: [mascinco, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 18,
        name: "Baccarat Rouge",
        category: "Masculino",
        price: 619,
        image: [masseis, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 19,
        name: "SAUVAGE",
        category: "Masculino",
        price: 619,
        image: [massete, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 20,
        name: "INVICTUS",
        category: "Masculino",
        price: 619,
        image: [masoito, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 21,
        name: "POLO",
        category: "Masculino",
        price: 619,
        image: [masnove, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 22,
        name: "HUGO BOSS",
        category: "Masculino",
        price: 619,
        image: [masdez, cinquentaml, cemml],

        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 23,
        name: "PEGASUS EXCLUSIF",
        category: "Masculino",
        price: 619,
        image: [masonze, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
        ],
      },
      {
        id: 24,
        name: "212 VIP",
        category: "Masculino",
        price: 619,
        image: [masdoze, cinquentaml, cemml],
        variants: [
          { size: "100ml", price: 90 },
          { size: "50ml", price: 65 },
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
