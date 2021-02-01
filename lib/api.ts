const baseUrl = "https://api.rawg.io/api/games";

const baseSearchUrl = `${baseUrl}?dates=1985-01-01,1994-12-31&platform=49`;

const getGame = async (id: string | number) => {
  const res = await fetch(`${baseUrl}/${id}`);

  const json = await res.json();

  return json;
};

const getList = async (query?: string, page?: string | number) => {
  let _url = baseSearchUrl;

  if (query) {
    _url += `&search=${query}`;
  }

  if (page) {
    _url += `&page=${page}`;
  }

  const res = await fetch(_url);

  const json = await res.json();

  return json;
};

export const API = {
  getGame,
  getList
};
