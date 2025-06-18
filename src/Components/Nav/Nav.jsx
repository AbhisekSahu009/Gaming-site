import React, {useRef} from 'react'
import NavCss from './../Nav/Nav.module.css'

function Nav() {

    const menubar = useRef();

    // const openMenu = () => {
    //     menubar.current.classList.toggle(NavCss.openMenu);
    // }

    const openMenu = () => {
        menubar.current.classList.toggle(NavCss.openMenu);
    };

    return (
        <div className={NavCss.nav}>
            <div className={NavCss.menu} ref={menubar}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Highlights</a></li>
                <li><a href="#">Contact</a></li>
            </div>


            <div className={NavCss.bars}>
                <i className={`${NavCss.nav_icon} ri-menu-2-fill`} onClick={openMenu}></i>
            </div>

            <div className={NavCss.logo}>
                <a href="#">C<span>X</span>N</a>
            </div>

            <div className={NavCss.right_menu}>
                <h2>INFO@EXAMPLE.COM</h2>
                <div className={NavCss.nav_icon}>
                    <i className={`${NavCss.nav_icon} ri-search-2-line`}></i>
                </div>

            </div>
        </div>
    )

}

export default Nav