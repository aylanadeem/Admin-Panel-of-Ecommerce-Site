import { useState, useEffect, useRef } from "react";  
import { useNavigate } from "react-router-dom";  

function ProductData({ images, name, productId, description, price, onDelete, index, onEdit }) {  
  const [isDropdownVisible, setDropdownVisible] = useState(false);  
  const dropdownRef = useRef(null);  
  const buttonRef = useRef(null);  
  const navigate = useNavigate();  

  const toggleDropdown = () => {  
    setDropdownVisible(!isDropdownVisible);  
  };  

  const handleClickOutside = (event) => {  
    if (  
      dropdownRef.current &&  
      !dropdownRef.current.contains(event.target) &&  
      buttonRef.current &&  
      !buttonRef.current.contains(event.target)  
    ) {  
      setDropdownVisible(false);  
    }  
  };  

  useEffect(() => {  
    document.addEventListener("click", handleClickOutside);  

    return () => {  
      document.removeEventListener("click", handleClickOutside);  
    };  
  }, []);  

  const handleDelete = () => {  
    onDelete(index);  
  };  

  const handleEdit = () => {  
    onEdit({ images, name, productId, description, price, index });  
  };  

  const handleImageClick = (image) => {  
    console.log("Image clicked", image);  
    navigate("/product-details", { state: { images, name, productId, description, price } });  
  };  

  return (  
    <div className="grid grid-cols-6 gap-x-4 mt-3 bg-[#F9FAFB] text-[#6B7280] h-20 items-center px-6">  
      <div className="flex space-x-1 ">  
        {images.map((image, idx) => (  
          <img  
            key={idx}  
            src={image}  
            alt={`${name} image ${idx + 1}`}  
            onClick={() => handleImageClick(image)}  
            className="w-12 h-12 object-cover rounded-md cursor-pointer"  
          />  
        ))}  
      </div>  
      <div className="truncate ml-3">{name}</div>  
      <div className="truncate ml-3">{productId}</div>  
      <div className="truncate ml-3">{description}</div>  
      <div className="truncate ml-7">${price}</div>  
      <div className="relative ml-10">  
        <button  
          onClick={toggleDropdown}  
          ref={buttonRef}  
          className="text-gray-600 hover:text-gray-800"  
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

        {isDropdownVisible && (  
          <div  
            ref={dropdownRef}  
            className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md text-sm z-50"  
          >  
            <button  
              onClick={handleEdit}  
              className="w-full text-left px-4 py-2 hover:bg-gray-100"  
            >  
              Edit  
            </button>  
            <button  
              onClick={handleDelete}  
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"  
            >  
              Delete  
            </button>  
          </div>  
        )}  
      </div>  
    </div>  
  );  
}  

