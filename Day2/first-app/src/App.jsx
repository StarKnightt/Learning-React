// This is entry point for any react app, lol
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import Footer from "./components/footer"

function App() {
  return (
    // when we return something using funciton we can only import one tag. 
    <>
    <Navbar/>
    <div className="cards">
    <Card title="card 1" description="card 1 desc" />
    <Card title="card 2" description="card 2 desc" />
    <Card title="card 3" description="card 3 desc" />
    <Card title="card 4" description="card 4 desc" />
    </div>
    <Footer/>
    </>
  )
}
export default App