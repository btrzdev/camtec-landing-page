import Image from "next/image";
const menuItems = [
  { id: 1, label: "SOBRE A CAM" },
  { id: 2, label: "PRODUTOS" },
  { id: 3, label: "SERVIÇOS" },
  { id: 4, label: "SOLUÇÕES" },
  { id: 5, label: "SUPORTE TÉCNICO" },
  { id: 6, label: "BLOG" },
  { id: 7, label: "CONTATO" },
];
const Header = () => {
  return (
    <div className="w-full h-[100px] flex flex-row gap-[20px] items-center bg-gradient-to-r from-red-background to-pink-background ">
      <h1 className="ml-[40px] font-extrabold text-white text-[40px]">
        {" "}
        Camtec
      </h1>
      <ul className="flex lg:flex-row gap-[10px] text-[12px] font-semibold text-white">
        {menuItems.map((menuItem) => {
          return <li key={menuItem.id}> {menuItem.label} </li>;
        })}
      </ul>
      <button className="w-[200px] rounded-sm  hover:text-[17px] hover:brightness-95 hover:duration-150  font-extrabold item-center bg-pink-buttom-color text-pink-background">
        ENVIAR MENSAGEM
      </button>
    </div>
  );
};

export default Header;
