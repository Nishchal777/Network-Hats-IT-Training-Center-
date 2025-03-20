import React from "react";

function WhyChooseUs() {
  return (
    <div className=" px-4 lg:px-24 py-4">
      <div className="pt-8 mb-5 text-black capitalize font-bold text-4xl border-b-4 border-blue-500 inline-block pb-2">
        Why Choose Us
      </div>
      <div className="flex flex-col lg:flex-row gap-10  p-6 rounded-md ">
        <div className="flex flex-col gap-4 text-lg">
          <p>
            At <span className="font-semibold">Network Hats</span>, we
            understand that you have many options when it comes to IT solutions
            and training. So, why should you choose us?
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              From project delivery and ongoing support, we ensure reliable,
              high-quality products and services you can trust.
            </li>
            <li>
              We believe that quality services should be accessible to everyone.
              So we offer competitive pricing without compromising on quality.
            </li>
            <li>
              We aim to surpass expectations with excellent service, timely
              communication, and personalized attention for your satisfaction.
            </li>
            <li>
              We take the time to understand your unique needs and challenges
              and tailor our solutions to meet your specific requirements.
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
          <img
            src="https://networkhats.com.np/img/about-1.jpg"
            className="w-full max-w-md lg:max-w-[500px] rounded-lg shadow-md"
            alt="Why Choose Us"
          />
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
