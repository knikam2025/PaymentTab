import Payment from "./componets/Payment";
import { useState } from "react";


const App = () => {
  
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded-lg"
        onClick={() => setSidebarOpen(true)}
      >
        Open Payment Details
      </button>
      <Payment
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </div>
  );
};

export default App;
