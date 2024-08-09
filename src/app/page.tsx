import CardList from "@/components/card-list";
import Loader from "@/components/common/loader";
import Banner from "@/components/home-banner";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="max-w-6xl m-auto w-[95vw]">
      <Banner />
      <Suspense fallback={<Loader />}>
        {/* @ts-expect-error Server Component */}
        <CardList />
      </Suspense>
    </div>
  );
}
