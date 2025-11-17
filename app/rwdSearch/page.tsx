"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import ThrowErrorDemo from "@/components/ThrowErrorDemo";

export default function SearchPage(): React.JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query: string | null = searchParams.get("q");

  // Trigger notFound if query parameter is missing
  useEffect(() => {
    if (!query) {
      notFound();
    }
  }, [query]);

  // Show a loading/placeholder while notFound is being triggered
  if (!query) {
    return <div></div>; // Return empty div instead of null
  }

  const updateSearch = (newQuery: string): void => {
    router.push(`/rwdSearch?q=${newQuery}`);
  };

  return (
    <div>
      <p>Searching for: {query}</p>
      <Button className={"mt-4"} onClick={() => updateSearch("NextJS")}>
        Search NextJS
      </Button>
      <div>
        <ThrowErrorDemo />
      </div>
    </div>
  );
}
