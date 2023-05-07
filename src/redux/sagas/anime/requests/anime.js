import axios from "axios";
export function requestGetAnime(
  pageNumber = 1,
  pageLimit = 15,
  searchString = ""
) {
  const url = `https://api.jikan.moe/v4/characters?page=${pageNumber}&limit=${pageLimit}&q=${searchString}&order_by=favorites&sort=desc`;
  console.log(url, pageNumber);
  return axios({
    method: "GET",
    url: url,
  });
}
