import React from "react";

import TestComponent from "./TestComponent";

describe("TestComponent", () => {
  it("should renders correctly", () => {
    expect(<TestComponent title={"test title"} />).toMatchInlineSnapshot(`
      <Memo(wrappedComponent)
        title="test title"
      />
    `);
  });
});
