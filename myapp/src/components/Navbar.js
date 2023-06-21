import logo from "../images/logo.png"
import Compon1 from "./Compon1";
function Navbar(){
    return(
    <div>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <img src={logo} alt="" className="img"/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>

            </button>
            <div className=" navItem" id="navbarNav" >
              <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
       </nav>

    </div>
    )
}
export default Navbar;