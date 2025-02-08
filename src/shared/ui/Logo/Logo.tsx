import { Link } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export const Logo = () => {
  return (
    <Link to={RoutePath.main} className="text-4xl font-extrabold">
      Seminars
    </Link>
  );
};
