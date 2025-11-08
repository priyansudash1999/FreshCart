import { useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const {url} = useContext(StoreContext)
  const navigate = useNavigate()

  const verifyPayment = async() => {
    const res = await axios.post(url + "/api/order/verify", {success, orderId})
    if(res.data.success){
      navigate("/myorders")
    }
    else{
      navigate("/")
    }
  }

  useEffect(() => {
    verifyPayment()
  }, [])

  return (
    <div className="min-h-[60vh] grid">
      <div className="w-[100px] h-[100px] place-self-center border-4 border-[#bdbdbd] border-t-orange-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Verify