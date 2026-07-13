import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import App from "./App";

describe("Simple Calculator Integration Test", () => {
  test("adds two positive numbers", () => {
    const { getByTestId } = render(<App />);

    fireEvent.changeText(getByTestId("input1"), "10");
    fireEvent.changeText(getByTestId("input2"), "15");

    fireEvent.press(getByTestId("addButton"));

    expect(getByTestId("resultText").props.children).toContain("25");
  });

  test("adds zero correctly", () => {
    const { getByTestId } = render(<App />);

    fireEvent.changeText(getByTestId("input1"), "0");
    fireEvent.changeText(getByTestId("input2"), "5");

    fireEvent.press(getByTestId("addButton"));

    expect(getByTestId("resultText").props.children).toContain("5");
  });

  test("adds negative numbers", () => {
    const { getByTestId } = render(<App />);

    fireEvent.changeText(getByTestId("input1"), "-5");
    fireEvent.changeText(getByTestId("input2"), "2");

    fireEvent.press(getByTestId("addButton"));

    expect(getByTestId("resultText").props.children).toContain("-3");
  });

  test("adds decimal numbers", () => {
    const { getByTestId } = render(<App />);

    fireEvent.changeText(getByTestId("input1"), "2.5");
    fireEvent.changeText(getByTestId("input2"), "3.5");

    fireEvent.press(getByTestId("addButton"));

    expect(getByTestId("resultText").props.children).toContain("6");
  });

  test("clears all fields", () => {
    const { getByTestId } = render(<App />);

    fireEvent.changeText(getByTestId("input1"), "20");
    fireEvent.changeText(getByTestId("input2"), "30");

    fireEvent.press(getByTestId("clearButton"));

    expect(getByTestId("input1").props.value).toBe("");
    expect(getByTestId("input2").props.value).toBe("");
    expect(getByTestId("resultText").props.children).toContain("");
  });
});
