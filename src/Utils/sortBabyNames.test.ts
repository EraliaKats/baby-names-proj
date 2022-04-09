import sortBabyNames from "./sortBabyNames";

test("sortBabyNames returns 1 when nameB should be before nameA", () => {
  expect(sortBabyNames("Zahra", "Eralia")).toBe(1);
});

test("sortBabyNames returns -1 when nameB should be after nameA", () => {
  expect(sortBabyNames("Abdul", "Eralia")).toBe(-1);
});

test("sortBabyNames returns 0 when it's the same name", () => {
  expect(sortBabyNames("Eralia", "Eralia")).toBe(0);
});
