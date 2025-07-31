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

  cd hello-deno-02

  # Run the program
  deno run main.ts

  # Run the program and watch for file changes
  deno task dev

  # Run the tests
  deno test
```

## Create React/NextJS Project

```shell
deno run -A npm:create-next-app@latest my-next-app
cd my-next-app
deno task dev
```
