import Link from "next/link";
import React from "react";

function dashboardPage() {
  return (
    <>
      <h1>Dashboard Page</h1>
      <Link href={"/mainmenu"}>Return to Main Menu Page</Link>
      <Link href={"/mainmenu/settings"}>Return to Settings Page</Link>
    </>
  );
}

export default dashboardPage;
