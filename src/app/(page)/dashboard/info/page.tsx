import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <h1>Info Page</h1>
      <Link href={"/mainmenu"}>Return to Main Menu Page</Link>
    </>
  );
}

export default page;
