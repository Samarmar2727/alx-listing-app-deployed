


const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold text-indigo-600">
        StaySavvy
      </div>

      {/* Categories */}
      <nav className="space-x-6 hidden md:block">
        <a href="#" className="text-gray-600 hover:text-indigo-600">Rooms</a>
        <a href="#" className="text-gray-600 hover:text-indigo-600">Mansion</a>
        <a href="#" className="text-gray-600 hover:text-indigo-600">Countryside</a>
        <a href="#" className="text-gray-600 hover:text-indigo-600">Lakefront</a>
      </nav>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Search Placeholder */}
        <input
          type="text"
          placeholder="Search"
          className="hidden md:block border px-3 py-1 rounded-md focus:outline-none"
        />
        
        {/* Login/Logout Buttons */}
        <button className="text-indigo-600 hover:underline">Login</button>
        <button className="text-red-500 hover:underline">Logout</button>
      </div>
    </header>
  );
};

export default Header;
