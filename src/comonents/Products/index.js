import Allproduct from "../Allproduct";
import Cildernprops from "../Cildernprops";
import PrimeUser from "../PrimeUser";
import { CiCircleCheck } from "react-icons/ci";
let Products = () => {
  return (
    <div>
      <PrimeUser />
      <Allproduct />
      <Cildernprops>childrenprops </Cildernprops>
      <Cildernprops>
        able to call multiple time <CiCircleCheck />{" "}
      </Cildernprops>
      <Cildernprops>able to call multiple time </Cildernprops>
      <Cildernprops>
        able to use <CiCircleCheck />{" "}
      </Cildernprops>
    </div>
  );
};
export default Products;
