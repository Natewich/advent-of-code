import { promises as fs } from "fs";

export default async function Day2() {
  const input = await fs.readFile(process.cwd() + "/src/app/2023/day-2/input.txt", "utf8");
  const data = input.split("\r\n");
  data.pop();

  var redLimit = 12;
  var greenLimit = 13;
  var blueLimit = 14;

  function solve1() {
    var solution = "To be solved";

    // console.log(data);

    var possibleGames = [];

    for (let i = 0; i < data.length; i++) {
      var gameId = data[i].split("Game ")[1].split(": ")[0];

      var grabs = data[i].split(": ")[1].split("; ");

      var grabOutcomes = [];

      for (let a = 0; a < grabs.length; a++) {
        let picks = grabs[a].split(", ");

        picks.map((pick) => {
          let count = pick.split(" ")[0];
          let color = pick.split(" ")[1];

          if (
            (color == "red" && count > redLimit) ||
            (color == "green" && count > greenLimit) ||
            (color == "blue" && count > blueLimit)
          ) {
            grabOutcomes.push(false);
          } else grabOutcomes.push(true);
        });
      }

      console.log(grabOutcomes);
      if (!grabOutcomes.includes(false)) {
        if (!possibleGames.includes(gameId * 1)) {
          possibleGames.push(gameId * 1);
        }
      }
    }

    const initialValue = 0;

    solution = possibleGames.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );

    return solution;
  }

  function solve2() {
    var solution = "To be solved";

    var outcomes = [];

    for (let i = 0; i < data.length; i++) {
      var gameId = data[i].split("Game ")[1].split(": ")[0];

      var grabs = data[i].split(": ")[1].split("; ");

      var minRed = 0;
      var minGreen = 0;
      var minBlue = 0;

      for (let a = 0; a < grabs.length; a++) {
        for (let a = 0; a < grabs.length; a++) {
          let picks = grabs[a].split(", ");

          picks.map((pick) => {
            let count = pick.split(" ")[0];
            let color = pick.split(" ")[1];

            if (color == "red" && count > minRed) {
              minRed = count * 1;
            } else if (color == "green" && count > minGreen) {
              minGreen = count * 1;
            } else if (color == "blue" && count > minBlue) {
              minBlue = count * 1;
            }
          });
        }
      }

      var outcome = { minRed, minGreen, minBlue };

      outcomes.push(outcome);
    }

    solution = 0;

    outcomes.map((outcome) => {
      var power = outcome.minRed * outcome.minGreen * outcome.minBlue;
      solution = solution + power;
    });

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