export default function Products() {  
  const [products, setProducts] = useState([  
    {  
      images: ["/pics/motor.svg", "/pics/motor.svg", "/pics/motor.svg"],  
      name: "Laptop",  
      productId: "LPT12345",  
      description: "High-performance laptop with 16GB RAM.",  
      price: 1200,  
    },  
    {  
      images: ["/pics/motor.svg", "/pics/motor.svg", "/pics/motor.svg"],  
      name: "Smartphone",  
      productId: "SPH67890",  
      description: "Latest smartphone with advanced features.",  
      price: 800,  
    },  
  ]);  

  const [alert, setAlert] = useState(null);  
  const [modalData, setModalData] = useState(null);  

  const handleDelete = (index) => {  
    const updatedProducts = [...products];  
    updatedProducts.splice(index, 1);  
    setProducts(updatedProducts);  
    setAlert("Product deleted successfully!");  
    setTimeout(() => setAlert(null), 3000);  
  };  

  const handleEdit = (product) => {  
    setModalData(product);  
  };  

  const handleModalClose = () => {  
    setModalData(null);  
  };  

  const handleModalSave = (updatedProduct) => {  
    const updatedProducts = [...products];  
    updatedProducts[updatedProduct.index] = updatedProduct;  
    setProducts(updatedProducts);  
    setModalData(null);  
  };  

  const handleImageChange = (imageIndex, e) => {  
    const file = e.target.files[0];  
    if (file) {  
      const reader = new FileReader();  
      reader.onloadend = () => {  
        setModalData((prevModalData) => {  
          const updatedImages = [...prevModalData.images];  
          updatedImages[imageIndex] = reader.result;  
          return { ...prevModalData, images: updatedImages };  
        });  
      };  
      reader.readAsDataURL(file);  
    }  
  };  

  return (  
    <div className="min-h-screen bg-white pl-10 pt-5">  
      {alert && (  
        <div className="bg-green-500 text-white p-3 rounded-md mb-4 mr-10">  
          {alert}  
        </div>  
      )}  
      <h1 className="font-bold text-xl">Products</h1>  

      <div className="grid grid-cols-6 gap-x-14 bg-[#F9FAFB] font-semibold text-[#0b0b0b] h-12 items-center px-6 mt-3">  
        <p className="truncate">Image</p>  
        <p className="truncate ">Product Name</p>  
        <p className="truncate">Product ID</p>  
        <p className="truncate">Description</p>  
        <p className="truncate">Price</p>  
        <p className="truncate">Actions</p>  
      </div>  

      {products.map((product, index) => (  
        <ProductData  
          key={index}  
          images={product.images}  
          name={product.name}  
          productId={product.productId}  
          description={product.description}  
          price={product.price}  
          onDelete={handleDelete}  
          index={index}  
          onEdit={handleEdit}  
        />  
      ))}  

      {modalData && (  
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">  
          <div className="bg-white max-h-[450px] overflow-y-auto p-6 rounded-md w-96">  
            <h2 className="font-semibold text-xl mb-4">Edit Product</h2>  

            <div className="mb-3 flex space-x-2">  
              {modalData.images.map((image, idx) => (  
                <div key={idx} className="relative">  
                  <img  
                    src={image}  
                    alt={`Current Image ${idx + 1}`}  
                    className="w-20 h-20 object-cover rounded-md mb-3"  
                  />  
                  <label className="absolute top-0 right-0 bg-gray-300 px-2 py-1 text-xs rounded-md cursor-pointer">  
                    Change  
                    <input  
                      type="file"  
                      onChange={(e) => handleImageChange(idx, e)}  
                      className="hidden"  
                    />  
                  </label>  
                </div>  
              ))}  
            </div>  

            <div className="mb-3">  
              <label className="block">Product Name</label>  
              <input  
                type="text"  
                value={modalData.name}  
                onChange={(e) => setModalData({ ...modalData, name: e.target.value })}  
                className="border p-2 w-full"  
              />  
            </div>  
            <div className="mb-3">  
              <label className="block">Product ID</label>  
              <input  
                type="text"  
                value={modalData.productId}  
                onChange={(e) => setModalData({ ...modalData, productId: e.target.value })}  
                className="border p-2 w-full"  
              />  
            </div>  
            <div className="mb-3">  
              <label className="block">Description</label>  
              <textarea  
                value={modalData.description}  
                onChange={(e) => setModalData({ ...modalData, description: e.target.value })}  
                className="border p-2 w-full"  
              />  
            </div>  
            <div className="mb-3">  
              <label className="block">Price</label>  
              <input  
                type="number"  
                value={modalData.price}  
                onChange={(e) => setModalData({ ...modalData, price: e.target.value })}  
                className="border p-2 w-full"  
              />  
            </div>  

            <div className="flex justify-between mt-4">  
              <button  
                onClick={handleModalClose}  
                className="bg-gray-300 text-black p-2 rounded-md"  
              >  
                Cancel  
              </button>  
              <button  
                onClick={() => handleModalSave(modalData)}  
                className="bg-blue-500 text-white p-2 rounded-md"  
              >  
                Save Changes  
              </button>  
            </div>  
          </div>  
        </div>  
      )}  
    </div>  
  );  
}