import Image from "next/image";
import SearchForm from "@/components/SearchForm/SearchForm";
import Card from "@/components/Card/Card";

export default async function Home({searchParams} : {searchParams: Promise<{ query?: string}> }) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createAt: "11/27/2024",
      view: 55,
      author: { _id: 1, name: "Fernando"},
      _id: 1,
      description: "This is a sample description",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Website",
      title: "Sample Post"
    },
    {
      _createAt: "11/27/2024",
      view: 55,
      author: { _id: 3, name: "Fernando"},
      _id: 3,
      description: "This is a sample description",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Website",
      title: "Sample Post"
    },
    {
      _createAt: "11/27/2024",
      view: 55,
      author: { _id: 2, name: "Fernando"},
      _id: 2,
      description: "This is a sample description",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Website",
      title: "Sample Post"
    },
  ]

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

        <section className="section_container">
          <p className="text-3xl font-semibold">
            {query ? `Search results for "${query}"` : "Recent Posts"}
          </p>

          <ul className="mt-7 card-grid">
            {posts?.length > 0 ? (
              posts.map((post: Card) => (
                <Card key={post?._id} post={post} />
              ))
            ) : (
              <p className="no-results">No startups found</p>
            )}
          </ul>
        </section>
        
    </>
  );
}
