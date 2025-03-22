import { useState, useEffect, useRef } from "react";

function BusinessData({
  name,
  address,
  email,
  phone,
  businesses,
  setBusinesses,
  index,
  setAlertMessage,
  dropdownIndex,
  setDropdownIndex,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ name, address, email, phone });
  
  const dropdownRef = useRef(null); 
  const buttonRef = useRef(null); 

  const handleDelete = () => {
    const updatedBusinesses = businesses.filter((_, i) => i !== index);
    setBusinesses(updatedBusinesses);
    setAlertMessage(`${name} has been deleted.`);
  };

  const toggleDropdown = () => {
 
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownIndex(null); 
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="grid grid-cols-5 gap-x-8 mt-3 bg-[#F9FAFB] text-[#6B7280] h-12 items-center px-6 border-b relative">
        <div className="truncate">{name}</div>
        <div className="truncate">{address}</div>
        <div className="truncate">{email}</div>
        <div className="truncate">{phone}</div>
        <div className="relative">
          <button
            ref={buttonRef} 
            onClick={toggleDropdown}
            className="text-gray-600 hover:text-gray-800 focus:outline-none ml-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="6" r="1" />
              <circle cx="12" cy="18" r="1" />
            </svg>
          </button>

          {dropdownIndex === index && (
            <div
              ref={dropdownRef} 
              className="absolute right-10  w-24 bg-white rounded-md shadow-lg border z-50"
            >
              <button
                className="block w-full text-left px-4 py-2 text-sm text-[#374151] hover:bg-gray-100"
                onClick={() => setIsModalOpen(true)}
              >
                Edit
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-[#B91C1C] hover:bg-gray-100"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Business</h2>
            <form>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  Business Name
                </label>
                <input
                  type="text"
                  value={modalData.name}
                  onChange={(e) =>
                    setModalData({ ...modalData, name: e.target.value })
                  }
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  value={modalData.address}
                  onChange={(e) =>
                    setModalData({ ...modalData, address: e.target.value })
                  }
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={modalData.email}
                  onChange={(e) =>
                    setModalData({ ...modalData, email: e.target.value })
                  }
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={modalData.phone}
                  onChange={(e) =>
                    setModalData({ ...modalData, phone: e.target.value })
                  }
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const updatedBusinesses = businesses.map((business, i) =>
                      i === index ? { ...modalData } : business
                    );
                    setBusinesses(updatedBusinesses);
                    setIsModalOpen(false);
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Profile() {
  const [businesses, setBusinesses] = useState([
    {
      name: "ABC Corp.",
      address: "123 Business Ave, Cityville",
      email: "contact@abccorp.com",
      phone: "+1 123-456-7890",
    },
    {
      name: "XYZ Ltd.",
      address: "456 Enterprise Rd, Townsville",
      email: "info@xyzltd.com",
      phone: "+1 987-654-3210",
    },
    {
      name: "Tech Innovators",
      address: "789 Innovation Blvd, Silicon Valley",
      email: "support@techinnovators.com",
      phone: "+1 555-666-7777",
    },
  ]);

  const [alertMessage, setAlertMessage] = useState("");
  const [dropdownIndex, setDropdownIndex] = useState(null);

  if (alertMessage) {
    setTimeout(() => setAlertMessage(""), 3000);
  }

  return (
    <div className="min-h-screen bg-white pl-10 pt-5">
      <h1 className="font-bold text-xl mb-4">Businesses</h1>

      {alertMessage && (
        <div className="bg-green-500 text-white p-3 rounded-md mb-4 mr-10">
          {alertMessage}
        </div>
      )}

      <div className="grid grid-cols-5 gap-x-8 bg-[#F9FAFB] font-semibold text-[#0b0b0b] h-12 items-center px-6">
        <p className="truncate">Business Name</p>
        <p className="truncate">Address</p>
        <p className="truncate">Email</p>
        <p className="truncate">Phone Number</p>
        <p className="truncate">Actions</p>
      </div>

      {businesses.map((business, index) => (
        <BusinessData
          key={index}
          name={business.name}
          address={business.address}
          email={business.email}
          phone={business.phone}
          businesses={businesses}
          setBusinesses={setBusinesses}
          index={index}
          setAlertMessage={setAlertMessage}
          dropdownIndex={dropdownIndex}
          setDropdownIndex={setDropdownIndex}
        />
      ))}
    </div>
  );
}
