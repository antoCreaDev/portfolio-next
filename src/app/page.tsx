import Navbar from './components/Navbar/Navbar'
import LetterByLetter from './components/Anim/LetterByLetter/LetterByLetter'
import styles from './page.module.scss'


export default function Home() {
  return (
    < >
      <header>
        <Navbar />
      </header>
      <main>


        <section className={styles.home}>
          <img className={styles.imgHome} src="logo.svg" alt="" />
          <div
            className={styles.textHome}
          >
            <LetterByLetter texte="Lier l'art et l'informatique pour rendre le web plus beau et intelligent" />
          </div>
        </section>


        <h2 id="item2">ici viens</h2>


      </main>
      <footer></footer>
    </>


  )
}
