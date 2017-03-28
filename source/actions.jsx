// Actions types

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_RECEIVED = "FETCH_DATA_RECEIVED";
export const SCROLL_KEY_CHANGE = "SCROLL_KEY_CHANGE";

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
export function newScrollKeyChange(n) {
  return { type: SCROLL_KEY_CHANGE, n };
}
