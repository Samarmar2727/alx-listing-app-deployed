
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(

req: NextApiRequest,
res: NextApiResponse
)  {
    const properties = [
         {
      id: "1",
      name: "Sea View Apartment",
      price: "$200/night",
      rating: 4.8,
      image: "/assets/images/home 1.jpeg"
    },
    {
      id: "2",
      name: "Mountain Retreat",
      price: "$150/night",
      rating: 4.5,
      image:  "/assets/images/home 2.jpg"
    },
    ]

    res.status(200).json(properties)

}




