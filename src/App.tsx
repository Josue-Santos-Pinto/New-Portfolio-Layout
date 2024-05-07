
import { NavBar } from "./components/NavBar"
import { MainRoute } from "./routes/MainRoute"


function App() {

  

  return (
     <div className="w-screen h-screen flex flex-row  overflow-hidden">
        <NavBar />
        <MainRoute />  
     </div>
  )
}

export default App
