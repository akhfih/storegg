import Image from 'next/image';
import Auth from './Auth';
import Menu from './Menu';
import ToggleMenu from './ToggleMenu';

export default function index() {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <Image src="/icon/logo.svg" width={60} height={60} />
          </a>
          <ToggleMenu />
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <Menu title="Home" active href="/" />
              <Menu title="Games" href="/Games" />
              <Menu title="Rewards" href="/rewards" />
              <Menu title="Discover" href="/discover" />
              <Menu title="Global Rank" href="/global-rank" />

              <Auth />

            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
