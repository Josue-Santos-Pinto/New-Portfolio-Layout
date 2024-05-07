import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faDatabase, faUserGraduate, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation } from "react-router-dom"

export function NavBar(){

    const location = useLocation()

    return (
        <div className="w-1/5 h-full flex flex-col gap-6 bg-primary">
        <div className="w-2/3 h-64 mx-auto bg-black">
            <div className="flex flex-col mt-6">
                <div className="w-24 h-24 rounded-full bg-blue-700 mx-auto my-4">

                </div>
                <div className="text-center">
                  <h1 className="font-bold text-xl">Josué Santos Pinto</h1>
                  <h3 className="text-sm">Desenvolvedor FullStack</h3>
                </div>
            </div>
        </div>

        <nav className="flex flex-col  w-2/3 mx-auto bg-black">
          <div className="group w-full px-4 py-2 my-4 cursor-pointer">
            <FontAwesomeIcon icon={faHouse} size='1x' className={`${location.pathname == '/' ? 'text-white' : 'text-gray-500'} group-hover:text-white`}/>
            <Link to='/' className={`ml-4 ${location.pathname == '/' ? 'text-white' : 'text-gray-500'} group-hover:text-white`}>Home</Link>
          </div>

          <div className="group w-full px-4 py-2 my-4 cursor-pointer">
            <FontAwesomeIcon icon={faDatabase} size='1x' className={`${location.pathname == '/projects' ? 'text-white' : 'text-gray-500'} group-hover:text-white`}/>
            <Link to='/projects' className={`ml-4 ${location.pathname == '/projects' ? 'text-white' : 'text-gray-500'} group-hover:text-white`}>Projetos</Link>
          </div>

          <div className="group w-full px-4 py-2 my-4 cursor-pointer">
            <FontAwesomeIcon icon={faUserGraduate} size='1x' className={`${location.pathname == '/education' ? 'text-white' : 'text-gray-500'} group-hover:text-white`}/>
            <Link to='/education' className={`ml-4 ${location.pathname == '/education' ? 'text-white' : 'text-gray-500'} group-hover:text-white`}>Formação</Link>
          </div>

          <div className="group w-full px-4 py-2 my-4 cursor-pointer">
            <FontAwesomeIcon icon={faEnvelope} size='1x' className={`${location.pathname == '/contact' ? 'text-white' : 'text-gray-500'} group-hover:text-white`}/>
            <Link to='/contact' className={`ml-4 ${location.pathname == '/contact' ? 'text-white' : 'text-gray-500'} group-hover:text-white`}>Contato</Link>
          </div>
        </nav>
          
       </div>
    )
}