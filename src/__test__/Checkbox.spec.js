import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import Checkbox from "../components/Checkbox";

// Clean the DOM first
beforeEach(cleanup);

jest.mock("../firebase", () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          update: jest.fn()
        }))
      }))
    }))
  }
}));

describe("<Checkbox />", () => {
  describe("Success", () => {
    it("renders the task Checkbox", () => {
      const { queryByTestId } = render(
        <Checkbox id="1" taskDesc="CheckBox test" />
      );
      expect(queryByTestId("checkbox-action")).toBeTruthy();
    });

    it("renders the task checkbox and accepts a keyDown", () => {
      const { queryByTestId } = render(
        <Checkbox id="1" taskDesc="CheckBox test" />
      );
      expect(queryByTestId("checkbox-action")).toBeTruthy();
      fireEvent.keyDown(queryByTestId("checkbox-action"));
    });

    it("renders the task checkbox and accepts a click", () => {
      const { queryByTestId } = render(
        <Checkbox id="1" taskDesc="CheckBox test" />
      );
      expect(queryByTestId("checkbox-action")).toBeTruthy();
      fireEvent.click(queryByTestId("checkbox-action"));
    });
  });
});
