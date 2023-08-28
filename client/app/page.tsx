import Header from "./(Components)/Header"
import HomeFurnitureLanding from "./HomeFurnitureLanding"
import LandingHero from "./LandingHero"
import Electronics from "./Electronics"
import ClothingFashion from "./ClothingFashion"
import Footer from "./(Components)/Footer"

const Home = async () => {
  return (
    <main className="relative bg-gray-950">
        <Header></Header>
      <div className="xs:mt-10 mt-32 md:mt-10 sm:mt-10">
        <LandingHero></LandingHero>
        <div className="mt-56 md:mt-28 sm:mt-28 xs:mt-28">
        <Electronics></Electronics>
        <HomeFurnitureLanding></HomeFurnitureLanding>
        <ClothingFashion></ClothingFashion>
        </div>
      </div>
      <Footer></Footer>
    </main>
  )
}

export default Home