import {CardProps} from "../../interfaces"

const Card = ({ image, name, price, rating }: CardProps) => {
   return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm mx-auto">
      <img
        src={image}
        alt={name}
        className="w-full h-52 object-cover"
      />
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600">💰 <span className="font-medium">${price}</span> / night</p>
        <p className="text-yellow-500">⭐ {rating} / 5</p>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Book Now
        </button>
      </div>
    </div>
  );

};

export default Card


