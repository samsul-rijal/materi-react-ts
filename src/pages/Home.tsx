import PromoCard from "../components/organisms/card/PromoCard"
import BannerCarousel from "../components/organisms/carousel/BannerCarousel"
import MainTemplate from "../components/templates/MainTemplate"


function Home() {

  return (
    <MainTemplate pageTitle="Home App">
        <BannerCarousel />

        <div className="mb-12 w-2/4 mx-auto text-center">
          <h1 className="font-bold text-2xl m-5">PROMO MENARIK</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis delectus vel voluptatum cum soluta officiis sint minus expedita, voluptatem a voluptates placeat ipsum minima maxime asperiores perspiciatis! Pariatur deserunt minus fuga porro, sint alias magnam, minima voluptatem est autem aut a quod!</p>
        </div>

        <div className="flex justify-center items-center gap-5 px-5">
          <div className="motion motion-preset-slide-left motion-delay-[1000ms] motion-ease-spring-bouncier">
            <PromoCard 
              title="Promo 11.11"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis numquam autem voluptatem obcaecati, rerum explicabo! A illum earum asperiores minus?"
              buttonLabel="Beli sekarang"
            />
          </div>
          <div className="motion motion-preset-slide-left motion-delay-[1300ms] motion-ease-spring-bouncier">
            <PromoCard 
              title="Promo Ramadhan Sale"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis numquam autem voluptatem obcaecati, rerum explicabo! A illum earum asperiores minus?"
              buttonLabel="Beli sekarang"
            />
          </div>
          <div className="motion motion-preset-slide-left motion-delay-[1600ms] motion-ease-spring-bouncier">
            <PromoCard 
              title="Promo Akhir Tahun"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis numquam autem voluptatem obcaecati, rerum explicabo! A illum earum asperiores minus?"
              buttonLabel="Beli sekarang"
            />
          </div>
          
        </div>
    </MainTemplate>
  )
}

export default Home