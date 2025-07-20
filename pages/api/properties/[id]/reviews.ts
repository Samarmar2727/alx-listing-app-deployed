

import type { NextApiRequest, NextApiResponse } from "next";

type Review = {
  id: string;
  comment: string;
};


const allReviews: Record<string, Review[]> = {
  "1": [
    { id: "r1", comment: "Amazing place!" },
    { id: "r2", comment: "Very clean and quiet." },
  ],
  "2": [
    { id: "r3", comment: "Peaceful getaway!" },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

if (typeof id === "string") {
  const reviews = allReviews[id];

  if (reviews) {
    res.status(200).json(reviews);
  } else {
    res.status(404).json({ message: "No reviews found for this property" });
  }
} else {
  res.status(400).json({ message: "Invalid property ID" });
}

}