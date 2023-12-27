import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";


const RestaurantBrand = ({ name, logo, variant }) => {

  return (
    <>
      <Link 
        className="restaurant-brand w-fit flex items-center gap-3" 
        component={RouterLink}
        variant={variant} 
        to="/" 
        fontSize="2rem"
      >
        <img
          className="max-w-[2.1rem] h-auto"
          src={logo}
          alt="Restaurant-Brand-Logo-Image"
        />
        {name}
      </Link>
    </>
  );
}

export default RestaurantBrand;