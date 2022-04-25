import { FunctionalComponent } from 'preact';

import cn from 'classnames';

import { nesContainerClass } from '@app/utils/nesStyleClass';

import styles from './Home.module.css';

const Home: FunctionalComponent = () => {
  return (
    <section>
      <div className="wrapper-small">
        <div className={cn(nesContainerClass)}>
          <p className={styles.info}>
            <span>Hello traveller, glad to see you here, make yourself comfortable and let's get to know each other.</span>
            <span>My name is Illia. I am a front-end developer and i love to build software</span>
            <span>I've been a web developer for about three and a half years. During this time I managed to work on many projects in various fields.</span>
            <span>Constantly interested in everything related to the web platform and Progressive Web Applications.</span>
            <span>I believe that the difference between the web and the native platform will soon disappear, thanks to projects like Fugu, and the people who come up with all these cool features and implement them in browsers.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
