import Header from "@/component/Header";
import Search from "@/component/Search";
import Airlines from "@/component/Airlines";
import Contact from "@/component/Contact";

const Home = () => {

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Search />
        <Airlines />
        <Contact />
      </main>
    </div>

  );

};

export default Home;