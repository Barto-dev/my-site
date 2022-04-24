import { Link } from 'preact-router/match';

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <nav aria-label="Site navigation">
          <Link href="/">Home</Link>
          <Link href="/">My works</Link>
          <Link href="/">Technology</Link>
          <Link href="/">About</Link>
          <Link href="/">Achievements</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
