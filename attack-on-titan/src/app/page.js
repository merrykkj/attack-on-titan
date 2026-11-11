import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Historia from "./components/Historia/historia";
import Personagens from "./components/Personagens/personagens";
import Titas from "./components/Titas/titas";
import Footer from "./components/Footer/footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#10080c]">
      <Header />
      <Hero />
       <Historia />
       <Personagens/>
       <Titas/>
      <Footer />
    </main>
  );
}