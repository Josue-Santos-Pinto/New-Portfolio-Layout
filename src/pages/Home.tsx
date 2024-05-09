import { Link } from "react-router-dom";
import GuitarStore from '../assets/guitarstore-web.png'
import { Skills } from "../data/skills";

export function Home(){

    let repeatedSkills = Skills.concat(Skills)

    return (
        <div className="flex flex-1 items-center justify-center w-full bg-secundary p-10 bg-[url('./assets/light.jpg')]"> 
            <div className="w-full h-full grid grid-cols-4 gap-4 ">
                <div className="flex items-center justify-center flex-col border border-zinc-500 rounded-md bg-primary">
                    <h2 className="text-6xl font-bold mb-2">20+</h2>
                    <h4 className="text-zinc-400">Projetos Completos</h4>
                </div>
                <div className="flex items-center justify-center flex-col border border-zinc-500 rounded-md bg-primary">
                    <h2 className="text-3xl font-bold mb-2">Landing Pages</h2>
                    <h2 className="text-3xl font-bold mb-2">Sites</h2>
                    <h2 className="text-3xl font-bold mb-2">Aplicativos</h2>
                </div>
                <div className="col-span-2 row-span-2 flex  justify-center items-center flex-col border border-zinc-500 rounded-md bg-primary px-4">
                    <div className="w-5/6">
                        <h2 className="text-4xl font-bold mb-4">Seu parceiro Ideal</h2>
                        <h4 className="text-zinc-400 text-wrap mb-4">
                            Se você está buscando um freelancer dedicado, criativo e com experiência para ajudar a levar seus projetos para o próximo nível, 
                            ficarei muito feliz em trabalhar com você. Vamos transformar suas ideias em realidade juntos!
                        </h4>
                        <div>
                            <Link to='/contact' className="text-blue-400 text-lg hover:underline hover:underline-offset-4">Contate-me</Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col border border-zinc-500 rounded-md bg-primary">
                    <h2 className="text-3xl font-bold mb-2">Vamos</h2>
                    <h2 className="text-3xl font-bold mb-2">Trabalhar</h2>
                    <h2 className="text-3xl font-bold mb-2">Juntos</h2>
                </div>
                <div className="flex items-center justify-center flex-col border border-zinc-500 rounded-md bg-primary">
                    <h2 className="text-6xl font-bold mb-2">2+</h2>
                    <h4 className="text-zinc-400">Anos de experiência</h4>
                </div>
                <div className="col-span-2 row-span-2 flex   items-center flex-col border border-zinc-500 rounded-md bg-primary px-4">
                        
                        <div className="text-center my-4">
                            <h2 className="text-4xl font-bold">Meus Projetos</h2>
                            <Link to='/projects' className="text-blue-400 text-lg hover:underline hover:underline-offset-4">Ver todos</Link>
                        </div>
                        <div className="w-2/4 h-48 p-2 mt-10 overflow-hidden border rounded-md">
                            <img src={GuitarStore} className="h-full w-full object-contain" />
                        </div>
                </div>
                <div className="col-span-2 row-span-2 flex overflow-hidden items-center flex-col border border-zinc-500 rounded-md bg-primary px-4">
                        
                        <div className="text-center my-4">
                            <h2 className="text-4xl font-bold">Skills</h2>
                        </div>
                        {/*SLIDER */}
                            <div className="w-full h-16 m-auto relative grid place-items-center overflow-hidden ">
                                {/*SLIDER-TRACK */}
                                <ul className=" w-[calc(48px * 16)] flex flex-row ">
                                        {repeatedSkills.map((item, index)=>(
                                                <li 
                                                    className="w-12 h-12 overflow-hidden flex items-center justify-center mx-3 animate-[scrollToLeft_40s_linear_infinite]" 
                                                    key={index}
                                                    >
                                                    {/*SLIDE */}
                                                    <img src={item.img} className="w-full h-full object-cover" />
                                                </li>
                                        
                                        ))}
                                </ul>
                            </div>
                            
                            <div className="w-full h-16 m-auto relative grid place-items-center overflow-hidden ">
                                {/*SLIDER-TRACK */}
                                <ul className=" w-[calc(48px * 16)] flex flex-row ">
                                        {repeatedSkills.map((item, index)=>(
                                                <li 
                                                    className="w-12 h-12 overflow-hidden flex items-center justify-center mx-3 animate-[scrollToRight_40s_linear_infinite]" 
                                                    key={index}
                                                    >
                                                    {/*SLIDE */}
                                                    <img src={item.img} className="w-full h-full object-cover" />
                                                </li>
                                        
                                        ))}
                                </ul>
                            </div>
                            <div className="w-full h-16 m-auto relative grid place-items-center overflow-hidden ">
                                {/*SLIDER-TRACK */}
                                <ul className=" w-[calc(48px * 16)] flex flex-row ">
                                        {repeatedSkills.map((item, index)=>(
                                                <li 
                                                    className="w-12 h-12 overflow-hidden flex items-center justify-center mx-3 animate-[scrollToLeft_40s_linear_infinite]" 
                                                    key={index}
                                                    >
                                                    {/*SLIDE */}
                                                    <img src={item.img} className="w-full h-full object-cover" />
                                                </li>
                                        
                                        ))}
                                </ul>
                            </div>
                </div>
            </div>
        </div>
    )
}