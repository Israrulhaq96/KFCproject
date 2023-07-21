import Navbar from "../component/Navbar"
import Card from "../component/Card"
import Bucket from "../component/Bucket"

function EverydayValue()
{
return(
    <div style={{ background: "black" }}>
    <div className="row row-cols-2">
    <div className="col " style={{width:"80%"}}>
      <div className="container my-5"><Navbar /> </div>
          <div className="container my-5" >
            <Card /></div>
            </div>
      
          <div className="col" style={{width:"20%"}}>
            <Bucket />
          </div>
        </div>
        </div>
)
}
export default EverydayValue