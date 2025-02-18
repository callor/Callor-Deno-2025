import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  const name = decodeURI(props.params.name);
  return <div>Hello {name}</div>;
}
