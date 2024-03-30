
export const FacebookKey = () => {
  return (
    <div className="flex justify-center items-center w-full h-full mt-2">
      <button
        type="button"
        className="flex items-center justify-center bg-tertiary hover:bg-gray-200 transition px-4 py-2 rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M19.3962 20.0001C20.0057 20.0001 20.5 19.5059 20.5 18.8962V1.10383C20.5 0.494141 20.0057 0 19.3962 0H1.60383C0.994062 0 0.5 0.494141 0.5 1.10383V18.8962C0.5 19.5059 0.994062 20.0001 1.60383 20.0001H19.3962Z"
            fill="#395185"
          />
          <path
            d="M14.2997 20.0001V12.255H16.8994L17.2886 9.23664H14.2997V7.30946C14.2997 6.43555 14.5424 5.84 15.7956 5.84L17.3939 5.8393V3.13969C17.1174 3.10289 16.1686 3.02071 15.0649 3.02071C12.7604 3.02071 11.1827 4.42735 11.1827 7.01063V9.23664H8.57629V12.255H11.1827V20.0001H14.2997Z"
            fill="white"
          />
        </svg>
        <span className="text-sm text-gray-800 px-2">
          CONTINUAR COM FACEBOOK
        </span>
      </button>
    </div>
  );
};
