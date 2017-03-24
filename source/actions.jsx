// Actions types

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

// Actions creators
export function newFetchData(f) {
  return { type: FETCH_DATA, f };
}
export function newFetchDataSuccess(data) {
  return { type: FETCH_DATA_SUCCESS, data };
}
