const Services = () => {
  return (
    <div className="flex flex-col w-full bg-white justify-center p-[30px]">
      <h2 className="text-[30px] font-extrabold text-center text-red-800">
        {" "}
        NOSSOS SERVIÇOS{" "}
      </h2>
      <p className="font-regular text-grey-text text-center">
        {" "}
        Equipe especializada em soluções de telefonia, integrando soluções que
        otimizam a estrutura existente e gerando reduções de custo.{" "}
      </p>

      <ul className="p-[20px] flex flex-col items-center gap-[20px]">
        <li className="flex flex-col items-center">
          <div className="bg-light-pink-bg rounded-xl p-[20px] flex flex-col justify-center w-[80px]">
            <img src="icon_headphone.svg" width={50} height={50} />
          </div>

          <p className="font-semibold mt-[10px]"> Telefonia </p>
          <p className="font-regular text-grey-text">
            {" "}
            Solução completa de telefonia, com integração a sistemas de gestão,
            gerando informações sobre a utilização dos recursos de telefonia e
            agilidade na implantação.{" "}
          </p>
        </li>
        <li className="flex flex-col items-center">
          <div className="bg-light-blue-bg rounded-xl p-[20px] flex flex-col justify-center w-[80px]">
            <img src="videocall_icon.svg" width={50} height={50} />
          </div>

          <p className="font-semibold mt-[10px]"> Videoconferência </p>
          <p className="font-regular text-grey-text">
            {" "}
            Permite não só a comunicação pessoa-a-pessoa, mas também em grupo. É
            uma solução que reduz custos e agiliza esses processos, permitindo o
            contato visual e sonoro entre pessoas que estão em lugares
            diferentes.{" "}
          </p>
        </li>
        <li className="flex flex-col items-center">
          <div className="bg-light-purple-bg rounded-xl p-[20px] flex flex-col justify-center w-[80px]">
            <img src="icon_iot.svg" width={50} height={50} />
          </div>

          <p className="font-semibold mt-[10px]"> IoT - Internet das Coisas</p>
          <p className="font-regular text-grey-text">
            {" "}
            Monitore sistemas remotamente, gerando um cronograma de manutenções,
            histórico de consumo e correções de falhas.{" "}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Services;
