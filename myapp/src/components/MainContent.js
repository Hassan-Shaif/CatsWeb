import cat from "../images/cat.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import Compon1 from "./Compon1"

function MainContent(props){
const email = <FontAwesomeIcon icon={faEnvelope} />
const phone = <FontAwesomeIcon icon={faPhoneVolume} />
 if(props.isShow){
    return(
   <div>
    <div class="card" >
      <img src={props.img} class="card-img-top" alt="cat"/>
      <div class="card-body">
        <h1 class="card-title"><Compon1/>Mr.{props.name}</h1>
        <h5 class="card-title">{phone} Phone:{props.phone}</h5>
        <h5 class="card-title">{email} Email:{props.email}</h5>
        <FontAwesomeIcon icon="fa-regular fa-envelope" />
      </div>
    </div>
  </div>
 )
}
}
export default MainContent;