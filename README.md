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

4. apply를 이용해 길어진 클래스 이름을 줄이기

```css
.btn-primary {
  @apply bg-gray-500 text-black-600 dark:bg-slate-400 hover:bg-gray-300 dark:hover:bg-slate-400....
}
```

```jsx
<button className="btn-primary"></button>
```

## tailblock 이용해서 템플릿 이용하기
[tailblocks](https://tailblocks.cc/)

## Data Fetching
1. getStaticProps
첫 빌드 시 데이터를 한번 가져옴
2. getServerSideProps
데이터 변경이 있을때마다(빌드타임과 상관없이)
col-xs- : 항상 가로로 배치
col-sm- : 768px 이하에서 세로로 표시 시작
col-md : 992px 이하에서 세로로 표시 시작
col-lg- : 1200px 이하에서 세로로 표시 시작