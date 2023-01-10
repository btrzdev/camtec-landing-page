import Image from "next/image";
const Hero = () => {
  return (
    <div className="w-full lg:h-[600px] h-[800px] bg-white flex">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[50%] lg:p-[30px]">
          <div>
            <h2 className="text-[20px] text-left p-[10px] text-red-dark-text font-semibold">
              A PRODUTIVIDADE ESTÁ EM CASA.
            </h2>
          </div>

          <p className="text-[30px] p-[20px] text-red-500 font-extrabold text-left leading-8">
            CAM BOX VIRTUAL PARA HOME OFFICE.
          </p>
          <p className="text-[20px] p-[30px] text-red-dark-text font-semibold text-left">
            A Cam Tecnologia tem a melhor solução para manter a alta
            produtividade de sua empresa no período de Home Office: é CAM
            VIRTUAL PARA HOME OFFICE.
          </p>
        </div>
        <div className="lg:p-[30px]">
          <Image
            className="rounded-md"
            src="/cam-header.png"
            width={800}
            height={800}
            alt="picture_landingpage"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
