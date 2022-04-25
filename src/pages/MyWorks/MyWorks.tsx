import { FunctionalComponent } from 'preact';

import cn from 'classnames';

import { nesContainerClass } from '@app/utils/nesStyleClass';

const MyWorks: FunctionalComponent = () => {
  return (
    <div className="wrapper-small">
      <div className={cn(nesContainerClass)}>
        <ul>
          <li>https://fbclub.com.ua/</li>
          <li>https://zakaz.tdb.org.ua/</li>
          <li>https://dermacaremed.com/</li>
          <li>https://whoami.silpo.ua/</li>
          <li>https://maxbanus.com/</li>
          <li>https://zakaz.atbmarket.com/</li>
          <li>https://app.rapidreplay.co/</li>
          <li>https://github.com/Barto-dev/formurai</li>
          <li>https://github.com/Barto-dev/browserIDE</li>
          <li>https://codepen.io/Barto_i</li>
        </ul>
      </div>
    </div>
  );
};

export default MyWorks;
