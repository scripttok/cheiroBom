import React, { useState, useRef } from "react";

const ProductItem = ({ product, addToCart }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.variants[0].size); // Tamanho padrão
  const magnifierRef = useRef(null);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.image.length - 1 : prevIndex - 1
    );
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMagnifierPos({ x, y });

    const img = e.target;
    const zoomLevel = 2;
    const magnifierSize = 100;
    const bgX = (x * zoomLevel - magnifierSize / 2) * -1;
    const bgY = (y * zoomLevel - magnifierSize / 2) * -1;

    if (magnifierRef.current) {
      magnifierRef.current.style.backgroundImage = `url(${product.image[currentImageIndex]})`;
      magnifierRef.current.style.backgroundSize = `${img.width * zoomLevel}px ${
        img.height * zoomLevel
      }px`;
      magnifierRef.current.style.backgroundPosition = `${bgX}px ${bgY}px`;
    }
  };

  const handleMouseEnter = () => setShowMagnifier(true);
  const handleMouseLeave = () => setShowMagnifier(false);

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
  };

  if (
    !product.image ||
    !Array.isArray(product.image) ||
    product.image.length === 0
  ) {
    return (
      <div className="product-item">
        <p>Imagem não disponível</p>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          {product.variants.map((variant) => (
            <option key={variant.size} value={variant.size}>
              {variant.size} - R${variant.price.toFixed(2)}
            </option>
          ))}
        </select>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }

  return (
    <div className="product-item">
      <div className="carousel">
        <button onClick={prevImage}>{"<"}</button>
        <div
          className="image-container"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={product.image[currentImageIndex]}
            alt={`${product.name} ${currentImageIndex + 1}`}
          />
          <div
            ref={magnifierRef}
            className="magnifier"
            style={{
              left: `${magnifierPos.x - 50}px`,
              top: `${magnifierPos.y - 50}px`,
              visibility: showMagnifier ? "visible" : "hidden",
            }}
          />
        </div>
        <button onClick={nextImage}>{">"}</button>
      </div>
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <select
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
      >
        {product.variants.map((variant) => (
          <option key={variant.size} value={variant.size}>
            {variant.size} - R${variant.price.toFixed(2)}
          </option>
        ))}
      </select>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
};

export default ProductItem;
