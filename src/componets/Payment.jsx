import React, { useState } from "react";
import { FaTimes, FaAirbnb } from "react-icons/fa"; 


// this is Payment component: Displays payment details in a sliding panel
const Payment = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState(0); // This state for (as 0 for Payment Lines, 1 for Workflow Logs)

  return (
    <>
      {/* its Sliding panel container */}
      <div
        className={`fixed top-0 right-0 h-full m-10 p-10 bottom-0 w-full max-w-lg bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* this Header section with title and close button */}
        <div className="flex justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Payment Details</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* this User information at section  Airbnb logo, email, and date */}
        <div className="flex items-center p-4 bg-slate-100 rounded-xl">
          <div className="flex-shrink-0 bg-red-500 rounded-full p-2">
            <FaAirbnb className="text-white" size={32} />
          </div>
          <div className="ml-4 flex">
            <div className="font-medium">airbnb1@propertymanager.com</div>
            <div className="text-sm text-gray-500 ml-12 mt-1">3 Jan 22</div>
          </div>
        </div>

        {/* Tab navigation section that payment and workflow */}
        <div className="flex border-b bg-slate-200 mt-3 rounded-lg">
  <button
    className={`flex-1 py-2 m-1 rounded-xl text-center font-semibold ${activeTab === 0 ? "border-b-2 bg-transparent" : "text-gray-500 bg-white"}`}
    onClick={() => setActiveTab(0)}
  >
    Payment Lines
  </button>
  <button
    className={`flex-1 py-2 m-1 rounded-xl text-center font-semibold ${activeTab === 1 ? "border-b-2 bg-transparent" : "text-gray-500 bg-white"}`}
    onClick={() => setActiveTab(1)}
  >
    Workflow Logs
  </button>
</div>



        {/* Content area that displays this Payment Lines or Workflow Logs based on active tab */}
        <div className="p-4 overflow-y-auto h-full">
          {activeTab === 0 ? (
            <div>
              {/* Payment Lines details on pages */}
              <div className="border-b mb-4 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <div className="font-semibold">John</div>
                    <div className="text-sm text-gray-500">
                      1 Jan 22 - 5 Jan 22 &nbsp; | &nbsp; 4 nights
                    </div>
                  </div>
                  <div className="text-blue-500 text-right">12345</div>
                </div>
                <div className="pl-4">
                  <div className="flex justify-between">
                    <span>Accommodation:</span>
                    <span>£1,000.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cleaning:</span>
                    <span>£100.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ota Fee:</span>
                    <span>-£50.00</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>£1,050.00</span>
                  </div>
                </div>
              </div>

              <div className="border-b mb-4 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <div className="font-semibold">Sarah</div>
                    <div className="text-sm text-gray-500">
                      3 Jan 22 - 7 Jan 22 &nbsp; | &nbsp; 4 nights
                    </div>
                  </div>
                  <div className="text-blue-500 text-right">67890</div>
                </div>
                <div className="pl-4">
                  <div className="flex justify-between">
                    <span>Accommodation:</span>
                    <span>£500.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cleaning:</span>
                    <span>£80.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ota Fee:</span>
                    <span>-£30.00</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>£550.00</span>
                  </div>
                </div>
              </div>
              <div className="text-right font-bold">Total: £1,600.00</div>
            </div>
          ) : (
            <div>
              {/* Workflow Logs details on page  */}
              <div className="border-b mb-4 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <div className="font-semibold">Step 1</div>
                    <div className="text-sm text-gray-500">
                      Completed by John on 3 Jan 22
                    </div>
                  </div>
                </div>
                <div className="pl-4">
                  <div>Description of workflow step 1.</div>
                </div>
              </div>
              <div className="border-b mb-4 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <div className="font-semibold">Step 2</div>
                    <div className="text-sm text-gray-500">
                      Completed by Sarah on 4 Jan 22
                    </div>
                  </div>
                </div>
                <div className="pl-4">
                  <div>Description of workflow step 2.</div>
                </div>
              </div>
              <div>
                <div className="font-semibold">Step 3</div>
                <div className="text-sm text-gray-500">Pending completion</div>
                <div className="pl-4">
                  <div>Description of workflow step 3.</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Payment;
