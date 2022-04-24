import { FunctionalComponent } from 'preact';

import cn from 'classnames';

import { nesContainerClass } from '@app/utils/nesStyleClass';

const Technology: FunctionalComponent = () => {
  return (
    <div className="wrapper-small">
      <div className={cn(nesContainerClass)}>
        <div className="lists">
          <ul className="nes-list is-disc">
            <li>Good morning.</li>
            <li>Thou hast had a good night's sleep, I hope.</li>
            <li>Thou hast had a good afternoon</li>
            <li>Good night.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technology;
