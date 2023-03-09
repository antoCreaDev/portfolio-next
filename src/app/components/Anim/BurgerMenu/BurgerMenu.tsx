"use client";
import Lottie from 'lottie-web';
import { useRef, useEffect, useState } from 'react';
import styles from './BurgerMenu.module.scss';
export interface BurgerMenu {
    bool: boolean;
}
export default function BurgerMenu(props: BurgerMenu) {
    const lottieContainer = useRef < HTMLDivElement > (null);
    const [bool, setBool] = useState < boolean > (false);
    const [lottieAnimation, setLottieAnimation] = useState < any > ({});

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
    return (
        <div className={styles.lottieContainer} onClick={toggle} ref={lottieContainer}></div>
    )
}