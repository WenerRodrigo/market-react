const Footer = () => {
  const anoAtual = new Date().getFullYear();
  const description = "Wener Rodrigo";
  const mensagemDireitosAutorais = `© ${description} ${anoAtual} - Todos os direitos reservados.`;

  return (
    <div className="flex items-center justify-center bg-primary h-12">
      <p className="text-center text-md text-white">
        {mensagemDireitosAutorais}
      </p>
    </div>
  );
};

export default Footer;
