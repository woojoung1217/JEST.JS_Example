describe("expect test", () => {
  it("37 to equals to 37 ", () => {
    expect(37).toBe(37);
  });

  it("{age : 39 }to equals to {age : 39} ", () => {
    expect({ age: 39 }).toEqual({ age: 39 });
  });

  it(".toHaveLength ", () => {
    expect("hello").toHaveLength(5);
  });
  it(".toHaveProperty ", () => {
    expect({ name: "mark" }).toHaveProperty("name");
    expect({ name: "mark" }).toHaveProperty("name", "mark");
  });

  it(".toBeDefined ", () => {
    expect({ name: "mark" }.name).toBeDefined();
    expect({ name: "mark", age: 29 }.age).toBeDefined();
  });
});
