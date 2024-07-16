import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <MoonLoader color="#03d4ff" size={50} />
    </div>
  );
};

export default Loading;