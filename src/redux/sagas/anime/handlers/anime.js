import { call, put, takeEvery } from "redux-saga/effects";
import {
  getAnimeSuccess,
  getAnimeFailure,
  getAnimeFetch,
} from "../../../features/animeState";
import { requestGetAnime } from "../requests/anime";

function* worksGetAnimesFetch(action) {
  const { pageNumber, pageLimit, searchString } = action.payload;
  yield put(
    getAnimeFetch({
      loading: true,
    })
  );
  try {
    const response = yield call(
      requestGetAnime,
      pageNumber,
      pageLimit,
      searchString
    );
    const { data } = response;
    console.log(data);
    yield put(getAnimeSuccess(data));
  } catch (error) {
    yield put(
      getAnimeFailure(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong"
      )
    );
  }
}

export function* watchAnimeSaga() {
  yield takeEvery("GET_ANIMES", worksGetAnimesFetch);
}
