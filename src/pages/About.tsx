import BannerCarousel from "../components/organisms/carousel/BannerCarousel";
import MainTemplate from "../components/templates/MainTemplate";


function About() {
  return (
    <MainTemplate pageTitle="About Page">
      <div>
        {/* <BannerCarousel />
        <div className="text-center mt-24">
          <p className="mx-auto text-3xl md:w-2/4">What’s your mood? We’ve got exceptionally handcrafted donuts, premium sourced Arabica coffee, and other crave-inducing treats prepared just for you.</p>
          <button className="mt-12 border-2 px-3 py-2">EXPLORE OUR MENU</button>
        </div> */}

        {/* <div className="bg-red-600 md:flex flex">
          <div className="flex-1 md:bg-blue-500 bg-green-500">BOX 1</div>
          <div className="flex-1 bg-yellow-300">BOX 2</div>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-5">
          <div className="bg-red-600 w-40">
            box 1
          </div>
          <div className="bg-red-600 w-40">
            box 2
          </div>
          <div className="bg-red-600 w-40">
            box 3
          </div>
          <div className="bg-red-600 w-40">
            box 4
          </div>
        </div>
      </div>
    </MainTemplate>
  )
}


export default About
