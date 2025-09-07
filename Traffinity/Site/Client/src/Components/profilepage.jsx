import  { useState } from "react";

const ProfilePage = () => {
  const [name, setName] = useState("Jassi");
  const [email, setEmail] = useState("jassie@example.com");
  const [bio, ] = useState("Hi, I’m Jassi! I love fitness and healthy living.");
  const [profilePic, setProfilePic] = useState(null);

  const [phone, setPhone] = useState("123-456-7890");
  const [address, setAddress] = useState("123 Healthy St, Fitness City, CA");

  const handleProfilePicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = URL.createObjectURL(e.target.files[0]);
      setProfilePic(file);
    }
  };

  

  const handleSave = () => {
    console.log("Profile updated:", { name, email, bio, phone, address });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center mt-16 mb-8"
      style={{
        
      }}
    >
      <div className="w-full sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12 p-8 bg-opacity-70 backdrop-blur-lg rounded-lg shadow-xl flex flex-col">

        <div className="relative flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 mb-6 mx-auto">
          <img
            src={profilePic || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-full h-full rounded-full object-cover shadow-lg"
          />
          <label
            htmlFor="profile-pic"
            className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full cursor-pointer transform translate-x-2 translate-y-2"
          >
            <input
              type="file"
              id="profile-pic"
              className="hidden"
              accept="image/*"
              onChange={handleProfilePicChange}
            />
            <i className="fas fa-camera text-xl">+</i>
          </label>
        </div>

        <div className="flex flex-col w-full mt-6">
          <h2 className="text-3xl text-gray-800 font-semibold">{name}</h2>
          <p className="text-lg text-gray-600 mb-6">{bio}</p>

          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-800">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 p-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-800">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 p-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-800">Phone Number</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2 p-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-gray-800">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-2 p-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your address"
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
