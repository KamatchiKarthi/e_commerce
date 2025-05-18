import React from "react";

const Cartmodel = ({
  cart,
  cartclose,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) => {
  const totalprice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed w-100 h-120 bg-white top-0 right-0 shadow-lg p-4 overflow-y-scroll">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>

      {cart.length === 0 ? (
        <p
          className="flex justify-center text-2xl font-bold text-red-500 mt-20
 "
        >
          Your cart is Empty
        </p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20  object-contain
"
                  />
                  <h5 className="flex justify-between text-base font-medium text-gray-900">
                    {item.title}
                  </h5>
                </div>
                <div className="flex gap-4 items-center">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="text-2xl bg-gray-800 cursor-pointer text-white p-1 rounded flex items-center gap-4
 "
                  >
                    -
                  </button>
                  <span
                    className="text-gray-600 text-lg
 "
                  >
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="text-2xl bg-gray-800 cursor-pointer text-white p-1 rounded flex items-center
"
                  >
                    +
                  </button>
                  <div
                    onClick={() => removeItem(item.id)}
                    className="text-2xl bg-red-500 cursor-pointer text-white p-1 rounded flex items-center gap-4"
                  >
                    <img
                      src="https://img.icons8.com/ios-filled/50/ffffff/trash.png"
                      alt="trash"
                      className="w-8 h-8"
                    />{" "}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3
            className="text-2xl mt-5 text-zinc-500

 "
          >
            Total Price: ${totalprice}
          </h3>
          <button
            onClick={cartclose}
            className="bg-gray-800 cursor-pointer text-white p-2 rounded flex items-centerm mt-5 gap-4"
          >
            close
          </button>
        </div>
      )}
    </div>
  );
};

export default Cartmodel;
