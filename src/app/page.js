import Blog from "@/components/Blog/Blog";
import Catalog from "@/components/Catalog/Catalog";
import Company from "@/components/Company/Company";
import Given from "@/components/Given/Given";
import Hero from "@/components/Hero/Hero";
import Internet from "@/components/Internet/Internet";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <>
    <Hero/>
    <Catalog/>
    <Company/>
    <Products/>
    <Given/>
    <Blog/>
    <Internet/>
    </>
  );
}
