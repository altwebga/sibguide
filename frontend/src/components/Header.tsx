import Image from "next/image";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="h-16 bg-gray-100 shadow-sm">
      <div className="container flex flex-row justify-between m-auto h-full items-center">
        <div className="bg-white">СИБГИД</div>
        <div className="">
            <Menu/>
        </div>
        <button className="">Добавить объявление</button>
      </div>
    </header>
  );
}
