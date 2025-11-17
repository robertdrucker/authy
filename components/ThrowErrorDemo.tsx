"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ThrowErrorDemo() {
  const [shouldThrow, setShouldThrow] = useState(false);
  if (shouldThrow) {
    throw new Error("This is a test error!");
  }
  return (
    <Button
      variant="destructive"
      className={"mt-4"}
      onClick={() => setShouldThrow(true)}
    >
      Click to throw error
    </Button>
  );
}
