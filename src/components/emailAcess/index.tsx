import React, { useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { messageError, messageSuccess } from "../message";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFormData {
  email: string;
}

export const EmailAcess = () => {
  //const navigate = useNavigate();
  const navigation = useNavigate();

  const schema = yup.object({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
  });

  // const handleBack = () => {
  //   navigate(-1);
  // };

  const { watch, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const watchField = watch();

  const handleFormSubmit = (data: IFormData) => {
    api
      .post("order/authentication/acesskey/", data)
      .then((response) => {
        console.log("sucesso", response);

        messageSuccess("Código enviado com sucesso");
        navigation("/acessKey");
      })
      .catch((error) => {
        console.log("erro", error);

        messageError("Erro ao validar email");
        navigation("");
      })
      .finally(() => {
        console.log("Finalizado");
      });
  };

  useEffect(() => {
    console.log("watch", watchField);
  }, [watchField]);

  return (
    <div className="content-button">
      <button onClick={handleSubmit(handleFormSubmit)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <g clip-path="url(#clip0_3_88)">
            <path
              d="M7.39998 9.09014L6.75066 9.73946C6.64496 9.8462 6.50124 9.90608 6.35076 9.90608H5.51919V10.6288V10.6283C5.51919 10.8053 5.4489 10.9746 5.32394 11.0995C5.19897 11.2245 5.02922 11.2948 4.85269 11.2948H4.12995V12.1243C4.12943 12.2743 4.06955 12.418 3.96333 12.5242L3.50094 12.9866C3.40461 13.0787 3.27703 13.1308 3.14373 13.1319H1.30673C1.06408 13.1313 0.867771 12.9345 0.866731 12.6919V10.8554C0.868293 10.7169 0.922967 10.5846 1.02033 10.4857L4.91109 6.60026C4.45339 5.37973 4.58148 4.0165 5.25893 2.90278C5.93636 1.78951 7.08767 1.04858 8.38214 0.893416C9.67609 0.738761 10.97 1.18709 11.8911 2.10926C12.8143 3.03039 13.2637 4.32431 13.1091 5.61931C12.9544 6.91432 12.2134 8.06604 11.0992 8.7436C9.98485 9.42155 8.62058 9.54913 7.40008 9.09039L7.39998 9.09014ZM11.5135 2.48659C10.6955 1.66857 9.54264 1.27908 8.39599 1.4327C7.2494 1.5863 6.23973 2.2653 5.66601 3.2697C5.09167 4.27414 5.01877 5.48888 5.46866 6.55488C5.51032 6.65486 5.48793 6.76993 5.41086 6.84699L1.40146 10.8564V12.5986H3.13437L3.59676 12.1362C3.603 12.1295 3.60665 12.1211 3.60613 12.1123V11.1323C3.60613 10.922 3.77691 10.7512 3.98729 10.7512H4.86728C4.90061 10.7512 4.93289 10.7376 4.95684 10.7137C4.98027 10.6892 4.99329 10.6569 4.99381 10.6231V9.75245C4.99381 9.54209 5.1646 9.37129 5.37497 9.37129H6.3565C6.36535 9.37129 6.3742 9.36765 6.38045 9.36088L7.1537 8.58763H7.15318C7.23024 8.51109 7.34531 8.48818 7.44529 8.53035C8.51117 8.97868 9.72499 8.90526 10.7283 8.33144C11.7322 7.75763 12.4112 6.74904 12.5653 5.60293C12.7189 4.45685 12.3305 3.30519 11.5135 2.48659ZM9.74459 5.58995C9.20566 5.58995 8.71933 5.26503 8.51313 4.76672C8.30692 4.26892 8.42096 3.6951 8.80212 3.31401C9.18328 2.93292 9.75657 2.81883 10.2548 3.02502C10.7526 3.23174 11.0775 3.71755 11.0775 4.257C11.0775 4.61003 10.9369 4.94954 10.687 5.19947C10.4371 5.44941 10.0981 5.58995 9.74459 5.58995ZM9.74459 3.46755C9.42123 3.46755 9.12964 3.66228 9.00571 3.96117C8.88178 4.26006 8.95052 4.60424 9.17911 4.83283C9.40769 5.06141 9.75188 5.13016 10.0508 5.00623C10.3497 4.8823 10.5444 4.59071 10.5444 4.26735C10.5449 4.05489 10.4606 3.8513 10.3106 3.70082C10.1606 3.55086 9.95704 3.46599 9.74459 3.46599V3.46755Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_3_88">
              <rect
                width="13.33"
                height="13.33"
                fill="white"
                transform="matrix(-1 0 0 1 13.665 0.334999)"
              />
            </clipPath>
          </defs>
        </svg>
        CHAVE DE ACESSO POR E-MAIL
      </button>
    </div>
  );
};
