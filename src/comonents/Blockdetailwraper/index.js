import { useParams } from "react-router-dom";
import BlockItemDetails from "../BlockItemDetails";

let Blockdetailwraper = () => {
  const params = useParams();
  return <BlockItemDetails id={params.id} />;
};
export default Blockdetailwraper;
