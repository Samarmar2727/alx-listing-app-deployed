// components/BookingForm.tsx
import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings`,
        formData
      );
      if (response.status === 200 || response.status === 201) {
        setSuccess(true);
      } else {
        throw new Error("Unexpected response");
      }
    } catch (err) {
      setError("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded shadow space-y-4"
    >
      <h2 className="text-xl font-semibold">Booking Form</h2>

      {[
        { name: "firstName", label: "First Name" },
        { name: "lastName", label: "Last Name" },
        { name: "email", label: "Email", type: "email" },
        { name: "phoneNumber", label: "Phone Number" },
        { name: "cardNumber", label: "Card Number" },
        { name: "expirationDate", label: "Expiration Date" },
        { name: "cvv", label: "CVV" },
        { name: "billingAddress", label: "Billing Address" },
      ].map((field) => (
        <div key={field.name}>
          <label className="block mb-1 font-medium">
            {field.label}
          </label>
          <input
            type={field.type || "text"}
            name={field.name}
            value={formData[field.name as keyof typeof formData]}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
      ))}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {success && (
        <p className="text-green-600 text-sm mt-2">
          Booking confirmed successfully!
        </p>
      )}
    </form>
  );
}
