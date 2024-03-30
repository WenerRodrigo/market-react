export const TopHeader = () => {
  return (
    <div className="flex justify-center items-center w-full ">
      <div className="flex items-center justify-center bg-primary w-full sm:h-10 py-2">
        <span className="text-center text-white text-md">
          <strong className="text-yellow-400"></strong>Use o cupom{" "}
          <span className="bg-red-400 px-2 py-1 rounded-md">BEMVINDO</span> e
          ganhe <strong className="text-yellow-400">R$ 10,00</strong> de desconto em sua primeira compra
        </span>
      </div>
    </div>
  );
};
