"use client";
import { useEffect, useRef } from 'react';
import styles from './LetterByLettre.module.scss';

export interface LetterByLetterProps {
    texte: string;
}
const LetterByLetter = (props: LetterByLetterProps) => {
    const content = useRef < HTMLSpanElement > (null);
    useEffect(() => {
        if (!content.current || !content.current.textContent) {
            return;
        }
        const texte = content.current.textContent.trim(); // remove whitespace
        content.current.textContent = "";
        for (let k = 0; k < texte.length; k++) {
            const span = document.createElement("span");
            span.textContent = texte[k];
            setTimeout(() => {
                if (!content.current) {
                    return;
                }
                content.current.appendChild(span);
                span.style.animationFillMode = "forwards";
                span.classList.add(styles.letter);
            }, 50 * k);
        }

    }, []);
    return (
        <div ref={content} className={styles.spanContent} id="content">{props.texte}</div>

    );
}

export default LetterByLetter;