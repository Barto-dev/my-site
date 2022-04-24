import { FunctionalComponent } from 'preact';

import cn from 'classnames';

import { nesContainerClass } from '@app/utils/nesStyleClass';

const MyWorks: FunctionalComponent = () => {
  return (
    <div className="wrapper-small">
      <div className={cn(nesContainerClass)}>
        <p>My works</p>
      </div>
    </div>
  );
};

export default MyWorks;
