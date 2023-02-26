import styles from './Word.module.scss'

interface WordProps {
  texte: string;
  time: string;
}
export default function Word(props: WordProps) {
  return (
    <h2 style={{ animationDelay: `${props.time}s` }} className={styles.animate}>{props.texte}</h2>
  )
}


