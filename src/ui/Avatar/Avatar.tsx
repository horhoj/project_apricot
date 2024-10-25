import styles from './Avatar.module.scss';

interface AvatarProps {
  src: string;
  alt: string;
}
export function Avatar({ alt, src }: AvatarProps) {
  return (
    <div className={styles.Avatar}>
      <img src={src} alt={alt} className={styles.img} />
    </div>
  );
}
