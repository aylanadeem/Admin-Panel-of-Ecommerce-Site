import { Edit2, MapPin } from 'react-feather'; 
import Flag from 'react-world-flags'; 
import { useState } from 'react';  

export default function User() {  
  const [image, setImage] = useState("public/pics/profile.svg");  
  const [phoneNumber, setPhoneNumber] = useState(""); 
  const [countryCode, setCountryCode] = useState("US");  
  const [showCountryCodeMenu, setShowCountryCodeMenu] = useState(false); 
 
  const handleImageChange = (e) => {  
    const file = e.target.files[0];  
    if (file) {  
      const reader = new FileReader();  
      reader.onload = () => {  
        setImage(reader.result); 
      };  
      reader.readAsDataURL(file);  
    }  
  };  

  const handlePhoneNumberChange = (e) => {  
    setPhoneNumber(e.target.value);  
  };  

  const handleCountryCodeChange = (newCountryCode) => {  
    setCountryCode(newCountryCode); 
    setPhoneNumber("");  
    setShowCountryCodeMenu(false);   
  };  

  const toggleCountryCodeMenu = () => {  
    setShowCountryCodeMenu(!showCountryCodeMenu);  
  };  

  return (  
    <div className="min-h-screen bg-white pl-10 pt-5 ">  
      <img src="public/pics/title.svg" className="w-28" alt="Title" />  

      <div className="relative w-28 h-28 mx-auto">  
        <img  
          src={image}  
          alt="Profile"  
          className="w-full h-full rounded-full object-cover border-2 border-gray-300"  
        />  

        <label  
          htmlFor="imageUpload"  
          className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow cursor-pointer hover:bg-gray-200 transition"  
        >  
          <Edit2 className="text-orange-950" size={18} />  
        </label>  

        <input  
          id="imageUpload"  
          type="file"  
          accept="image/*"  
          onChange={handleImageChange}  
          className="hidden"  
        />  
      </div>  

      <div className="flex space-x-4 mt-5 justify-center -ml-10 ">  
        <input  
          id="firstName"  
          type="text"  
          placeholder="First name"  
          className="p-3 border-2 w-[450px] rounded-lg focus:outline-none focus:ring-0 focus:border-orange-500"  
        />  

        <input  
          id="lastName"  
          type="text"  
          placeholder="Last name"  
          className="p-3 border-2 w-[470px] rounded-lg focus:outline-none focus:ring-0 focus:border-orange-500"  
        />  
      </div>  

      <div className="flex space-x-4 mt-5 justify-center -ml-10 ">  
        <input  
          id="username"  
          type="text"  
          placeholder="Username"  
          className="p-3 border-2 w-[937px] rounded-lg focus:outline-none focus:ring-0 focus:border-orange-500"  
        />  
      </div>  

      <div className="flex space-x-4 mt-5 justify-center -ml-10 relative">  
        <input  
          placeholder="Date Of Birth"  
          id="dob"  
          type="date"  
          className="p-3 border-2 w-[937px] rounded-lg focus:outline-none focus:ring-0 focus:border-orange-500"  
        />  
      </div>  

      <div className="flex space-x-4 mt-5 justify-center -ml-10 relative">  
        <input  
          id="address"  
          type="text"  
          placeholder="Address"  
          className="p-3 border-2 w-[937px] rounded-lg focus:outline-none focus:ring-0 focus:border-orange-500 pr-10" 
        />  
        <MapPin  
          size={18}  
          className="absolute right-11 top-1/2 transform -translate-y-1/2 text-gray-500"  
        />  
      </div>  
      <div className="flex space-x-4 mt-5 justify-center -ml-10 relative">  
        <div className="flex w-[937px] relative">  
          <div className="relative flex items-center mr-4 w-24">  
            <div  
              className="p-3 border-2 rounded-lg focus:outline-none focus:ring-0 focus:border-orange-500 pr-12 w-full cursor-pointer"  
              onClick={toggleCountryCodeMenu}  
            >  
              <div className="flex items-center justify-between">  
                <div className="flex items-center">  
                  <Flag code={countryCode} className="w-5 h-5 mr-2" />  
                  <span>{`+${countryCode}`}</span>  
                </div>  
              </div>  
            </div>  

            {showCountryCodeMenu && (  
              <div className="absolute bottom-full left-0 bg-white border rounded-lg shadow-md z-10 w-[250px] mb-2 max-h-[200px] overflow-auto">  
                <ul className="list-none p-0 m-0">  
                  <li  
                    className="p-3 hover:bg-gray-100 cursor-pointer"  
                    onClick={() => handleCountryCodeChange("PK")}  
                  >  
                    <div className="flex items-center">  
                      <Flag code="PK" className="w-5 h-5 mr-2" />  
                      <span>+92 (Pakistan)</span>  
                    </div>  
                  </li>  
                  <li  
                    className="p-3 hover:bg-gray-100 cursor-pointer"  
                    onClick={() => handleCountryCodeChange("CA")}  
                  >  
                    <div className="flex items-center">  
                      <Flag code="CA" className="w-5 h-5 mr-2" />  
                      <span>+1 (Canada)</span>  
                    </div>  
                  </li>  
                  <li  
                    className="p-3 hover:bg-gray-100 cursor-pointer"  
                    onClick={() => handleCountryCodeChange("AU")}  
                  >  
                    <div className="flex items-center">  
                      <Flag code="AU" className="w-5 h-5 mr-2" />  
                      <span>+61 (Australia)</span>  
                    </div>  
                  </li>  
                  <li  
                    className="p-3 hover:bg-gray-100 cursor-pointer"  
                    onClick={() => handleCountryCodeChange("DE")}  
                  >  
                    <div className="flex items-center">  
                      <Flag code="DE" className="w-5 h-5 mr-2" />  
                      <span>+49 (Germany)</span>  
                    </div>  
                  </li>  
                  <li  
                    className="p-3 hover:bg-gray-100 cursor-pointer"  
                    onClick={() => handleCountryCodeChange("FR")}  
                  >  
                    <div className="flex items-center">  
                      <Flag code="FR" className="w-5 h-5 mr-2" />  
                      <span>+33 (France)</span>  
                    </div>  
                  </li>  
                  <li  
                    className="p-3 hover:bg-gray-100 cursor-pointer"  
                    onClick={() => handleCountryCodeChange("JP")}  
                  >  
                    <div className="flex items-center">  
                      <Flag code="JP" className="w-5 h-5 mr-2" />  
                      <span>+81 (Japan)</span>  
                    </div>  
                  </li>  
                </ul>  
              </div>  
            )}  
          </div>  

          <input  
            type="tel"  
            id="phone"  
            placeholder="Phone Number"  
            value={phoneNumber}  
            onChange={handlePhoneNumberChange}  
            className="p-3 border-2 rounded-lg w-full focus:outline-none focus:ring-0 focus:border-orange-500"  
          />  
        </div>  
      </div> 
      <div className='flex justify-center mt-10 pb-10'>
      <img src="public/pics/continuebtn.svg" alt="" />

      </div>
      </div>  
  );  
}
