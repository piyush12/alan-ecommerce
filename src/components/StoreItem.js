import { IMG_URL } from "../utils/Constants";
import formatCurrency from "../utils/FormatCurrency";
import { memo, useState } from "react";
import { Modal, ModalButton, ModalContent } from "./Modal";
import StoreModalItem from "./StoreModalItem";

function StoreItem({ product }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="lg:w-1/4 md:w-1/2 p-4 w-full "
      style={{
        background: "rgb(255 255 255)",
      }}
    >
      <div className="shadow-lg border rounded-lg p-3">
        <div className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={`${IMG_URL}${product.imageColor}`}
          />
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <h3 className="text-gray-500 text-xs tracking-widest title-font uppercase mb-1">
              {product.category}
            </h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">
              {product.name}
            </h2>
            <p className="mt-1">{formatCurrency(product.priceCents / 100)}</p>
          </div>
          <Modal onHide={isOpen}>
            <ModalButton>
              <button
                className="text-white py-2 px-4 text-sm bg-pink-600 rounded hover:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Details
              </button>
            </ModalButton>
            <ModalContent aria-label="product details">
              <StoreModalItem item={product} onSubmit={() => setIsOpen(true)} />
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  );
}
// eslint-disable-next-line no-func-assign
StoreItem = memo(StoreItem);

export default StoreItem;
