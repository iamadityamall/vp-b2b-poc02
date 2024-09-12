import React, { useState } from "react";

const TellUsYourRequirement = () => {
  const [isBuying, setIsBuying] = useState(true); // default is set to buying

  return (
    <div className="p-4 bg-red-950 rounded-md flex items-center px-32 py-32 space-x-5">
      <div className="w-4/5 space-y-5">
        <h2 className="text-white text-5xl font-bold">
          Tell Us Your Requirement
        </h2>
        <p className="text-white text-xl text-center">
          Best Rates | Working Capital | Delivery Anywhere
        </p>
      </div>

      <div className="bg-white mt-4 p-6 rounded-md shadow-md w-4/5">
        {/* Buy/Sell Toggle */}
        <div className="flex items-center mb-4">
          <label
            className={`flex items-center cursor-pointer mr-4 text-[1.5rem] ${
              isBuying ? "text-green-600" : "text-gray-400"
            }`}
          >
            <input
              type="radio"
              name="type"
              checked={isBuying}
              onChange={() => setIsBuying(true)}
              className="mr-2"
            />
            Buy
          </label>
          <label
            className={`flex items-center cursor-pointer text-[1.5rem] ${
              !isBuying ? "text-red-600" : "text-gray-400"
            }`}
          >
            <input
              type="radio"
              name="type"
              checked={!isBuying}
              onChange={() => setIsBuying(false)}
              className="mr-2"
            />
            Sell
          </label>
        </div>

        {/* Form */}
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <label>Enter Product</label>
              <select className="w-full p-2 border rounded-md">
                <option>Select Product</option>
                {/* Add more options here */}
              </select>
            </div>

            <div className="col-span-1">
              <label>Quantity</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="Quantity"
              />
            </div>

            <div className="col-span-1">
              <label>Company</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="Enter company"
              />
            </div>

            {/* Additional field for Sell option */}
            {!isBuying && (
              <div className="col-span-1">
                <label>Company GST</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="Company GST"
                />
              </div>
            )}

            <div className="col-span-1">
              <label>Pincode</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="Enter Pincode"
              />
            </div>

            <div className="col-span-1">
              <label>Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md"
                placeholder="Enter Email"
              />
            </div>

            <div className="col-span-1">
              <label>Mobile Number</label>
              <div className="flex">
                <select className="border p-2 rounded-l-md">
                  <option>IN +91</option>
                  {/* Add more country codes */}
                </select>
                <input
                  type="text"
                  className="w-full p-2 border rounded-r-md"
                  placeholder="Enter mobile"
                />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="bg-orange-500 text-white p-3 rounded-md w-full"
            >
              Submit your quotation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TellUsYourRequirement;
