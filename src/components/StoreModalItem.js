import { IMG_URL } from "../utils/Constants";
import formatCurrency from "../utils/FormatCurrency";
import ratingsFunc from "../utils/StarRating";
import useCart from "../hooks/useCart.js";

function StoreModalItem({ item, onSubmit }) {
  const { addToCart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputElemArray = [...e.target.elements];
    const formData = {};
    inputElemArray.forEach((inp) => {
      if (inp.name) {
        formData[inp.name] = inp.value;
      }
    });
    const newItem = {
      id: item.id,
      name: item.name,
      quantity: formData.quantity,
      price: item.priceCents,
      image: item.imageColor,
    };
    addToCart(newItem);
    onSubmit();
  };

  return (
    <section className="text-gray-700 body-font overflow-hidden">
      <div className="container px-4 py-4 mx-auto">
        <div className="mx-auto flex items-center">
          <img
            alt="ecommerce"
            className="object-cover object-center rounded"
            src={`${IMG_URL}${item.imageColor}/${item.imageColor}`}
          />
          <div className="pl-8 py-2">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {item.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {item.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {ratingsFunc(item.ratings).map((r, i) => {
                  if (r === "*") {
                    return (
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-yellow-600"
                        viewBox="0 0 24 24"
                        key={i}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    );
                  }
                  return (
                    <svg
                      fill="white"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-yellow-600"
                      viewBox="0 0 24 24"
                      key={i}
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  );
                })}

                <span className="text-gray-600 ml-3">
                  {item.ratings} Reviews
                </span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                <a href="facebook.com" className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a href="twitter.com" className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed max-w-lg">{item.description}</p>
            <div className="flex mt-4">
              <span className="title-font font-medium text-2xl text-gray-900">
                {formatCurrency(item.priceCents / 100)}
              </span>
              <form
                onSubmit={handleSubmit}
                className="flex items-center ml-auto"
              >
                <input
                  type="number"
                  defaultValue="1"
                  min="1"
                  max="99"
                  step="1"
                  required
                  className="leading-normal w-16 flex-1 border h-10 border-purple-500 rounded rounded-r-none px-3 relative"
                  name="quantity"
                />
                <button
                  type="submit"
                  className="flex text-white bg-purple-500 rounded-l-none border-0 py-2 px-3 focus:outline-none hover:bg-purple-600 rounded"
                >
                  Add To Cart
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoreModalItem;
