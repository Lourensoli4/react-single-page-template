import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>

      <div className="flex flex-row justify-between">
        <Link to="">Home</Link>
        <div className="flex flex-row space-x-10 mr-10">
          <div>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <Link to="/other">Other</Link>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Navigation;
