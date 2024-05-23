import Link from "next/link";
import NavComponent from "&/navigation";

export default function Home() {
  return (
    <>
      <div className="bg-green-400 h-32">
        <h1 className="text-5xl text-purple-700">This is Home Page</h1>
        <Link href={"/mainmenu"}>Go to Main Menu</Link>
      </div>
      <div className="bg-white">
        <h1 className="text-5xl text-purple-700">This is Home Page</h1>
        <Link href={"/mainmenu"}>Go to Main Menu</Link>
      </div>
      <NavComponent />
      <NavComponent />
      <NavComponent />
      <NavComponent />
      <NavComponent />
      <NavComponent />
      <NavComponent />
    </>
  );
}
