type Props = {
  property: {
    id: string;
    name: string;
    price: string;
    rating: number;
    image: string;
  };
};

export default function PropertyDetail({ property }: Props) {
  return (
    <div>
      <img src={property.image} alt={property.name} />
      <h2>{property.name}</h2>
      <p>{property.price}</p>
      <p>Rating: {property.rating}</p>
    </div>
  );
}
