import clsx from "clsx";
import Image from "next/image";

const servicesDetails = [
  {
    id: 1,
    label: "Telefonia",
    imageSrc: "icon_headphone.svg",
    alt: "telefonia_icon",
    description:
      "Solução completa de telefonia, com integração a sistemas de gestão, gerando informações sobre a utilização dos recursos de telefonia e agilidade na implantação.",
  },
  {
    id: 2,
    label: "Videoconferência",
    imageSrc: "videocall_icon.svg",
    alt: "videoconferencia_icon",
    description:
      "Permite não só a comunicação pessoa-a-pessoa, mas também em grupo. É uma solução que reduz custos e agiliza esses processos, permitindo o contato visual e sonoro entre pessoas que estão em lugares diferentes.",
  },
  {
    id: 3,
    label: "IoT - Internet das Coisas",
    imageSrc: "icon_iot.svg",
    alt: "internet_coisas_icon",
    description:
      "Monitore sistemas remotamente, gerando um cronograma de manutenções, histórico de consumo e correções de falhas.",
  },
];

const Services = () => {
  return (
    <div className="flex flex-col w-full bg-white justify-center p-[30px] lg:px-[80px]">
      <h2 className="text-[30px] font-extrabold text-center text-red-800">
        {" "}
        NOSSOS SERVIÇOS{" "}
      </h2>
      <p className="font-regular text-grey-text text-center">
        {" "}
        Equipe especializada em soluções de telefonia, integrando soluções que
        otimizam a estrutura existente e gerando reduções de custo.{" "}
      </p>

      <ul className="p-[20px] w-full flex flex-col lg:flex-row lg:justify-evenly items-center gap-[20px]">
        {servicesDetails.map((service) => {
          return (
            <li key={service.id} className="flex flex-col items-center">
              <div className="w-[200px] flex flex-col justify-center items-center">
                <div
                  className={` ${
                    service.label === "Telefonia"
                      ? "bg-light-pink-bg"
                      : service.label === "Videoconferência"
                      ? "bg-light-blue-bg"
                      : "bg-light-purple-bg"
                  } rounded-xl p-[20px] flex flex-col justify-center items-center w-[80px] lg:w-[200px] h-[200px]`}
                >
                  <Image
                    src={service.imageSrc}
                    width={100}
                    height={50}
                    alt={service.alt}
                  />
                </div>
                <div className="w-[200px] h-[300px] lg:w-[250px]">
                  <p className="font-semibold mt-[10px] lg:text-center">
                    {" "}
                    {service.label}{" "}
                  </p>
                  <p className="font-regular text-grey-text lg:text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Services;
