# Vanilla JS
### 1. 구조 분해 할당 에 대해 서술하시오.
> 구조 분해 할당은 배열이나 객체의 값을 쉽게 변수에 추출할 수 있게 해주는 ES6 문법입니다.

```javascript
// 배열
const [a, b] = [1, 2]; // a = 1, b = 2

// 객체
const { name, age } = { name: 'Tom', age: 30 }; // name = 'Tom', age = 30
```

### 2. Optional Channing 에 대해 서술하고 하위 호환을 위해 어떻게 표기해야 하는지 서술하시오.
> Optional Chaining(?.)은 객체의 중첩된 속성을 안전하게 접근할 수 있는 연산자입니다. 접근하려는 프로퍼티가 null 또는 undefined일 경우, 에러 대신 undefined를 반환합니다.

```javascript
const user = { profile: { name: 'Jane' } };

console.log(user.profile?.name); // 'Jane'
console.log(user.profile?.age?.value); // undefined
```
> 하위호한 표현 방식

 ```javascript
 const name = user && user.profile && user.profile.name;
```

### 3. 빈 배열에 아래 일련의 과정을 거칠 경우, 배열에 담긴 내용을 작성하시오.
1. push('a')
2. shift()
3. unshift('e')

```javascript
const arr = [];
arr.push('a');   // ['a']
arr.shift();     // []
arr.unshift('e'); // ['e']
```

> 최종 결과: ['e']

### 4. Promise 에 대해 서술하고, Promise 를 사용할 때 주의할 점을 2가지 이상 서술하시오.
> Promise는 비동기 작업의 완료 혹은 실패를 나타내는 객체로, .then, .catch, .finally 메서드를 통해 비동기 흐름을 제어할 수 있습니다.
<br />
<br />
> 주의할 점
> 1. 예외 처리를 위해 반드시 .catch() 또는 try/catch를 사용할 것
> 2. 비동기 흐름을 올바르게 await이나 .then()으로 제어하지 않으면 순서 오류 발생 가능
---
# React 과제 참고 이미지

<img width="1065" alt="스크린샷 2025-06-10 오후 7 03 51" src="https://github.com/user-attachments/assets/d2d61169-f433-44c3-b649-e421ce62f04c" />
<img width="457" alt="스크린샷 2025-06-10 오후 7 04 01" src="https://github.com/user-attachments/assets/0ec0baa7-0d7c-4849-9f93-56a599d02b52" />

---
# 심화 (알고리즘)
> 조건 설명
> 1. 모든 간선이 있는 정점들이 하나의 연결된 컴포넌트에 속해야 한다.
> 2. 홀수 차수를 갖는 정점의 개수가 0개 또는 2개여야 한다.
### 참고
<img width="369" alt="스크린샷 2025-06-10 오후 7 04 27" src="https://github.com/user-attachments/assets/9045d73d-d19d-49e1-a36b-dceb627396e8" />
