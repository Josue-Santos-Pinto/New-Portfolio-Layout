import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons"
import { ProjectType } from "../types/Project"
import { TechItem } from "./TechItem"

type Props = {
    data: ProjectType
}

export function ProjectItem({data}: Props){
    return (
        <div className="w-11/12 my-4 border rounded-md overflow-hidden ">
            <div className="w-full h-2/3 flex items-center justify-center">
                <img src={data.img} className="w-full h-full object-cover"/>
            </div>
            <div className="flex flex-row justify-center items-center px-6 pt-4">
                {data.techs.map((item, index)=>(
                    <TechItem key={index} techs={item}/>
                ))}
            </div>
            <div className="flex flex-row items-center px-6 py-2 ">
                <h1 className="text-3xl mr-2">{data.name}</h1>
                <a className="cursor-pointer" target="_blank" href={data.deploy}>
                    <FontAwesomeIcon icon={faSquareArrowUpRight} className="text-xl"/>
                </a>
            </div>
        </div>
    )
}