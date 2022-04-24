import { FunctionalComponent } from 'preact';

import styles from './About.module.css';

const About: FunctionalComponent = () => {

  return (
    <section>
      <div className="wrapper">
        <div className="nes-container is-rounded is-dark">
          <p>About</p>
        </div>
      </div>
    </section>
  );
};

export default About;
