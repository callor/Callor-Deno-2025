# tailwind 설치

```shell
deno install npm:tailwindcss npm:@tailwindcss/vite
```

## `css` 파일생성

- 프로젝트 폴더에 **tailwind-input.css**(파일이름 자유)를 생성하고 다음의 CSS 를 작성한다

```css
/* tailwind-input.css */
@import "tailwindcss";
```

## `css` 파일 컴파일

- 생성한 **input.css** 파일을 컴파일하여 **/src/resources/static/css/tailwind.css**, **/src/resources/static/css/tailwind-post.css** 파일이 생성되는지 확인한다

```shell
npx @tailwindcss/cli -i ./tailwind-input.css -o ../static/css/tailwind.css --watch
npx @tailwindcss/postcss ./tailwind-input.css -o ../static/css/tailwind-post.css
```
