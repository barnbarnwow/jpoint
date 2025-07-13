export default function Navbar() {
  return (
    <nav className="p-9">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">JPOINT</div>
        <ul className="flex text-xl space-x-9">
          <li>
            <a href="/" className="hover:text-teal-500">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-teal-500">
              Projects
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-teal-500">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-teal-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
