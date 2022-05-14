import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex bg-gray-700 p-4 justify-center">
      <div className="flex text-white items-center justify-center">
        <div className="mx-9 text-3xl">
          <Link href="/">Home</Link>
        </div>
        <div className="mx-9 text-3xl">
          <Link href="/about">About</Link>
        </div>
        <div className="mx-9 text-3xl">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
