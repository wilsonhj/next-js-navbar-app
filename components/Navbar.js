import Link from 'next/link';

const Navbar = () => {
  const styles = {
    display: "flex",
    background: "grey",
    justifyContent: "space-between"
  };
  return (
    <div style={styles}>
      <Link href='/'>
        <a>Home Page</a>
      </Link>
      <Link href='/about'>
        <a>About a Link</a>
      </Link>
      <Link href='/contact'>
        <a>Contact Page</a>
      </Link>
    </div>
  );
};

export default Navbar;