import type { NextApiRequest, NextApiResponse } from "next";

type Property = {
  id: string;
  name: string;
  price: string;
  rating: number;
  image: string;
};

const properties: Property[] = [
  {
    id: "1",
    name: "Sea View Apartment",
    price: "$200/night",
    rating: 4.8,
    image: "/assets/images/home 1.jpeg",
  },
  {
    id: "2",
    name: "Mountain Retreat",
    price: "$150/night",
    rating: 4.5,
    image: "/assets/images/home 2.jpg",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Property | { message: string }>
) {
  const { id } = req.query;
  const property = properties.find((p) => p.id === id);

  if (property) {
    res.status(200).json(property);
  } else {
    res.status(404).json({ message: "Property not found" });
  }
}
