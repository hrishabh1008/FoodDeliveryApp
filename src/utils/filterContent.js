export default function filterContent(param) {
  const filtered = param.filter((data) => (data.rating = 4.5));
  console.log(filtered);
}
