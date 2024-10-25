import classNames from 'classnames';
import styles from './Main.module.scss';
import { infoCardDataList } from './Main.infoCardDataList';
import { InfoCard } from './InfoCard';
import { gridCardDataList } from './Main.GridCardDataList';
import { GridCard } from './GridCard';
import { Avatar } from '~/ui/Avatar';

import mentorFoto from '~/assets/mentor_foto.png';
import caretDownImg from '~/assets/caret_down.svg';
import { Button } from '~/ui/Button';
import ForwardArrow from '~/assets/forward_arrow.svg';

export function Main() {
  return (
    <div className={classNames(styles.Main, 'container')}>
      <Avatar alt={'mentor avatar'} src={mentorFoto} />
      <Button className={styles.forwardArrowBtn}>
        <img src={ForwardArrow} alt={'forward arrow'} className={styles.forwardArrowBtnImg} />
      </Button>
      <div className={styles.bigTitle}>Dmitriy Mentor</div>
      <div className={styles.title}>@mentor</div>
      <ul className={styles.infoCardDataList}>
        {infoCardDataList.map((infoCard) => (
          <InfoCard info={infoCard} key={infoCard.id} />
        ))}
      </ul>
      <div className={styles.subscribeWrapper}>
        <Button className={styles.subscribeBtn}>Subscribe</Button>
        <Button className={styles.subscribeCaretDownBtn}>
          <img src={caretDownImg} alt="caret_down" />
        </Button>
      </div>
      <div className={classNames(styles.description, styles.descriptionMt)}>
        Where to grow your business as a photographer:
      </div>
      <div className={styles.description}>site or social media?</div>
      <ul className={styles.gridCardList}>
        {gridCardDataList.map((gridItem) => (
          <GridCard data={gridItem} key={gridItem.id} />
        ))}
      </ul>
    </div>
  );
}
