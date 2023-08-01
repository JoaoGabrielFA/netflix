import { useState, useEffect } from 'react';
import styles from './Row.module.css';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import Card from './Card';
import { responsiveRowCardWidth } from '../database/cardWidth';

function Row({ name, data }) {
  const [cardWidth, setCardWidth] = useState(responsiveRowCardWidth);
  const [margin, setMargin] = useState(0);
  const [horizontalScroll, setHorizontalScroll] = useState(0);
  const [leftButtonDisplay, setLeftButtonDisplay] = useState('none');
  const [rightButtonDisplay, setRightButtonDisplay] = useState(window.innerWidth > 600 ? 'inherit' : 'none');

  const cardHeight = cardWidth * 3 / 2;
  const rowSize = (cardWidth + 5) * 6;

  let listSize = data.length;

  const attCardWidth = () => {
    setCardWidth(responsiveRowCardWidth);
  };

  const attHorizontalScroll = () => {
    setHorizontalScroll(((cardWidth + 5) * 6) * margin);
  };

  const scrollLeft = () => {
    setMargin(margin + 1);
    if (horizontalScroll >= -rowSize) {
      setHorizontalScroll(0);
      setLeftButtonDisplay('none');
    } else {
      setHorizontalScroll(rowSize * (margin + 1));
      setRightButtonDisplay('inherit');
    };
  };

  const scrollRight = () => {
    setMargin(margin - 1);
    if (window.innerWidth <= 600) {
      if (horizontalScroll - rowSize >= ((listSize - 3) * -(cardWidth + 5)) && window.innerWidth) {
        setHorizontalScroll(rowSize * (margin - 1));
      } else {
        setHorizontalScroll((listSize - 3) * -(cardWidth + 5));
      };
    } else {
      if (horizontalScroll - rowSize >= ((listSize - 6) * -(cardWidth + 5)) && window.innerWidth) {
        setHorizontalScroll(rowSize * (margin - 1));
        setLeftButtonDisplay('inherit');
      } else {
        setHorizontalScroll((listSize - 6) * -(cardWidth + 5));
        setRightButtonDisplay('none');
      };
    };
  };

  useEffect(() => {
    window.addEventListener('resize', attCardWidth);
    window.addEventListener('resize', attHorizontalScroll);
    
    return () => {
      window.removeEventListener('resize', attCardWidth);
      window.removeEventListener('resize', attHorizontalScroll);
    };
  }, []);

  return (
    <div className={styles.row}>
      <p>{name}</p>
      <div>
        <SlArrowLeft className={styles.arrows} style={{ display: leftButtonDisplay, height: cardHeight }} onClick={scrollLeft} />
        <SlArrowRight className={styles.arrows} style={{ display: rightButtonDisplay, height: cardHeight }} onClick={scrollRight} />
      </div>
      <div className={styles.rowCards} style={{ marginLeft: horizontalScroll }}>
        {data.length > 0 && data.map((element) => {
          if (element.poster_path != null && element.backdrop_path != null) {
            return <Card width={cardWidth} element={element} key={element.id} />;
          } else {
            listSize--;
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default Row;
