import Navbar from "../Components/Navbar";
import Pricing from "../Components/Pricing"
import FAQ from "../Components/FAQ"
import Footer from "../Components/Footer"


export const Home = () =>{
    return(<>
           <Navbar/> 
           <Pricing/>
           <FAQ/>
           <Footer/>
    </>)
}