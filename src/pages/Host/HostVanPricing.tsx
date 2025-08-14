import { useOutletContext } from "react-router"
export default function HostVanPricing(){
    const {vanDetailsObj} = useOutletContext()

    return(
        <>
            <section className="ml-[26px] ">
                <h1 className="text-3xl">Price: {vanDetailsObj.price}</h1>
            </section>
        </>
    )
}