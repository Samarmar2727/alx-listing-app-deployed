const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-[#e0f2ff]">
      {/* Logo */}
      <div className="text-2xl font-bold text-sky-700 tracking-wide">
        StaySavvy
      </div>

      {/* Categories */}
      <nav className="space-x-6 hidden md:block">
        <a href="#" className="text-sky-800 hover:text-sky-600 transition duration-200">Rooms</a>
        <a href="#" className="text-sky-800 hover:text-sky-600 transition duration-200">Mansion</a>
        <a href="#" className="text-sky-800 hover:text-sky-600 transition duration-200">Countryside</a>
        <a href="#" className="text-sky-800 hover:text-sky-600 transition duration-200">Lakefront</a>
      </nav>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        {/* Search Placeholder */}
        <input
          type="text"
          placeholder="Search"
          className="hidden md:block border border-white/60 bg-white text-gray-700 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300 text-sm placeholder-gray-500 shadow-sm"
        />
        
        {/* Login/Logout Buttons */}
        <button className="text-sky-700 bg-white px-3 py-1 rounded-md hover:bg-sky-100 transition text-sm">
          Login
        </button>
        <button className="text-red-500 bg-white px-3 py-1 rounded-md hover:bg-red-100 transition text-sm">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
