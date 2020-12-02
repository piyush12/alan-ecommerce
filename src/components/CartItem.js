import formatCurrency from "../utils/FormatCurrency";

function CartItem({ item, removeFromCart }) {
  return (
    <div className="mb-6">
      <div className="block relative h-24 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block rounded"
          src={`https://dummyimage.com/210x130/${item.image}/${item.image}`}
        />
        <button
          data-remove-from-cart-button
          className="absolute top-0 right-0 bg-black rounded-tr text-white w-6 h-6 text-lg flex justify-center items-center"
          onClick={() => removeFromCart(item.id)}
        >
          &times;
        </button>
      </div>
      <div className="mt-2 flex justify-between">
        <div className="flex items-center title-font">
          <h2 className="text-gray-900 text-lg font-medium">{item.name}</h2>
          <span className="text-gray-600 text-sm font-bold ml-1">
            x{item.quantity}
          </span>
        </div>
        <div>{formatCurrency(item.price / 100)}</div>
      </div>
    </div>
  );
}
export default CartItem;
