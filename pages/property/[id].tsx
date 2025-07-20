import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail"

type Property = {
  id: string;
  name: string;
  price: string;
  rating: number;
  image: string;
};

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`/api/properties/${id}`)
      .then((res) => setProperty(res.data))
      .catch(() => setError("Property not found"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!property) return <p>Property not found</p>;

  return <PropertyDetail property={property} />;
}
