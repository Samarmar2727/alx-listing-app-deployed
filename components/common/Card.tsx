import {CardProps} from "../../interfaces"

const Card = ({ image, name, price, rating }: CardProps) => {
    return (
          <div className="border rounded-lg overflow-hidden shadow-md p-4 w-full max-w-sm">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-700">Price: ${price} / night</p>
      <p className="text-yellow-600">Rating: ⭐ {rating}</p>
    </div>
    );

};

export default Card
