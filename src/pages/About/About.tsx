import { FunctionalComponent } from 'preact';

import styles from './About.module.css';
import { nesContainerClass } from '@app/utils/nesStyleClass';
import cn from 'classnames';
import githubLogo from '@app/assets/logo/github.png';

const About: FunctionalComponent = () => {

  return (
    <section>
      <div className="wrapper-small">
        <div className={cn(nesContainerClass)}>
          <section className="icon-list">
            <i className="nes-icon facebook is-large" />
            <img src={githubLogo} alt="" width="64" />
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
