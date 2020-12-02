import StoreItem from "./StoreItem";
import storeItems from "../items.json";

function Store() {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {storeItems.map((product) => (
          <StoreItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Store;
