"use client";
import useClickOutside from "@/hooks/useOnClickOutside";
import css from "./selectGenre.module.css";
import { useState } from "react";

interface OptionType {
  value: string;
  label: string;
}

const options: OptionType[] = [
  { value: "Боевик", label: "Боевик" },
  { value: "Военные", label: "Военные" },
  { value: "Детектив", label: "Детектив" },
  { value: "Детский", label: "Детский" },
  { value: "Драма", label: "Драма" },
  { value: "Комедия", label: "Комедия" },
  { value: "Криминал", label: "Криминал" },
  { value: "Мелодрама", label: "Мелодрама" },
  { value: "Триллер", label: "Триллер" },
  { value: "Ужасы", label: "Ужасы" },
  { value: "Фантастика", label: "Фантастика" },
  { value: "Фэнтези", label: "Фэнтези" },
];

const SelectGenre = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<OptionType>({
    value: "По жанру",
    label: "По жанру",
  });
  const selectRef = useClickOutside(() => setIsOpen(false));

  const handleSelect = (option: OptionType) => {
    setSelectedValue(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.select} ref={selectRef}>
      <button
        type="button"
        className={`${css.selectHeader} ${isOpen ? css.open : ""}`}
        onClick={toggleDropdown}
      >
        <span className={css.selectedValue}>{selectedValue.label}</span>
        <span className={`${css.arrow} ${isOpen ? css.arrowOpen : ""}`}>▼</span>
      </button>

      {isOpen && (
        <div className={css.selectDropdown}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${css.option} ${
                selectedValue.value === option.value ? css.selected : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectGenre;
