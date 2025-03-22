import { useState } from "react";

function UserData({ firstName, lastName, username, dob, address, email, phone, users, setUsers, index, setAlertMessage }) {
  const [showActions, setShowActions] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    firstName,
    lastName,
    username,
    dob,
    address,
    email,
    phone,
  });

  const handleDelete = () => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    setAlertMessage(`${firstName} ${lastName} has been deleted.`);
  };

  return (
    <div>
      <div className="grid grid-cols-8 gap-x-8 mt-3 bg-[#F9FAFB] text-[#6B7280] h-12 items-center px-6 border-b relative">
        <div className="truncate">{firstName}</div>
        <div className="truncate">{lastName}</div>
        <div className="truncate">{username}</div>
        <div className="truncate">{dob}</div>
        <div className="truncate">{address}</div>
        <div className="truncate">{email}</div>
        <div className="truncate">{phone}</div>

        <div className="relative ml-3">
          <button
            onClick={() => setShowActions(!showActions)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
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

          {showActions && (
            <div
              className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg border z-50"
              onMouseLeave={() => setShowActions(false)}
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

      {/* Modal */}
      {isModalOpen && (  
  <div className="fixed inset-0 z-50  flex items-center justify-center bg-black bg-opacity-50">  
    <div className="bg-white p-6 rounded-md w-96 max-h-[80vh] overflow-y-auto ">  
      <h2 className="text-xl font-semibold mb-4">Edit User</h2>  
      <form>  
        <div className="mb-3">  
          <label className="block text-sm font-medium text-gray-700">First Name</label>  
          <input  
            type="text"  
            value={modalData.firstName}  
            onChange={(e) => setModalData({ ...modalData, firstName: e.target.value })}  
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"  
          />  
        </div>  
        <div className="mb-3">  
          <label className="block text-sm font-medium text-gray-700">Last Name</label>  
          <input  
            type="text"  
            value={modalData.lastName}  
            onChange={(e) => setModalData({ ...modalData, lastName: e.target.value })}  
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"  
          />  
        </div>  
        <div className="mb-3">  
          <label className="block text-sm font-medium text-gray-700">Username</label>  
          <input  
            type="text"  
            value={modalData.username}  
            onChange={(e) => setModalData({ ...modalData, username: e.target.value })}  
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"  
          />  
        </div>  
        <div className="mb-3">  
          <label className="block text-sm font-medium text-gray-700">Date of Birth</label>  
          <input  
            type="text"  
            value={modalData.dob}  
            onChange={(e) => setModalData({ ...modalData, dob: e.target.value })}  
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"  
          />  
        </div>  
        <div className="mb-3">  
          <label className="block text-sm font-medium text-gray-700">Address</label>  
          <input  
            type="text"  
            value={modalData.address}  
            onChange={(e) => setModalData({ ...modalData, address: e.target.value })}  
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"  
          />  
        </div>  
        <div className="mb-3">  
          <label className="block text-sm font-medium text-gray-700">Email</label>  
          <input  
            type="email"  
            value={modalData.email}  
            onChange={(e) => setModalData({ ...modalData, email: e.target.value })}  
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"  
          />  
        </div>  
        <div className="mb-3">  
          <label className="block text-sm font-medium text-gray-700">Phone</label>  
          <input  
            type="tel"  
            value={modalData.phone}  
            onChange={(e) => setModalData({ ...modalData, phone: e.target.value })}  
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
      const updatedUsers = users.map((user, i) =>  
        i === index ? { ...modalData } : user  
      );  
      setUsers(updatedUsers);  
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

export default function User() {
  const [users, setUsers] = useState([
    {
      firstName: "John",
      lastName: "Doe",
      username: "johndoe123",
      dob: "1990-01-01",
      address: "123 Main Street, Springfield",
      email: "johndoe@example.com",
      phone: "+1 123-456-7890",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      username: "janesmith456",
      dob: "1992-02-02",
      address: "456 Elm Street, Riverside",
      email: "janesmith@example.com",
      phone: "+1 987-654-3210",
    },
    {
      firstName: "Alice",
      lastName: "Johnson",
      username: "alicejohnson789",
      dob: "1988-03-03",
      address: "789 Oak Street, Willowtown",
      email: "alicejohnson@example.com",
      phone: "+1 555-666-7777",
    },
    {
      firstName: "Bob",
      lastName: "Brown",
      username: "bobbrown101",
      dob: "1985-04-04",
      address: "101 Pine Street, Maplewood",
      email: "bobbrown@example.com",
      phone: "+1 444-333-2222",
    },
    {
      firstName: "Emma",
      lastName: "Williams",
      username: "emmawilliams567",
      dob: "1995-05-05",
      address: "567 Birch Street, Cedarville",
      email: "emmawilliams@example.com",
      phone: "+1 222-111-0000",
    },
  ]);

  const [alertMessage, setAlertMessage] = useState("");

  if (alertMessage) {
    setTimeout(() => setAlertMessage(""), 3000);
  }

  return (
    <div className="min-h-screen bg-white pl-10 pt-5">
      <h1 className="font-bold text-xl mb-4">User Data</h1>

      {alertMessage && (
        <div className="bg-green-500 text-white p-3 rounded-md mb-4 mr-10">
          {alertMessage}
        </div>
      )}

      <div>
        <div className="grid grid-cols-8 gap-x-8 bg-[#F9FAFB] font-semibold text-[#0b0b0b] h-12 items-center px-6">
          <p className="truncate">First Name</p>
          <p className="truncate">Last Name</p>
          <p className="truncate">Username</p>
          <p className="truncate">Date of Birth</p>
          <p className="truncate">Address</p>
          <p className="truncate">Email</p>
          <p className="truncate">Phone Number</p>
          <p className="truncate">Actions</p>
        </div>

        {users.map((user, index) => (
          <UserData
            key={index}
            firstName={user.firstName}
            lastName={user.lastName}
            username={user.username}
            dob={user.dob}
            address={user.address}
            email={user.email}
            phone={user.phone}
            users={users}
            setUsers={setUsers}
            index={index}
            setAlertMessage={setAlertMessage}
          />
        ))}
      </div>
    </div>
  );
}
