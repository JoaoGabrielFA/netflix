import styles from './Banner.module.css';
import { Link } from 'react-router-dom';

function Banner({image, name, description, type, id}) {
  return (
  <section className={styles.banner} style={{backgroundImage: `url('${image}')`}}>
      <div className={styles.bannerMask}>
        <div className={styles.bannerContent}>
          <h1>{name && name.length > 40 ? name.substring(0, 40)+'...' : name}</h1>
          <p>{description && description.length > 210 ? description.substring(0, 210)+'...' : description}</p>
          <div>
            <button className={styles.bannerPlay}><span>&#9654;</span> Play</button>
            <Link 
              to={`/${type && type}/${id &&id}`} 
              id={id && id}>
              <button className={styles.bannerInfo}><span>&#9432;</span> More Info</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;