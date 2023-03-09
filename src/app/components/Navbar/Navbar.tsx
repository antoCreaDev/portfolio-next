'use client';
import Word from '../Anim/Word/Word';
import styles from './Navbar.module.scss';
import stylesWord from '../Anim/Word/Word.module.scss';
import { useRef, useEffect, useState } from 'react';
import Lottie from 'lottie-web';



const Navbar = () => {
    // --- STATES 
    // state for comportement navbar
    const [selectWord, setSelectWord] = useState < Array < HTMLDivElement >> ([]);
    const [isWindow, setIsWindow] = useState < Boolean > (false)
    const nav = useRef < HTMLDivElement > (null);
    // state for svg burger menu
    const lottieContainer = useRef < HTMLDivElement > (null);
    const [bool, setBool] = useState < boolean > (false);
    const [lottieAnimation, setLottieAnimation] = useState < any > ({});


    // --- COMPORTEMENT MENU BURGER SVG
    useEffect(() => {
        if (lottieContainer.current === null) {
            return;
        }
        const animate =
            Lottie.loadAnimation({
                container: lottieContainer.current,
                path: "burger-menu3.json",
                renderer: "svg",
                loop: false,
                autoplay: false,
            });
        animate.setSpeed(2);
        setLottieAnimation(animate);
        // Return clean up function here
        return () => animate.destroy();
    }, []);

    const toggle = () => {
        if (lottieContainer.current === null || lottieAnimation === null) {
            return;
        }

        const totalFrames = lottieAnimation.totalFrames;
        bool
            ? lottieAnimation.playSegments([totalFrames, 0], true)
            : lottieAnimation.playSegments([0, totalFrames], true);

        setBool(!bool);
    }
    // --- COMPORTEMENT NAVBAR
    useEffect(() => {
        const selectWordNodes = document.querySelectorAll < HTMLDivElement > ('.' + stylesWord.animate);
        if (selectWordNodes.length > 0 && window) {
            setSelectWord(Array.from(selectWordNodes));
            setIsWindow(true);
        }
    }, []);
    const toggleNav = () => {
        scrollTo(0, 0)
        if (nav.current === null || selectWord === null) {
            return;
        }
        // toggle class open
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
        toggle();
        if (nav.current === null) {
            return;
        }
        if (nav.current.classList.contains(styles.open)) {

            document.body.style.overflowY = "scroll";
            nav.current.classList.remove(styles.open);
        }
    }



    // RETURN JSX
    return (
        <nav ref={nav} className={styles.nav}>
            <div className={styles.img} onClick={toggleNav}>
                <div className={styles.lottieContainer} onClick={toggle} ref={lottieContainer}></div>
            </div>
            <ul >
                <li onClick={closeMenu} ><a href="#item1"><Word texte="Home" time="0" /></a></li>
                <li onClick={closeMenu} ><a href="#item2"><Word texte="Projets" time="0.25" /></a></li>
                <li onClick={closeMenu} ><a href="#item2"><Word texte="Distinctions" time="0.5" /></a></li>
                <li onClick={closeMenu} ><a href="#item2"><Word texte="Compétences" time="0.75" /></a></li>
                <li onClick={closeMenu} ><a href="#item4"><Word texte="Contact" time="1" /></a></li>
            </ul>
        </nav>
    );
}
export default Navbar;
