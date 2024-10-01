import { useParams } from "react-router-dom";
import Productdetaildata from "../Productdetaildata";

let Productdetail = () => {
  const params = useParams();
  return <Productdetaildata id={params.id} />;
};
export default Productdetail;
