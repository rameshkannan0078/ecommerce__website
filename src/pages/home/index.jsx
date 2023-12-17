import CnNavbar from "../../components/CnNavbar";
import CnSlider from "../../components/CnSlider";
import Banner1 from "../../assets/banner/banner_1.png";
import Banner2 from "../../assets/banner/banner_2.png";
import Banner3 from "../../assets/banner/banner_3.png";
import Banner4 from "../../assets/banner/banner_4.png";
import Banner5 from "../../assets/banner/banner_5.png";
import CnProductCard from "../../components/CnProductCard";
import products from "../../global/product";

export default function Home(){

    const bannerList=[Banner1,Banner2,Banner3,Banner4,Banner5];
    return(<CnNavbar>
     <div className="mt-6 ">
        <CnSlider slideList={bannerList}/>
        <div className="mt-8 font-bold text-[2rem]">{`Mens Collection`}</div>
        <div className="flex flex-wrap justify-between">
        <div>
        </div>
        {products['mens-shirts'].map((product) => (
          <div key={product.description} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
            <CnProductCard product={product} type={`mens-shirts`} />
          </div>
        ))}
      </div>
      <div className="mt-8 font-bold text-[2rem]">{`Womens Collection`}</div>
        <div className="flex flex-wrap justify-between">
        <div>
        </div>
        {products['womens-dresses'].map((product) => (
          <div key={product.description} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
            <CnProductCard product={product} type={`womens-dresses`} />
          </div>
        ))}
      </div>
      <div className="mt-8 font-bold text-[2rem]">{`Furniture`}</div>
        <div className="flex flex-wrap justify-between">
        <div>
        </div>
        {products['furniture'].map((product) => (
          <div key={product.description} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
            <CnProductCard product={product} type={`furniture`}/>
          </div>
        ))}
      </div>
      <div className="mt-8 font-bold text-[2rem]">{`Skin Care`}</div>
        <div className="flex flex-wrap justify-between">
        <div>
        </div>
        {products['skincare'].map((product) => (
          <div key={product.description} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
            <CnProductCard product={product} type={`skincare`} />
          </div>
        ))}
      </div>
      <div className="mt-8 font-bold text-[2rem]">{`Groceries`}</div>
        <div className="flex flex-wrap justify-between">
        <div>
        </div>
        {products['groceries'].map((product) => (
          <div key={product.description} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
            <CnProductCard product={product} type={`groceries`}/>
          </div>
        ))}
      </div>

      <div className="mt-8 font-bold text-[2rem]">{`Watches`}</div>
        <div className="flex flex-wrap justify-between">
        <div>
        </div>
        {products['mens-watches'].map((product) => (
          <div key={product.description} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
            <CnProductCard product={product} type={`mens-watches`} />
          </div>
        ))}
      </div>
      
        </div>
    </CnNavbar>);
}