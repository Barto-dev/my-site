import { FunctionalComponent } from 'preact';

import cn from 'classnames';

import { nesContainerClass } from '@app/utils/nesStyleClass';

const Achievements: FunctionalComponent = () => {
  return (
    <div className="wrapper-small">
      <div className={cn(nesContainerClass)}>
        <p>Achievements</p>
      </div>
    </div>
  );
};

export default Achievements;
