import loading from "../../assets/loading.gif";

export const LazyLoading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-400 bg-opacity-75 z-50">
      <div className="border border-gray-300 shadow-xl rounded-lg p-4">
        <img src={loading} alt="Loading..." />
      </div>
    </div>
  );
};
