import { BrowserRouter, Routes, Route } from "react-router";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import VanDetails from "./pages/VanDetails";
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import Review from "./pages/Host/Review";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import HostVans from "./pages/Host/HostVans";
import HostVansDetails from "./pages/Host/HostVansDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanDetailsLayout from "./components/HostVanDetailsLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />

          <Route path="vans">
            <Route index element={<Vans/>} />
            <Route path=":id" element={<VanDetails/>}/>
          </Route>


          <Route path="admin"  element={<HostLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="income" element={<Income/>}/>
            <Route path="review" element={<Review/>}/>
            <Route path="vans" element={<HostVans/>}/>
              
            <Route path="vans/:id" element={<HostVansDetails/>}>
            {/* <Route  path=":id/info" element={<HostVanDetailsLayout/>} > */}
               <Route index element={<HostVanInfo/>} />
                <Route path="pricing" element={<HostVanPricing/>} />
                <Route path="photos" element={<HostVanPhotos/>} /> 
            {/* </Route> */}
             </Route>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
        