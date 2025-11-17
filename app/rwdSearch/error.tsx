"use client";

export default function CoursesError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Oops! Something went wrong in rwdSearch.</h2>
      <pre>{error.message}</pre>
      <div></div>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
