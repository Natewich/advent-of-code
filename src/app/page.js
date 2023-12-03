import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

const data = [
  {
    1: {
      stars: 2,
      link: "/2023/day-1",
    },
  },
  {
    2: {
      stars: 2,
      link: "/2023/day-2",
    },
  },
  {
    3: {
      disabled: true,
    },
  },
  {
    4: {
      disabled: true,
    },
  },
  {
    5: {
      disabled: true,
    },
  },
  {
    6: {
      disabled: true,
    },
  },
  {
    7: {
      disabled: true,
    },
  },
  {
    8: {
      disabled: true,
    },
  },
  {
    9: {
      disabled: true,
    },
  },
  {
    10: {
      disabled: true,
    },
  },
  {
    11: {
      disabled: true,
    },
  },
  {
    12: {
      disabled: true,
    },
  },
  {
    13: {
      disabled: true,
    },
  },
  {
    14: {
      disabled: true,
    },
  },
  {
    15: {
      disabled: true,
    },
  },
  {
    16: {
      disabled: true,
    },
  },
  {
    17: {
      disabled: true,
    },
  },
  {
    18: {
      disabled: true,
    },
  },
  {
    19: {
      disabled: true,
    },
  },
  {
    20: {
      disabled: true,
    },
  },
  {
    21: {
      disabled: true,
    },
  },
  {
    22: {
      disabled: true,
    },
  },
  {
    23: {
      disabled: true,
    },
  },
  {
    24: {
      disabled: true,
    },
  },
  {
    25: {
      disabled: true,
    },
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>
          Advent of Code <span>2023</span>
        </h1>
        <nav className={styles.nav}>
          {data.map((day, i) => {
            console.log(day[i + 1]);
            return (
              <>
                {day[i + 1].disabled ? (
                  <a href="#" disabled>
                    Day {i + 1}
                  </a>
                ) : (
                  <Link stars={day[i + 1].stars} href={day[i + 1].link}>
                    Day {i + 1}
                  </Link>
                )}
              </>
            );
          })}
        </nav>
      </div>
    </main>
  );
}
