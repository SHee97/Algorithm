const fs = require("fs");
const n = +fs.readFileSync("dev/stdin").toString();

const start = "어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.";
const question = `"재귀함수가 뭔가요?"`;
const repeated = [
  `"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`,
  `마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`,
  `그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`,
];
const answer = `"재귀함수는 자기 자신을 호출하는 함수라네"`;
const end = "라고 답변하였지.";

const result = [start, ...recursion(n)];
console.log(result.join("\n"));

function recursion(num) {
  if (num === 0) {
    return [question, answer, end].map((e) => `${"____"}${e}`);
  } else if (num < n) {
    return [question, ...repeated, ...recursion(num - 1), end].map((e) => `${"____"}${e}`);
  } else {
    return [question, ...repeated, ...recursion(num - 1), end];
  }
}
