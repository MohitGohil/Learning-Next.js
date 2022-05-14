import Navbar from "./Navbar/Navbar.js";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>;
    </>
  );
};

export default Layout;
