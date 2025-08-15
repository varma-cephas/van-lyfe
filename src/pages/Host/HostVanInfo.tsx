import { useOutletContext } from "react-router"

export default function HostVanInfo(){
    const {vanDetailsObj}:{vanDetailsObj:{
        name: string,
        type: string,
        description: string
    }} = useOutletContext();
    console.log(vanDetailsObj)
    return(
        <>
            <section className="ml-[26px] ">
                <h4>Name: {vanDetailsObj.name}</h4>
                <h4>Category: {vanDetailsObj.type}</h4>
                <h4>Description: {vanDetailsObj.description}</h4>
                <h4>Visibility: public</h4>
            </section>
        </>
    )
}