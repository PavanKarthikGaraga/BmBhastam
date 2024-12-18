import './nav.css';
import Image from "next/image";
import logo from '../../Assets/bmbastha-logo_PNG_bg.png';
export default function Nav(){
    return(
        <div className="nav-component">
            <div className="nav-component-in">
                <div className="nav-component-in-one">
                    <Image src={logo} alt="logo" width={100} height={100} />
                    <h1>BmBastha</h1>
                </div>
            </div>
        </div>
    )
}