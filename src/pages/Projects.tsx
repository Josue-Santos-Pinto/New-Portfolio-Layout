import { ProjectItem } from "../components/ProjectItem";
import { ProjectsList } from "../data/projects";

export function Projects(){
    return (
        <div className="flex flex-1 flex-col bg-secundary p-10 overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent ">
            <div className="my-4">
                <h1 className="text-4xl">Todos os Projetos</h1>
            </div>
            <div className="grid grid-cols-2">
                {ProjectsList.map((item)=>(
                    <ProjectItem key={item.id} data={item}/>
                ))}
            </div>
        </div>
    )
}