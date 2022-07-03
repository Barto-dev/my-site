import { FunctionalComponent } from 'preact';

import cn from 'classnames';

import { nesContainerClass } from '@app/utils/nesStyleClass';

import styles from './MyWorks.module.css';

const MyWorks: FunctionalComponent = () => {
  return (
    <div className="wrapper-small">
      <div className={cn(nesContainerClass)}>
        <ul className={styles.list}>
          <li>
            <a href="https://fbclub.com.ua/" target="_blank" rel="noreferrer">
              https://fbclub.com.ua/
            </a>
          </li>
          <li>
            <a href="https://zakaz.tdb.org.ua/" target="_blank" rel="noreferrer">
              https://zakaz.tdb.org.ua/
            </a>
          </li>
          <li>
            <a href="https://dermacaremed.com/" target="_blank" rel="noreferrer">
              https://dermacaremed.com/
            </a>
          </li>
          <li>
            <a href="https://whoami.silpo.ua/" target="_blank" rel="noreferrer">
              https://whoami.silpo.ua/
            </a>
          </li>
          <li>
            <a href="https://maxbanus.com/" target="_blank" rel="noreferrer">
              https://maxbanus.com/
            </a>
          </li>
          <li>
            <a href="https://zakaz.atbmarket.com/" target="_blank" rel="noreferrer">
              https://zakaz.atbmarket.com/
            </a>
          </li>
          <li>
            <a href="https://app.rapidreplay.co/" target="_blank" rel="noreferrer">
              https://app.rapidreplay.co/
            </a>
          </li>
          <li>
            <a href="https://github.com/Barto-dev/formurai" target="_blank" rel="noreferrer">
              https://github.com/Barto-dev/formurai
            </a>
          </li>
          <li>
            <a href="https://github.com/Barto-dev/browserIDE" target="_blank" rel="noreferrer">
              https://github.com/Barto-dev/browserIDE
            </a>
          </li>
          <li>
            <a href="https://codepen.io/Barto_i" target="_blank" rel="noreferrer">
              https://codepen.io/Barto_i
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyWorks;
