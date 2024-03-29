import { HeaderContainer, HeaderImagem, HeaderLogo, HeaderMenu, HeaderMenuLinks } from "./Header"
import logo from "../../assets/logo.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "react-router-dom"
import style from "./Header.module.css"


export const Header = () => {

    

    return (
        <HeaderContainer>
            <HeaderMenu>
                <GiHamburgerMenu size={28} color="#fff"/>
            </HeaderMenu>
            {menuOpen &&  <HeaderMenuLinks>
                <h3 className={style.texto}>Opções de carros</h3>
                <Link className={style.link}>Carros</Link>
                <Link className={style.link}>Lançamentos</Link>
                <Link className={style.link}>Sedans</Link>
                <Link className={style.link}>Hatch</Link>
                <Link className={style.link}>Esportivos</Link>
                <Link className={style.link}>Off Road</Link>
            </HeaderMenuLinks>}
            <Link to="/">
            <HeaderLogo>
                <HeaderImagem src={logo}/>
                <h2>VCars</h2>
            </HeaderLogo>
            </Link>
           
        </HeaderContainer>
    )
}