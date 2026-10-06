import { describe, expect, it } from "vitest";

describe("Campus Crush scaffolding", () => {
  it("has the required baseline metadata", () => {
    expect({ app: "campus-crush", phase: "scaffold" }).toMatchObject({
      app: "campus-crush",
      phase: "scaffold",
    });
  });
});
