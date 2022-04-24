import { FunctionalComponent } from 'preact';

import styles from './About.module.css';
import { nesContainerClass } from '@app/utils/nesStyleClass';
import cn from 'classnames';

const About: FunctionalComponent = () => {

  return (
    <section>
      <div className="wrapper-small">
        <div className={cn(nesContainerClass)}>
          About
          <section className="icon-list">
            <i className="nes-icon facebook is-large"></i>
            <i className="nes-icon instagram is-large"></i>
            <i className="nes-icon github is-large"></i>
            <i className="nes-icon gmail is-large"></i>
            <i className="nes-icon linkedin is-large"></i>
            <i className="nes-icon whatsapp is-large"></i>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
