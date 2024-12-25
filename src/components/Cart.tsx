interface CartProps {
  cartItems: string[];
  onClear: () => void; // TODO: add props
}

const Cart = ({ cartItems, onClear }: CartProps) => {
  return (
    <div>
      <div>Cart</div>
      <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem}>{cartItem}</li>
        ))}
      </ul>
      <button onClick={onClear}>Clear</button>
    </div>
  );
};

export default Cart;
