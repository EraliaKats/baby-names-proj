export default function sortBabyNames(babyNameA: string, babyNameB: string) {
  if (babyNameA < babyNameB) {
    return -1;
  } else if (babyNameA > babyNameB) {
    return 1;
  } else {
    return 0;
  }
}
