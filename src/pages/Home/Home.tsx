import { FunctionalComponent } from 'preact';

import cn from 'classnames';

import { nesContainerClass } from '@app/utils/nesStyleClass';

const Home: FunctionalComponent = () => {
  return (
    <section>
      <div className="wrapper-small">
        <div className={cn(nesContainerClass)}>
          Home
        </div>
      </div>
    </section>
  );
};

export default Home;
