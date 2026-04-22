import { Link } from 'react-router-dom';
import Container from './Container.jsx';
import { BASE_URL, CURRENT_YEAR } from '../data/constants.js';

export default function Nav() {
  const base = BASE_URL;
  return (
    <div className="sticky top-0 z-50 bg-ink-900 border-b border-ink-700">
      <Container className="flex items-center justify-between gap-4 flex-wrap py-3 text-[12px] tracking-[0.14em] uppercase">
        <Link className="flex items-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-imps-red focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 rounded-sm" to="/">
          <img src={`${base}imps-primary-light.svg`} alt="IMPS" className="h-8 sm:h-10 block" />
        </Link>
        <nav className="hidden md:flex gap-7 text-ink-300">
          <Link className="hover:text-imps-red focus-visible:text-imps-red focus-visible:outline-none focus-visible:underline" to="/#services">services</Link>
          <Link className="hover:text-imps-red focus-visible:text-imps-red focus-visible:outline-none focus-visible:underline" to="/#work">work</Link>
          <Link className="hover:text-imps-red focus-visible:text-imps-red focus-visible:outline-none focus-visible:underline" to="/#process">process</Link>
          <Link className="hover:text-imps-red focus-visible:text-imps-red focus-visible:outline-none focus-visible:underline" to="/#about">about</Link>
        </nav>
        <div className="text-[#3F8F5F] text-[10px] sm:text-[12px] whitespace-nowrap">
          <span className="status-dot inline-block w-2 h-2 rounded-full bg-[#3F8F5F] mr-2 ring-4 ring-[#3F8F5F]/20 align-middle"></span>
          ACCEPTING — {CURRENT_YEAR}
        </div>
      </Container>
    </div>
  );
}
