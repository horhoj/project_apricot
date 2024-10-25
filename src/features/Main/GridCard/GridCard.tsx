import { GridItem } from '../Main.types';
import styles from './GridCard.module.scss';
import eyeImg from '~/assets/eye.svg';
import pushPin from '~/assets/push_pin.svg';

interface GridCardProps {
  data: GridItem;
}
export function GridCard({ data }: GridCardProps) {
  return (
    <li className={styles.GridCard}>
      <img src={pushPin} alt={'push_pin'} className={styles.pushPin} />
      <img alt={'grid img'} src={data.img} className={styles.imgCard} />
      <span className={styles.value}>
        <img src={eyeImg} alt="eye" />
        {data.value}
      </span>
    </li>
  );
}
