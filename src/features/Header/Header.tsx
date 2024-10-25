import classNames from 'classnames';
import styles from './Header.module.scss';
import { Button } from '~/ui/Button';

export function Header() {
  return (
    <header className={classNames(styles.Header, 'container')}>
      <Button className={styles.cancelBtn}>Cancel</Button>
      <div>
        <div className={styles.topText}>Bot</div>
        <div className={styles.bottomText}>bot</div>
      </div>
      <Button className={styles.optionsBtn}>
        <span />
        <span />
        <span />
      </Button>
    </header>
  );
}
