import Image from "next/image";
import Link from "next/link";
import css from "./header.module.css";
import Search from "../ui/Search/Search";
import { PUBLIC_PAGE } from "@/config/public-page.config";
import SelectGenre from "../ui/SelectGenre/SelectGenre";

const Header = () => {
  return (
    <header className={css.header}>
      <Link href={PUBLIC_PAGE.HOME}>
        <Image src="/Logo.svg" alt="Логотип" width={120} height={94} />
      </Link>
      <nav>
        <ul className={css.menu}>
          <li className={css.link}>
            <Link href={PUBLIC_PAGE.HOME}>Главная</Link>
          </li>
          <SelectGenre />
          <li className={css.link}>
            <Link href={PUBLIC_PAGE.FILMS}>Фильмы</Link>
          </li>
          <li className={css.link}>
            <Link href={PUBLIC_PAGE.SERIES}>Сериалы</Link>
          </li>
          <li className={css.link}>
            <Link href={PUBLIC_PAGE.CARTOONS}>Мультфильмы</Link>
          </li>
          <li className={css.link}>
            <Link href={PUBLIC_PAGE.ANIME}>Аниме</Link>
          </li>
          <li className={css.link}>
            <Link href={PUBLIC_PAGE.ACTORS}>Актеры</Link>
          </li>
        </ul>
      </nav>
      <Search placeholder="Поиск по сайту" />
    </header>
  );
};

export default Header;
