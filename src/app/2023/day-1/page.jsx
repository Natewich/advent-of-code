import { promises as fs } from "fs";

export default async function Day1() {
  const input = await fs.readFile(process.cwd() + "/src/app/2023/day-1/input.txt", "utf8");
  const data = input.split("\n");

  function solve1() {
    var tally = [];

    for (let i = 0; i < data.length; i++) {
      var first;
      var last;

      var code = data[i].split("");
      var buffer = [];

      for (let a = 0; a < code.length; a++) {
        if (code[a] >= 0 && code[a] <= 9) {
          buffer.push(code[a]);
        }
      }

      buffer.pop();

      first = buffer[0];
      last = buffer[buffer.length - 1];

      var combo = (first + last) * 1;

      tally.push(combo);
    }

    tally.pop();

    const initialValue = 0;

    const solution = tally.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );

    return solution;
  }

  function solve2() {
    var solution = "To be solved";
    var tally = [];

    for (let i = 0; i < data.length; i++) {
      var code = data[i].split("");

      code.pop();

      var buffer = [];
      var first;
      var last;

      for (let a = 0; a < code.length; a++) {
        //if number
        if (code[a] >= 0 && code[a] <= 9) {
          buffer.push(code[a] + "");
        } else {
          //if charcters spell the number
          if (code[a] + code[a + 1] + code[a + 2] == "one") {
            code.slice(code[a], code[a + 2]);
            buffer.push("1");
          } else if (code[a] + code[a + 1] + code[a + 2] == "two") {
            code.slice(code[a], code[a + 2]);
            buffer.push("2");
          } else if (code[a] + code[a + 1] + code[a + 2] + code[a + 3] + code[a + 4] == "three") {
            code.slice(code[a], code[a + 4]);
            buffer.push("3");
          } else if (code[a] + code[a + 1] + code[a + 2] + code[a + 3] == "four") {
            code.slice(code[a], code[a + 3]);
            buffer.push("4");
          } else if (code[a] + code[a + 1] + code[a + 2] + code[a + 3] == "five") {
            code.slice(code[a], code[a + 3]);
            buffer.push("5");
          } else if (code[a] + code[a + 1] + code[a + 2] == "six") {
            code.slice(code[a], code[a + 2]);
            buffer.push("6");
          } else if (code[a] + code[a + 1] + code[a + 2] + code[a + 3] + code[a + 4] == "seven") {
            code.slice(code[a], code[a + 4]);
            buffer.push("7");
          } else if (code[a] + code[a + 1] + code[a + 2] + code[a + 3] + code[a + 4] == "eight") {
            code.slice(code[a], code[a + 4]);
            buffer.push("8");
          } else if (code[a] + code[a + 1] + code[a + 2] + code[a + 3] == "nine") {
            code.slice(code[a], code[a + 3]);
            buffer.push("9");
          }
        }
      }
      console.log(buffer, data[i]);

      first = buffer[0];
      last = buffer[buffer.length - 1];

      var combo = (first + last) * 1;

      tally.push(combo);
    }

    tally.pop();

    const initialValue = 0;

    solution = tally.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );

    return solution;
  }

  var part1 = solve1();
  var part2 = solve2();
  return (
    <div>
      <h1>Day 1</h1>
      <h2>
        Part 1: <span>{part1}</span>
      </h2>
      <h2>
        Part 2: <span>{part2}</span>
      </h2>

      <pre>
        <h2>Input</h2>
        {input}
      </pre>
    </div>
  );
}
