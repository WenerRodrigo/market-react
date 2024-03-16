// import { signInWithPopup } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { auth, provider } from "../../services/firebaseConfig";

export const GoogleKey = () => {
//   const navigate = useNavigate();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const [value, setValue] = useState("");

//   const handleClick = () => {
//     signInWithPopup(auth, provider)
//       .then((data) => {
//         setValue(data?.user?.email || "");
//         localStorage.setItem("email", data?.user?.email || "");
//         handleSuccessLogin();
//       })
//       .catch((error) => {
//         console.error("Erro ao fazer login com o Google:", error);
//       });
//   };

//   const handleSuccessLogin = () => {
//     navigate("/home");
//   };

//   useEffect(() => {
//     setValue(localStorage.getItem("email") || "");
//   }, []);

  return (
    <div className="flex justify-center items-center w-full h-full mt-2">
      <button 
        // onClick={handleClick}
        className="flex items-center justify-center bg-tertiary hover:bg-gray-200 transition px-5 py-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M19.7617 10.1871C19.7617 9.3677 19.6952 8.76977 19.5513 8.14969H10.1947V11.848H15.6868C15.5762 12.7671 14.9782 14.1512 13.6494 15.0813L13.6308 15.2051L16.5892 17.4969L16.7942 17.5174C18.6765 15.7789 19.7617 13.2211 19.7617 10.1871Z"
            fill="#4285F4"
          />
          <path
            d="M10.1947 19.9313C12.8854 19.9313 15.1442 19.0454 16.7941 17.5174L13.6494 15.0813C12.8079 15.6682 11.6784 16.0779 10.1947 16.0779C7.55932 16.0779 5.3226 14.3395 4.52527 11.9366L4.4084 11.9466L1.33222 14.3273L1.29199 14.4391C2.93077 17.6945 6.29695 19.9313 10.1947 19.9313Z"
            fill="#34A853"
          />
          <path
            d="M4.52526 11.9366C4.31488 11.3166 4.19313 10.6521 4.19313 9.96565C4.19313 9.27908 4.31488 8.61473 4.51419 7.99466L4.50862 7.8626L1.39389 5.44366L1.29198 5.49214C0.616561 6.84305 0.229004 8.36008 0.229004 9.96565C0.229004 11.5712 0.616561 13.0882 1.29198 14.4391L4.52526 11.9366Z"
            fill="#FBBC05"
          />
          <path
            d="M10.1947 3.85336C12.066 3.85336 13.3283 4.66168 14.048 5.33718L16.8605 2.59107C15.1332 0.985496 12.8854 0 10.1947 0C6.29695 0 2.93077 2.23672 1.29199 5.49214L4.51421 7.99466C5.3226 5.59183 7.55932 3.85336 10.1947 3.85336Z"
            fill="#EB4335"
          />
        </svg>
        <span className="text-sm text-gray-800 px-2">
          CONTINUAR COM O GOOGLE
        </span>
      </button>
    </div>
  );
};
