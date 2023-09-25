import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import ProductCard from "./components/ProductCard";
import HeavyComponentWrapper from "./components/HeavyComponentWrapper";
import LodashLoader from "./components/LodashLoader";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello, {session && <span>{session.user!.name}</span>}</h1>
      <ProductCard />
      <HeavyComponentWrapper />
      <LodashLoader />
    </main>
  );
}
