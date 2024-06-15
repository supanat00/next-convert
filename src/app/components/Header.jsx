'use client'
import Image from "next/image";
import "boxicons"

export default function Header() {
    return (

        <div className="header" id="header" >
            <nav className="nav container" >
                <a href="#" className="nav__logo">
                    <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437346/halloween-asset/logo_i4akc3.png" width="500" height="500" alt="" className="nav__logo-img" />
                    Halloween
                </a>

                <div className="nav__menu" id="nav-menu" >
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">Home</a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">About</a>
                        </li>

                        <li className="nav__item">
                            <a href="#trick" className="nav__link">Candy</a>
                        </li>

                        <li className="nav__item">
                            <a href="#new" className="nav__link">New</a>
                        </li>

                        <a href="#" className="button button--ghost">Support</a>
                    </ul>

                    <div className="nav__close" id="nav-close">
                        <i className='bx bx-x'></i>
                    </div>

                    <Image src="https://res.cloudinary.com/da8eemrq8/image/upload/v1718437346/halloween-asset/nav-img_n2hisg.png" width="500" height="500" alt="" className="nav__img" />
                </div>

                <div className="nav__toggle" id="nav-toggle" >

                    <i name='bx bx-grid-alt'><box-icon name='menu' size='lg'></box-icon></i>
                </div>

            </nav>
        </div>
    );
}
