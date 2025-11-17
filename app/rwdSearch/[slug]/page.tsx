import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Define valid slugs
const validSlugs = ["test1", "test2"]; // Add your valid routes here

// this function can be called anything you like
export default async function DynamicSearchPage({ params }: PageProps) {
  // Await the params promise
  const { slug } = await params;

  // If the slug is not in the valid list, show 404
  if (!validSlugs.includes(slug.toLowerCase())) {
    notFound();
  }

  return (
    <div>
      <h1>Valid Page: {slug}</h1>
      <p>This is a valid search page.</p>
    </div>
  );
}
