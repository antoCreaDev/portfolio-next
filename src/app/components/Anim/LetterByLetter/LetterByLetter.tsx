export default function LetterByLetter() {
    return 
}
/*

// a convertir 


---
export interface Props {
    texte: string;
    animate: string;
}
const { texte } = Astro.props;
const { animate } = Astro.props;
---

<span class={`${animate}`} id="content">{texte}</span>
<script>
    const content = document.querySelector("#content");
    if (!content || !content.textContent) {
        throw new Error("Content element not found or empty.");
    }
    if (content.classList.contains("true")) {
        const texte = content.textContent.trim();
        console.log(texte);
        content.textContent = "";
        let letter_counter = 0;
        for (let k = 0; k < texte.length; k++) {
            const span = document.createElement("span");
            span.textContent = texte[k];
            span.style.opacity = "1";
            span.style.position = "relative";
            span.style.top = "-20px";
            setTimeout(() => {
                content.appendChild(span);
                span.animate(
                    [
                        { opacity: 0, position: "relative", top: 0 },

                        { opacity: 1, position: "relative", top: "-20px" },
                    ],
                    {
                        duration: 500,
                        easing: "ease-out",
                    }
                );
            }, 100 * letter_counter);
            letter_counter++;
        }
    }
</script>

*/