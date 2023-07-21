import Kfc from "./Kfc.json"
function Card() {
  return (

    <div class="row row-cols-1 row-cols-3 g-0"  style={{ background: "black" }}>
      {
        Kfc.map(m => (
          <div class="col" >
            <div className="card" style={{ width: "18rem", background: "black"  }}>
              <img src={m.image} className="card-img-top" alt="..."  />
              <div className="card-body">
                <p className="card-text-white" style={{ color: 'white' }} >{m.detail}</p>
                <h5 className="card-title" style={{ color: 'white' }}>{m.Price}</h5>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
        ))}

    </div>
  )
}
export default Card;