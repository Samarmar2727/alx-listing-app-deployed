import React from "react";
import Image from "next/image";

interface BookingDetails {
  propertyName: string;
  image?: string;
  startDate: string;
  totalNights: number;
  bookingFee: number;
  price: number;
}

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => {
  const {
    propertyName,
    image,
    startDate,
    totalNights,
    bookingFee,
    price,
  } = bookingDetails;

  const grandTotal = (bookingFee || 0) + (price || 0);

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Review Order Details</h2>

      <div className="flex items-center mt-4">
       <Image
            src={image || "/placeholder.png"}
            alt="Property"
            width={128}       
            height={128}
            className="rounded-md object-cover"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{propertyName || "Property Name"}</h3>
          <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
          <p className="text-sm text-gray-500">
            {startDate || "Start Date"} • {totalNights || 0} Nights
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between">
          <p>Booking Fee</p>
          <p>${bookingFee?.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Subtotal</p>
          <p>${price?.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mt-2 font-semibold">
          <p>Grand Total</p>
          <p>${grandTotal.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
