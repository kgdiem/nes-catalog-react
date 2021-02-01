const baseUrl = "https://api.rawg.io/api/games?dates=1985-01-01,1994-12-31&platform=49";

const getList = async (query?: string, url?: string) => {
  let _url;

  if(query) {
    _url = `${baseUrl}&search=${query}`
  } else if (url) {
    _url = url;
  } else {
    _url = baseUrl;
  }

  const res = await fetch(_url);

  const json = await res.json();

  return json;
};

export const API = {
  getList
};
