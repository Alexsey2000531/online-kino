import Image from "next/image";
import css from "./search.module.css";

interface SearchProps {
  placeholder: string;
}
const Search = ({ placeholder }: SearchProps) => {
  return (
    <div className={css.search}>
      <input type="text" placeholder={placeholder} />
      <Image src="/search.svg" alt="Search logo" width={29} height={29} />
    </div>
  );
};

export default Search;
