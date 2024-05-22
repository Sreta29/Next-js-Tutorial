import Link from "next/link";
import React from "react";

export default function mainmenuPage() {
  return (
    <>
      <h1>Main Menu Page</h1>
      <Link href={"/dashboard/info"}>Go to Info Page</Link>
      <br />
      <Link href={"/dashboard"}>Go to Dashboard Page</Link>
    </>
  );
}
