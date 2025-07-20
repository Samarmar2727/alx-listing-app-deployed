const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-500 via-sky-400 to-blue-300 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">StaySavvy</h2>
          <p className="text-sm leading-relaxed">
            Book your next coastal escape with us — where sea breeze meets cozy stays.
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Follow us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline hover:text-yellow-100">Facebook</a></li>
            <li><a href="#" className="hover:underline hover:text-yellow-100">Instagram</a></li>
            <li><a href="#" className="hover:underline hover:text-yellow-100">TikTok</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline hover:text-yellow-100">Support</a></li>
            <li><a href="#" className="hover:underline hover:text-yellow-100">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline hover:text-yellow-100">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="text-center py-4 border-t border-white/30 text-xs bg-blue-600 bg-opacity-30">
        © {new Date().getFullYear()} StaySavvy. Dive into your perfect getaway 🌊
      </div>
    </footer>
  );
};

export default Footer;
