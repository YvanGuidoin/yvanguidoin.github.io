// Actions types

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_RECEIVED = "FETCH_DATA_RECEIVED";

// Actions creators
export function newFetchData(f) {
  return { type: FETCH_DATA, f };
}
export function newFetchDataSuccess(data) {
  return { type: FETCH_DATA_SUCCESS, data };
}
export function newFetchDataReceived(f) {
  return { type: FETCH_DATA_RECEIVED, f };
}
