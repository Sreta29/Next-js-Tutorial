import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to Home Page</h1>
      <Link href={"/mainmenu"}>Go to Main Menu</Link>
    </>
  );
}
