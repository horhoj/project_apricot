import classNames from 'classnames';
import { InfoItem } from '../Main.types';
import styles from './InfoCard.module.scss';

interface InfoCardProps {
  info: InfoItem;
}
export function InfoCard({ info }: InfoCardProps) {
  return (
    <li className={styles.InfoCard}>
      <div className={classNames(styles.wrapper)}>
        <img src={info.icon} alt={'info card icon'} /> <span className={styles.value}>{info.value}</span>
      </div>
      <div className={classNames(styles.wrapper, styles.description)}>{info.description}</div>
    </li>
  );
}
