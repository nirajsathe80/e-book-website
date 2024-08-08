import CardList from "@/components/card-list";
import Loader from "@/components/common/loader";
import Banner from "@/components/home-banner";
import { Suspense } from "react";

export default async function Home() {
  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=24"
  );
  if (!response.ok) {
    throw new Error("Error fetching");
  }
  const data = await response.json();

  return (
    <div className="max-w-6xl m-auto">
      <Banner />
      <Suspense fallback={<Loader />}>
        <CardList books={data?.items} />
      </Suspense>
    </div>
  );
}
