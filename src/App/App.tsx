import classNames from 'classnames';
import styles from './App.module.scss';
import { Header } from '~/features/Header';
import { Main } from '~/features/Main';

export function App() {
  return (
    <div className={classNames(styles.App)}>
      <Header />
      <Main />
    </div>
  );
}
