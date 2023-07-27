import { useState } from 'react';
import styles from './Row.module.css';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import Card from './Card';
import { responsiveRowCardWidth } from '../database/cardWidth';

function Row({name, data}) {
  let listSize = data.length;

  const [cardWidth, setCardWidth] = useState(responsiveRowCardWidth);
  const [margin, setMargin] = useState(0);
  const [scrollx, setScrollx] = useState(0);
  const [leftButton, setLeftButton] = useState('none');
  const [rightButton, setRightButton] = useState(window.innerWidth > 600 ? 'inherit' : 'none');

  const attCardWidth = () =>{
    setCardWidth(responsiveRowCardWidth);
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
        {data.length > 0 && data.map((element, key) =>{
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