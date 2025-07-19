

export interface CardProps {
  image: string;
  name: string;
  price: string;
  rating: number;
}

export interface ButtonProps {
  // Add more props later
  label: string;
  onClick: () => void;
} 

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

 export interface PillProps {
  label: string;
}
