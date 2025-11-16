"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";

export default function SearchPage(): React.JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query: string | null = searchParams.get("q");

  const updateSearch = (newQuery: string): void => {
    router.push(`/rwdSearch?q=${newQuery}`);
  };

  return (
    <div>
      <p>Searching for: {query}</p>
      <Button onClick={() => updateSearch("NextJS")}>Search NextJS</Button>
    </div>
  );
}
