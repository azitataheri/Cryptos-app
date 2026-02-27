import styles from '../layout/Layout.module.css'

function Layout({children}) {
  return (
   <>
    <header className={styles.header}>
        <h2>Crypto App</h2>
    </header>
    {children}
    <footer className={styles.footer}>
    <p>Developed by Azita with <span>❤️</span></p>
    </footer>
   </>
  )
}

export default Layout