import Image from "next/image";

const Advantage = () => {
  return (
    <div className="w-full flex flex-col  items-center">
      <h2 className="text-[40px] font-extrabold text-center text-red-800">
        VANTAGENS
      </h2>{" "}
      <p className="font-regular text-grey-text text-center">
        A otimização da estrutura de comunicação, garante uma melhor utilização
        de informações, fazendo com que sejam utilizadas de forma estratégica
        pelos gestores, trazendo assim, inúmeros benefícios para a empresa.
      </p>
      <ul className="w-full flex flex-row flex-wrap h-[300px] mt-[20px] items-center justify-center">
        <li>
          <div className="flex flex-col items-center w-[150px] h-[100px]">
            <div className="w-[80%] h-[50px] flex flex-col items-center">
              <h3 className="font-semibold text-center text-grey-text">
                Redução de Custos
              </h3>
            </div>
            <div className="w-full h-[60px] flex flex-col items-center">
              <Image
                src="saving_icon.svg"
                width={50}
                height={50}
                alt="saving money icon"
              />
            </div>
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center w-[150px]  h-[100px]">
            <div className="w-[80%] h-[50px] flex flex-col items-center">
              <h3 className="font-semibold text-center text-grey-text">
                Aumento do Desempenho
              </h3>
            </div>
            <div className="w-full h-[60px] flex flex-col items-center">
              <Image
                src="rocket_icon.svg"
                width={50}
                height={50}
                alt="rocket icon"
              />
            </div>
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center w-[150px] h-[100px]">
            <div className="w-[80%] h-[50px] flex flex-col items-center">
              <h3 className="font-semibold text-center text-grey-text">
                Controle e Agilidade
              </h3>
            </div>
            <div className="w-full h-[60px] flex flex-col items-center">
              <Image
                src="security_icon.svg"
                width={50}
                height={50}
                alt="security icon"
              />
            </div>
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center w-[150px] h-[100px]">
            <div className="w-[80%] h-[50px] flex flex-col items-center">
              <h3 className="font-semibold text-center text-grey-text">
                Segurança
              </h3>
            </div>
            <div className="w-full h-[60px] flex flex-col items-center">
              <Image
                src="fast_icon.svg"
                width={50}
                height={50}
                alt="fast icon"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Advantage;
