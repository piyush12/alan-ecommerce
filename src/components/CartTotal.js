import formatCurrency from "../utils/FormatCurrency";

function CartTotal({ total }) {
  return (
    <div className="flex justify-between items-end border-t p-4">
      <span className="font-bold text-lg uppercase">Total</span>
      <span className="font-bold">{formatCurrency(total / 100)}</span>
    </div>
  );
}

export default CartTotal;
