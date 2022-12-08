# Next.js Portfolio

## tailwindcss 설치
1. dependencies 설치
```sh
$ npm i -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```
2. config파일 설정
```js
// tailwindcss init 명령어를 통해 생성된 tailwind.config.js 파일
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
3. global css 수정
```css
/* styles/globals.css에 아래 내용 추가 */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```