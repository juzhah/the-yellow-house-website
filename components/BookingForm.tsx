"use client";
import {
  AlertCircle,
  Check,
  CheckCircle,
  CreditCard,
  DollarSign,
  Link,
  Smartphone,
} from "lucide-react";
import { useState } from "react";

export default function BookingForm() {
  try {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      apartment: "",
      checkIn: "",
      checkOut: "",
      guests: "1",
      message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("");

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus("");

      try {
        // Create booking object
        const booking = await trickleCreateObject("booking", {
          ...formData,
          status: "pending",
          createdAt: new Date().toISOString(),
        });

        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          apartment: "",
          checkIn: "",
          checkOut: "",
          guests: "1",
          message: "",
        });

        // Send confirmation email (simulate)
        console.log("Booking created:", booking);
      } catch (error) {
        console.error("Booking submission error:", error);
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    };

    const isFormValid =
      formData.name &&
      formData.email &&
      formData.apartment &&
      formData.checkIn &&
      formData.checkOut;

    return (
      <section
        id="booking"
        className="bg-gray-50 section-padding"
        data-name="booking"
        data-file="components/BookingForm.js"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-dark)] mb-4">
              Book Your Stay
            </h2>
            <p className="text-xl text-[var(--text-light)]">
              Reserve your apartment directly - no booking fees, best rates
              guaranteed
            </p>
          </div>

          <div className="card p-8">
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className=" text-lg text-green-600" />
                  <p className="text-green-800 font-medium">
                    Booking request submitted successfully! We'll contact you
                    within 24 hours.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
                <div className="flex items-center space-x-2">
                  <AlertCircle className=" text-lg text-red-600" />
                  <p className="text-red-800 font-medium">
                    There was an error submitting your booking. Please try again
                    or contact us directly.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                    Apartment *
                  </label>
                  <select
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  >
                    <option value="">Select an apartment</option>
                    <option value="apartment-1">Apartment 1</option>
                    <option value="apartment-2">Apartment 2</option>
                    <option value="apartment-3">Apartment 3 (Loft)</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    required
                    min={
                      formData.checkIn || new Date().toISOString().split("T")[0]
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                  Special Requests or Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                  placeholder="Any special requests or questions?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-medium text-white transition-colors duration-200 ${
                  isFormValid && !isSubmitting
                    ? "bg-[var(--primary-color)] hover:bg-[var(--accent-color)]"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
              </button>

              <p className="text-sm text-[var(--text-light)] text-center mb-6">
                By submitting this form, you agree to our terms and conditions.
                We'll contact you within 24 hours to confirm your booking.
              </p>

              <div className="border-t pt-6">
                <p className="text-center text-sm font-medium text-[var(--text-dark)] mb-4">
                  We accept payments through:
                </p>
                <div className="flex justify-center items-center space-x-6 flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg">
                    <Smartphone className="text-lg text-[var(--primary-color)]"></Smartphone>
                    <span className="text-sm font-medium text-[var(--text-dark)]">
                      Yappy
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg">
                    <CreditCard className="text-lg text-blue-600"></CreditCard>
                    <span className="text-sm font-medium text-[var(--text-dark)]">
                      PayPal
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg">
                    <CreditCard className="text-lg text-green-600"></CreditCard>
                    <span className="text-sm font-medium text-[var(--text-dark)]">
                      Cards
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg">
                    <Link className="text-lg text-purple-600"></Link>
                    <span className="text-sm font-medium text-[var(--text-dark)]">
                      Payment Link
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg">
                    <DollarSign className="text-lg text-[var(--accent-color)]"></DollarSign>
                    <span className="text-sm font-medium text-[var(--text-dark)]">
                      Bank Transfer
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("BookingForm component error:", error);
    return null;
  }
}
