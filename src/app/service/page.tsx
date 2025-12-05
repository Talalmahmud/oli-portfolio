import React from "react";
import PageWrapper from "../../components/PageWrapper";

const page = () => {
  return (
    <div className=" w-full">
      <PageWrapper>
        <div className="flex flex-col items-center justify-center gap-10 py-10 px-4">
          <h2 className="text-4xl font-semibold text-white mb-10">
            My Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: eCommerce Site Development */}
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">
                eCommerce Site Development
              </h3>
              <p className="text-gray-300">
                I specialize in building fully functional and responsive
                eCommerce websites tailored to your business needs, using the
                latest technologies.
              </p>
            </div>

            {/* Card 2: Business Planning */}
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Business Planning</h3>
              <p className="text-gray-300">
                Offering comprehensive business planning services to ensure your
                eCommerce venture has a clear and effective strategy for
                success.
              </p>
            </div>

            {/* Card 3: Business Statistics */}
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Business Statistics</h3>
              <p className="text-gray-300">
                Analyze and interpret data to optimize business processes,
                improve sales, and increase profitability through accurate
                statistics.
              </p>
            </div>

            {/* Card 4: Education Website */}
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Education Website</h3>
              <p className="text-gray-300">
                Design and develop modern education platforms that support
                e-learning, virtual classrooms, and student management systems.
              </p>
            </div>

            {/* Card 5: Restaurant Website */}
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Restaurant Website</h3>
              <p className="text-gray-300">
                Build visually appealing and user-friendly restaurant websites,
                including menu displays, online reservations, and ordering
                systems.
              </p>
            </div>

            {/* Card 6: Consultant Website */}
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Consultant Website</h3>
              <p className="text-gray-300">
                Create professional consultant websites tailored to your
                services, featuring appointment booking and client portfolio
                management.
              </p>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default page;
