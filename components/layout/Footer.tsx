const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10 border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Logo and Description */}
        <div>
          <h2 className="text-xl font-bold text-indigo-600 mb-2">StaySavvy</h2>
          <p className="text-sm">Your trusted destination for unique stays and memorable experiences.</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-2">Follow us</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-indigo-600">Facebook</a></li>
            <li><a href="#" className="hover:text-indigo-600">Twitter</a></li>
            <li><a href="#" className="hover:text-indigo-600">Instagram</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-indigo-600">Support</a></li>
            <li><a href="#" className="hover:text-indigo-600">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-indigo-600">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center py-4 text-sm border-t border-gray-200">
        © {new Date().getFullYear()} StaySavvy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
