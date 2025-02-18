export default function HomePage() {
  const time = new Date().toLocaleString();
  return <p>Freshly server-rendered {time}</p>;
}
