import { FreshContext } from "$fresh/server.ts";

// Jokes courtesy of https://punsandoneliners.com/randomness/programmer-jokes/
const JOKES = [
  "Why do Java developers often wear glasses? They can't C#.",
  "A SQL query walks into a bar, goes up to two tables and says “can I join you?”",
  "Wasn't hard to crack Forrest Gump's password. 1forrest1.",
  "I love pressing the F5 key. It's refreshing.",
  "Called IT support and a chap from Australia came to fix my network connection.  I asked “Do you come from a LAN down under?”",
  "There are 10 types of people in the world. Those who understand binary and those who don't.",
  "Why are assembly programmers often wet? They work below C level.",
  "My favourite computer based band is the Black IPs.",
  "What programme do you use to predict the music tastes of former US presidential candidates? An Al Gore Rhythm.",
  "An SEO expert walked into a bar, pub, inn, tavern, hostelry, public house.",
  "자바 개발자는 왜 종종 안경을 씁니까? 그들은 C#을 할 수 없습니다.",
  "SQL 쿼리가 술집에 들어와 두 개의 테이블로 가서 “함께 가도 될까요?” 라고 말합니다.",
  "포레스트 검프의 비밀번호를 해독하는 것은 어렵지 않았습니다. 1forrest1.",
  "F5 키를 누르는 것을 좋아합니다. 상쾌합니다.",
  "IT 지원팀에 전화했더니 호주에서 온 사람이 네트워크 연결을 고쳐주러 왔습니다. “호주 LAN에서 오셨나요?”라고 물었습니다.",
  "세상에는 10가지 유형의 사람이 있습니다. 바이너리를 이해하는 사람과 이해하지 못하는 사람입니다.",
  "어셈블리 프로그래머는 왜 종종 젖어 있을까요? 그들은 C 레벨 이하에서 일합니다.",
  "제가 가장 좋아하는 컴퓨터 기반 밴드는 Black IPs입니다.",
  "전 미국 대선 후보자의 음악 취향을 예측하는 데 어떤 프로그램을 사용하십니까? 앨 고어 리듬입니다.",
  "SEO 전문가가 술집, 술집, 여관, 선술집, 여관, 술집에 들어갔습니다.",
];

export const handler = (_req: Request, _ctx: FreshContext): Response => {
  const randomIndex = Math.floor(Math.random() * JOKES.length);
  const body = JOKES[randomIndex];
  return new Response(body);
};
