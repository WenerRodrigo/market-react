import { useState } from "react";
import GoogleLogin from "react-google-login";

export const GoogleKey = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  /* eslint-disable  @typescript-eslint/no-explicit-any */

  const responseGoogle = (response: any) => {
    if (response && response.profileObj) {
      const { name, email, imageUrl } = response.profileObj;
      setName(name);
      setEmail(email);
      setProfilePic(imageUrl);
      setIsLoggedIn(true);
    } else {
      console.error("Resposta do Google Login incompleta ou ausente");
    }
  };
  
  return (
    <div className="flex justify-center items-center w-full h-full mt-2 px-3">
      <GoogleLogin
        className="w-full rounded-sm"
        clientId="499605995174-8coubjqujkpcgv5cu8sj7rke4gq4ursp.apps.googleusercontent.com"
        buttonText="Entrar com Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      {isLoggedIn ? (
        <div>
          <img src={profilePic} alt="Profile" />
          <p>Nome - {name}</p>
          <p>Email - {email}</p>
        </div>
      ) : null}
    </div>
  );
};
