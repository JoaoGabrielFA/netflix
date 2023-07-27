import styles from './LoadingScreen.module.css';
import {BiLoaderAlt} from 'react-icons/bi'

function LoadingScreen() {
  return (
    <div className={styles.loadingScreen}><BiLoaderAlt className={styles.loadIcon}/></div>
  )
}

export default LoadingScreen;