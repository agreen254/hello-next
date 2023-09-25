import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "next/image"; // use this instead of the standard img ele
import therma from "@/public/images/thermae.jpeg";
import ProductCard from "./components/ProductCard";
import HeavyComponentWrapper from "./components/HeavyComponentWrapper";
import LodashLoader from "./components/LodashLoader";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="relative h-screen">
      <h1>Hello, {session && <span>{session.user!.name}</span>}</h1>
      <ProductCard />
      <HeavyComponentWrapper />
      <LodashLoader />
      <Image src={therma} alt="the baths" />
      <Image
        src="https://bit.ly/react-cover"
        alt="react course logo"
        width={300}
        height={170}
      />
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="filled react logo"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority={false}
      /> */}
    </main>
  );
}
