import Head from 'next/head';
import Link from 'next/link';
const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + '- Amazona' : 'Amazona'}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between items-center px-4 shadow-md">
            <Link legacyBehavior href={'/'}>
              <a legas className="font-lg  font-bold">
                amazona
              </a>
            </Link>
            <div>
              <Link legacyBehavior href={'/cart'}>
                <a className="p-2">Cart</a>
              </Link>
              <Link legacyBehavior href={'/login'}>
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10  shadow-inner">
          Copyritht &#169; 2023 Amazona Developer Rowshan
        </footer>
      </div>
    </>
  );
};

export default Layout;
