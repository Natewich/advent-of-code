import { promises as fs } from "fs";

export default async function Day2() {
  const input = "";
  // const input = await fs.readFile(process.cwd() + "/src/app/2023/day-1/input.txt", "utf8");
  // const data = input.split("\n");

  function solve1() {
    var solution = "To be solved";

    return solution;
  }

  function solve2() {
    var solution = "To be solved";

    return solution;
  }

  var part1 = solve1();
  var part2 = solve2();
  return (
    <div>
      <h1>Day 2</h1>
      <h2>
        Part 1: <span>{part1}</span>
      </h2>
      <h2>
        Part 2: <span>{part2}</span>
      </h2>

      <pre>
        <h2>Input</h2>
        {input == "" ? `No input defined` : input}
      </pre>
    </div>
  );
}
