import { useOutletContext } from "react-router"

export default function HostVanPhotos(){
    const {vanDetailsObj} = useOutletContext()
    return(
        <>
            <section className="ml-[26px] ">
               <img src={vanDetailsObj.imageUrl} className="w-25 rounded-md" alt="host van photo" />
            </section>
        </>
    )
}