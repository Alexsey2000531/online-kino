class PublicPage {
  HOME = "/";
  SELECTION = "/selection";
  FILMS = "/films";
  SERIES = "/series";
  CARTOONS = "/cartoons";
  ANIME = "/anime";
  ACTORS = "/actors";

  GENRE(params: string) {
    return `/genre/${params}`;
  }
}

export const PUBLIC_PAGE = new PublicPage();
