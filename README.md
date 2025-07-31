# Deno 2025 프로젝트

![Callor Deno](./images/my-dino.png)

Javascript 런타임의 새로운 패러다임을 제시하는 Deno 가 2024년 10월 2.0 버전을 출시했다.
2018년 첫 공개 이후 약 6년만의 새로운 업데이트 이다.
2025년 Deno 프로젝트를 새롭게 시작해 본다

> Deno 2.4: July 2, 2025

## Start

### install deno : `bash shell`

```shell
curl -fsSL https://deno.land/install.sh | sh
```

### install deno : `powershell admin`

```shell
irm https://deno.land/install.ps1 | iex
```

### upgrade deno

```shell
deno upgrade
```

## vsCode Extention

![alt text](./images/image.png)

## Create Project

```shell
deno init [project-name]

✅ Project initialized

Run these commands to get started

  cd [project-name]

  # Run the program
  deno run main.ts

  # Run the program and watch for file changes
  deno task dev

  # Run the tests
  deno test
```

## Create React/NextJS Project

```shell
deno run -A npm:create-next-app@latest [project]
cd [project]
deno task dev
```

## Create fresh Project

Fresh는 Deno에서 가장 널리 사용되는 웹 프레임워크입니다. 기본적으로 클라이언트에 JavaScript를 전송하지 않는 모델을 사용합니다.

```shell
deno run -A -r https://fresh.deno.dev
cd [project-name]
deno task start
```

## Create Astro Project

Astro는 개발자가 빠르고 가벼운 웹사이트를 만들 수 있는 정적 사이트 생성기입니다.

```shell
deno run -A npm:create-astro [project-name]
cd [project-name]
deno task dev
```

## Create Vite Project

Vite는 브라우저에서 직접 실행할 수 있는 네이티브 ES 모듈을 통해 코드를 제공하는 웹 개발 빌드 도구입니다. Vite는 Deno를 사용하여 최신 웹 애플리케이션을 구축하는 데 매우 유용한 도구입니다.

```shell
deno run -A npm:create-vite@latest [project-name]
cd [project-name]
deno install
deno task dev
```

## Create Lume Project

Lume은 Jekyll이나 Eleventy 등 다른 정적 사이트 생성기에서 영감을 받은 Deno용 정적 사이트 생성기입니다.

```shell
mkdir [project-name]
cd [project-name]
deno run -A https://lume.land/init.ts
deno task serve
```

## Create Docusaurus Project

Docusaurus는 기술 문서 웹사이트에 최적화된 정적 사이트 생성기입니다.

- **yarn**, **pnpm**, **bun** 을 먼저 설치해야 한다. 그렇지 않으면 **package-manager** 를 지정해야 한다

```shell
npm run -g yarn
```

- 다음 명령으로 **package-manager** 를 지정할 수 있다

```shell
deno run -A npm:create-docusaurus@latest [project-name] classic
deno run -A npm:create-docusaurus@latest -p npm [project-name] classic
deno run -A npm:create-docusaurus@latest -p pnpm [project-name] classic
deno run -A npm:create-docusaurus@latest -p yarn [project-name] classic
deno run -A npm:create-docusaurus@latest -p bun [project-name] classic
```

```shell
cd [project-name]
deno task start
```

## Create Hono Project

Hono는 Express와 Sinatra의 전통을 따르는 가벼운 웹 앱 프레임워크입니다.

```shell
deno run -A npm:create-hono@latest [project-name]
cd [project-name]
deno task start
```

## Create Oak Project

Oak는 Deno에서 HTTP를 처리하기 위한 미들웨어 프레임워크입니다. Oak는 프런트엔드 애플리케이션과 잠재적인 데이터베이스 또는 기타 데이터 소스(예: REST API, GraphQL API)를 연결하는 연결 고리 역할을 합니다.

- **server.ts**

```js
import { Application } from "jsr:@oak/oak/application";
import { Router } from "jsr:@oak/oak/router";

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = `<!DOCTYPE html>
    <html>
      <head><title>Hello oak!</title><head>
      <body>
        <h1>Hello oak!</h1>
      </body>
    </html>
  `;
});

const app = new Application();
const port = 8080;

app.use(router.routes());
app.use(router.allowedMethods());
console.log(`Server running on http://localhost:${port}`);

app.listen({ port: port });
```

```shell
deno run --allow-net server.ts
```
