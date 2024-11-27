import Image from "next/image";
import SearchForm from "@/components/SearchForm/SearchForm";

export default async function Home({searchParams} : {searchParams: Promise<{ query?: string}> }) {
  const query = (await searchParams).query;

  return (
    <>
        <section className="hero-container">
          <h1 className="heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, vel.</h1>  
          <p className="sub-heading">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ad voluptate itaque, 
            facilis nulla voluptatum voluptas dolorum sed impedit sit!
          </p>
          <SearchForm query={query} />
        </section>
    </>
  );
}
