function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg" style={{background:"black"}} >
            <div className="container-fluid" style={{background:"black"}}>
        
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{background:"black"}}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
                        <li className="nav-item">
                            <button type="button" className="btn btn-danger my-2 mx-2">Everyday Value</button>
                            </li>
                            <li className="nav-item">
                            <button type="button" className="btn btn-danger my-2 mx-2">Ala-Carte-&-Combos</button>
                            </li>
                            <li className="nav-item">
                            <button type="button" className="btn btn-danger my-2 mx-2">Signature-Boxes</button>
                            </li>
                            <li className="nav-item">
                            <button type="button" className="btn btn-danger my-2 mx-2">Sharing</button>
                            </li>
                            <li className="nav-item">
                            <button type="button" className="btn btn-danger my-2 mx-2">Snacks-&-Beverages</button>
                            </li>
                            <li className="nav-item">
                            <button type="button" className="btn btn-danger my-2 mx-2">Midnight (Start at 12 am)</button>
                        </li>
                       
                    </ul>

                </div>
            </div>
        </nav>
    )

}
export default Navbar