import { FunctionalComponent } from 'preact';

import cn from 'classnames';

import data from '@app/db/achievements.json';
import { getLocalDate } from '@app/utils/getLocalDate';
import { nesContainerClass } from '@app/utils/nesStyleClass';

import styles from './Achievments.module.css';

const Achievements: FunctionalComponent = () => {
  return (
    <div className="wrapper-small">
      <section className={styles.learn}>
        <h2 className={styles.title}>Now I am learning</h2>
        <div className={cn(nesContainerClass)}>
          <a href="https://advancedreact.com/">https://advancedreact.com/</a>
        </div>
      </section>

      <h2 className={styles.title}>Courses, workshops, conferences</h2>
      <div className={cn(nesContainerClass)}>
        <ul className={styles.learned}>
          {data.achievements.map((item) => (
            <li className={styles.learnedItem} key={item.name}>
              <a className={styles.learnedLink} href={item.link}>
                <span>{item.name}</span>
              </a>
              <time dateTime={item.date} className={styles.date}>{getLocalDate(item.date)}</time>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
