import { FunctionalComponent } from 'preact';

import cn from 'classnames';

import { nesContainerClass } from '@app/utils/nesStyleClass';

import styles from './Achievments.module.css';

const Achievements: FunctionalComponent = () => {
  return (
    <div className="wrapper-small">
      <section className={styles.learn}>
        <div className={cn(nesContainerClass)}>
          <p>Now I am learning</p>
          <a href="https://advancedreact.com/">https://advancedreact.com/</a>
        </div>
      </section>

      <div className={cn(nesContainerClass)}>
        <p>Courses, workshops, conferences</p>
        <a href="https://advancedreact.com/">https://advancedreact.com/</a>
      </div>
    </div>
  );
};

export default Achievements;
