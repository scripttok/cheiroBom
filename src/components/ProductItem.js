import React, { useState, useRef } from "react";

const ProductItem = ({ product, addToCart }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.variants[0].size);
  const [isExpanded, setIsExpanded] = useState(false);
  const magnifierRef = useRef(null);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.image.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.image.length - 1 : prev - 1
    );
  };

  const handleMouseMove = (e) => {
    if (!isExpanded) return;

    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setMagnifierPos({ x, y });

    if (magnifierRef.current) {
      const zoomLevel = 2;
      const magnifierSize = 150;
      const bgX = (x * zoomLevel - magnifierSize / 2) * -1;
      const bgY = (y * zoomLevel - magnifierSize / 2) * -1;

      magnifierRef.current.style.backgroundImage = `url(${product.image[currentImageIndex]})`;
      magnifierRef.current.style.backgroundSize = `${
        e.currentTarget.offsetWidth * zoomLevel
      }px ${e.currentTarget.offsetHeight * zoomLevel}px`;
      magnifierRef.current.style.backgroundPosition = `${bgX}px ${bgY}px`;
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setShowMagnifier(false);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
  };

  return (
    <div className="product-item">
      <div className="carousel">
        <div
          className="image-container"
          onClick={toggleExpand}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => isExpanded && setShowMagnifier(true)}
          onMouseLeave={() => setShowMagnifier(false)}
        >
          <img
            src={product.image[currentImageIndex]}
            alt={`${product.name} - ${currentImageIndex + 1}/${
              product.image.length
            }`}
          />

          {isExpanded && (
            <div
              ref={magnifierRef}
              className="magnifier"
              style={{
                left: `${magnifierPos.x - 75}px`,
                top: `${magnifierPos.y - 75}px`,
                display: showMagnifier ? "block" : "none",
              }}
            />
          )}
        </div>
      </div>

      {/* Miniaturas sem botões de navegação */}
      {product.image.length > 1 && (
        <div className="thumbnails">
          {product.image.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${
                index === currentImageIndex ? "active" : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      )}

      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <div className="variation-section">
        <p className="variation-label">VARIAÇÃO</p>
        <div className="size-options">
          {product.variants.map((variant) => (
            <label key={variant.size} className="size-option">
              <input
                type="radio"
                name={`size-${product.id}`}
                value={variant.size}
                checked={selectedSize === variant.size}
                onChange={() => setSelectedSize(variant.size)}
              />
              <span className="size-option-button">
                {variant.size} - R${variant.price.toFixed(2)}
              </span>
            </label>
          ))}
        </div>
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Adicionar ao Carrinho
      </button>

      {/* Modal de imagem expandida */}
      {isExpanded && (
        <div className="image-modal" onClick={toggleExpand}>
          <div className="modal-content">
            <img
              src={product.image[currentImageIndex]}
              alt={`Zoom ${product.name}`}
              onClick={(e) => e.stopPropagation()}
            />
            {product.image.length > 1 && (
              <div className="modal-nav">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  &lt;
                </button>
                <span>
                  {currentImageIndex + 1}/{product.image.length}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  &gt;
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
