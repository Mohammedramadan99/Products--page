import Breadcrumb from "@/components/Breadcrumb";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        {/* <Breadcrumb /> */}
        <div className="shop-area">
          <div className="container">
            {/* <Sidebar /> */}
            <Products />
          </div>
        </div>
      </main>
    </>
  );
}
