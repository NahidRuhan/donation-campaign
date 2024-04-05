import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <div className="flex justify-between items-center max-w-5xl mx-auto my-7">

          <div>
            <img src='/Logo.png' alt="" />
          </div>


        <div className="flex gap-5 md:gap-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/donation">Donation</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
        </div>

      </div>
    </>
  );
};

export default Navbar;
