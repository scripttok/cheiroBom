import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const phoneNumber = "5511976488741";

  // Criar a lista formatada dos itens
  const itemsList = cartItems
    .map((item) => `- ${item.name} - R$ ${item.price.toFixed(2)}`)
    .join("\n");

  // Montar a mensagem completa com a lista e o total
  const message = `Olá !! Estou interessado nesses produtos, pode me ajudar a finalizar esta compra?\n\n${itemsList}\n\nTotal: R$ ${total.toFixed(
    2
  )}`;

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="cart">
      <h2>Carrinho</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - R$ {item.price.toFixed(2)}
            <button onClick={() => removeFromCart(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <h3>Total: R$ {total.toFixed(2)}</h3>
      {cartItems.length > 0 && (
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          Finalizar compra no WhatsApp
        </a>
      )}
    </div>
  );
};

export default Cart;
