import { ThreeDots } from "react-loader-spinner";

function Loader({ color }) {
  return (
    <div className="flex justify-center items-center">
      <ThreeDots color={color} width={50} height={50} />
    </div>
  );
}

export default Loader;
