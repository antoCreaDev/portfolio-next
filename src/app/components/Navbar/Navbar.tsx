'use client';
import Word from '../Anim/Word/Word';
import styles from './Navbar.module.scss';
import stylesWord from '../Anim/Word/Word.module.scss';
import { useRef, useEffect, useState, use } from 'react';
import BurgerMenu from '../Anim/BurgerMenu/BurgerMenu';

const Navbar = () => {
    const [selectWord, setSelectWord] = useState < Array < HTMLDivElement >> ([]);
    const nav = useRef < HTMLDivElement > (null);
    // select element with styles.animate
    useEffect(() => {
        const selectWordNodes = document.querySelectorAll < HTMLDivElement > ('.' + stylesWord.animate);
        if (selectWordNodes.length > 0) {
            setSelectWord(Array.from(selectWordNodes));
        }
    }, []);
    const toggleNav = () => {
        if (nav.current === null || selectWord === null) {
            return;
        }
        console.log("toggleNav")
        nav.current.classList.toggle(styles.open);
        document.body.style.overflowY = nav.current.classList.contains(styles.open)
            ? "hidden"
            : "scroll";
        selectWord.map(elementWord => {
            elementWord.style.opacity = "0";
            elementWord.classList.remove(stylesWord.animate);
            setTimeout(() => {
                elementWord.classList.add(stylesWord.animate);
            }
                , 100);
        })
    }
    const closeMenu = () => {
        if (nav.current === null) {
            return;
        }
        if (nav.current.classList.contains(styles.open)) {
            document.body.style.overflowY = "scroll";
            nav.current.classList.remove(styles.open);
        }
    }
    return (
        <nav ref={nav} className={styles.nav}>
            <div className={styles.img} onClick={toggleNav}>
                <BurgerMenu />
            </div>


            <ul >
                <li onClick={closeMenu} ><a href="#item1"><Word texte="Home" time="0" /></a></li>
                <li onClick={closeMenu} ><a href="#item2"><Word texte="Projets" time="0.5" /></a></li>
                <li onClick={closeMenu} ><a href="#item2"><Word texte="Distinctions" time="1" /></a></li>
                <li onClick={closeMenu} ><a href="#item2"><Word texte="Compétences" time="1.5" /></a></li>
                <li onClick={closeMenu} ><a href="#item4"><Word texte="Contact" time="2" /></a></li>
            </ul>
        </nav>
    );
}
export default Navbar;
