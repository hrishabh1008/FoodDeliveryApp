export default function useFetch(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => data);

  return data;
}
