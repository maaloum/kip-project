import { Product } from '../../types/product';

interface CardProps {
  product: Product;
  index: number;
}

function Card({ product, index }: CardProps) {
  return (
    <div
      key={index}
      className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
    >
      <a href="#">
        <img
          src={product.image}
          alt="Product"
          className="h-80 w-72 object-cover rounded-t-xl"
        />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Bank</span>
          <p className="text-lg font-bold text-black truncate block capitalize">
            {product.name}
          </p>
          <div className="flex items-center">
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-black cursor-auto my-2 text-red ">
                Available amount : ${product.amount}
              </p>
              <p className="text-lg font-semibold text-black cursor-auto my-2 text-red">
                Price : ${product.price}
              </p>
            </div>
            <div className="ml-auto"></div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
