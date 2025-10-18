"use client";
import { useQuery } from "@tanstack/react-query";
import { moviesClass } from "../services/movies-service";
import Header from "@/components/Header/Header";

export default function Home() {
  const {
    data: movies,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: () => moviesClass.getAllFilms(),
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) return <div>Загрузка фильмов...</div>;

  if (isError)
    return <div>Ошибка: {error?.message || "Неизвестная ошибка"}</div>;

  if (!movies || movies.length === 0) {
    return <div>Фильмы не найдены</div>;
  }

  return (
    <>
      <Header />
    </>
  );
}
