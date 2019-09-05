import { useState, useEffect } from "react";
import Link from "next/link";

interface Props {}

function Header() {
  return (
    <>
      <Link
        href="/?section=economie-politiek&id=1235"
        as="/economie-politiek/1235"
      >
        <a>index</a>
      </Link>
      <Link href="/DataPage">
        <a>datapage</a>
      </Link>
    </>
  );
}

export { Header };
