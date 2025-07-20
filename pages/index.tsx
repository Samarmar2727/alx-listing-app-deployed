import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/common/Card";

type Property = {
  id: string;
  name: string;
  price: string;
  rating: number;
  image: string;
};

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/properties`);
        setProperties(response.data);
      } catch (err) {
        setError("Failed to load properties");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p className="text-center mt-10 text-white">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div
      className="min-h-screen bg-cover bg-center px-8 py-12"
      style={{ backgroundImage: "url('/assets/images/hero.jpg')" }}
    >

     <div className="text-center text-white mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to StaySavvy</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Discover unique places to stay from cozy homes to luxury getaways. Your perfect trip starts here with StayNest – where comfort meets adventure.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Card
            key={property.id}
            image={property.image || "/assets/images/hero.jpg"} // fallback
            name={property.name}
            price={property.price}
            rating={property.rating}
          />
        ))}
      </div>
    </div>
  );
}
