import { useState } from 'react';
import styles from './Row.module.css';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import Card from './Card';

function Row({name, data}) {
  let listSize = data.results.length;

  const [cardWidth, setCardWidth] = useState(window.innerWidth > 1024 ? ((window.innerWidth - 130)*16.666/100) 
                                            : window.innerWidth > 800 ? ((window.innerWidth - 130)*20/100) 
                                            : window.innerWidth > 600 ? ((window.innerWidth - 130)*25/100) 
                                            : ((window.innerWidth - 70)*33.333/100));
  const [margin, setMargin] = useState(0);
  const [scrollx, setScrollx] = useState(0);
  const [leftButton, setLeftButton] = useState('none');
  const [rightButton, setRightButton] = useState(window.innerWidth > 600 ? 'inherit' : 'none');

  const attCardWidth = () =>{
    setCardWidth(window.innerWidth > 1024 ? ((window.innerWidth - 130)*16.666/100) 
                : window.innerWidth > 800 ? ((window.innerWidth - 130)*20/100) 
                : window.innerWidth > 600 ? ((window.innerWidth - 130)*25/100) 
                : ((window.innerWidth - 70)*33.333/100));
  }

  const attMargin = () =>{
    setScrollx(((cardWidth+5) * 6) * margin);
  }

  window.addEventListener('resize', attCardWidth);
  window.addEventListener('resize', attMargin);

  const rowSize = (cardWidth+5) * 6;

  function scrollLeft() {
    setMargin(margin + 1)
    if (scrollx >= -rowSize) {
      setScrollx(0);
      setLeftButton('none');
    } else {
    setScrollx(rowSize * (margin + 1));
      setRightButton('inherit');
    }
  }

  function scrollRight() {
    setMargin(margin - 1)
    if(window.innerWidth <= 600) {
      if (scrollx - rowSize >= ((listSize - 3) * - (cardWidth+5)) && window.innerWidth) {
        setScrollx(rowSize * (margin - 1));
      } else {
        setScrollx((listSize - 3) * - (cardWidth+5));
      }
    } else{
      if (scrollx - rowSize >= ((listSize - 6) * - (cardWidth+5)) && window.innerWidth) {
        setScrollx(rowSize * (margin - 1));
        setLeftButton('Inherit');
      } else {
        setScrollx((listSize - 6) * - (cardWidth+5));
        setRightButton('none');
      }
    }
  }

  return (
    <div className={styles.row}>
      <p>{name}</p>
      <div>
        <SlArrowLeft className={styles.arrows} style={{ display: leftButton, height: (cardWidth*3/2) }} onClick={scrollLeft} />
        <SlArrowRight className={styles.arrows} style={{ display: rightButton, height: (cardWidth*3/2) }} onClick={scrollRight} />
      </div>
      <div className={styles.rowCards} style={{ marginLeft: scrollx}}>
        {data.results.length > 0 && data.results.map((element, key) =>{
          if(element.poster_path != null && element.backdrop_path != null){
            return <Card width={cardWidth} element={element} key={key}/>
          } else {
            listSize--;
          }
        })}
      </div>
    </div>
  )
}

export default Row;