import { AiOutlineLogout } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const CustomHeader = ({ title }) => {
  const navigate = useNavigate();
  const { logout } = useAppContext()

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="flex justify-between bg-white items-center pb-2 py-8 px-6">
      <IoIosArrowBack onClick={() => navigate(-1)}  size={25}  className="text-gray-500 cursor-pointer"/>

      <h3 className="font-semibold">{title}</h3>

      <AiOutlineLogout
        onClick={handleLogout}
        size={22}
        className="text-rose-400 cursor-pointer"
      />
    </div>
  );
};

export default CustomHeader;
