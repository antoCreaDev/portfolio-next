'use client';
import Word from '../Anim/Word/Word';
import styles from './Navbar.module.scss';
import stylesWord from '../Anim/Word/Word.module.scss';
import { useRef, useEffect, useState, use } from 'react';
import Lottie from 'lottie-web';

const Navbar = () => {
    const [selectWord, setSelectWord] = useState < Array < HTMLDivElement >> ([]);
    const nav = useRef < HTMLDivElement > (null);
    const navImgRef = useRef < HTMLImageElement > (null);
    const lottieContainer = useRef < HTMLDivElement > (null);
    // select element with styles.animate
    useEffect(() => {
        const selectWordNodes = document.querySelectorAll < HTMLDivElement > ('.' + stylesWord.animate);
        if (selectWordNodes.length > 0) {
            setSelectWord(Array.from(selectWordNodes));
        }
    }, []);

    console.log(Lottie)

    useEffect(() => {
        if (lottieContainer.current === null) {
            return;
        }
        Lottie.loadAnimation({
            container: lottieContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://assets3.lottiefiles.com/packages/lf20_6jxjxj.json'
        });
    }, []);



    const toggleNav = () => {
        if (nav.current === null || navImgRef.current === null || selectWord === null) {
            return;
        }

        nav.current.classList.toggle(styles.open);
        navImgRef.current.src = nav.current.classList.contains(styles.open) ? 'close.svg' : 'open.svg';
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
        if (nav.current === null || navImgRef.current === null) {
            return;
        }
        if (nav.current.classList.contains(styles.open)) {
            document.body.style.overflowY = "scroll";
            nav.current.classList.remove(styles.open);
            navImgRef.current.src = 'open.svg';
        }
    }
    return (
        <nav ref={nav} className={styles.nav}>
            <img onClick={toggleNav} ref={navImgRef} src="open.svg" alt="" />
            <div ref={lottieContainer}></div>
            <ul >
                <li onClick={closeMenu} ><a href="#item1"><Word texte="item1" time="0" /></a></li>
                <li onClick={closeMenu} ><a href="#item2"><Word texte="item2" time="0.5" /></a></li>
                <li onClick={closeMenu} ><a href="#item2"><Word texte="item3" time="1" /></a></li>
                <li onClick={closeMenu} ><a href="#item4"><Word texte="item4" time="1.5" /></a></li>
            </ul>
        </nav>
    );
}
export default Navbar;
