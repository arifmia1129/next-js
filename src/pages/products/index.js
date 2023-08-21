import { Button } from "antd";
import Link from "next/link";
import React from "react";

export default function Products() {
  return (
    <div>
      <h1>This is products page</h1>
      <Button type="default">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
