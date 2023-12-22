import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button test", () => {
 it("click on button", () => {
  const onClick = vi.fn();
  render(<Button onClick={onClick}>text</Button>);
  screen.debug();
  const buttonElement = screen.getByRole("button", { name: /text/i });
  fireEvent.click(buttonElement);
  screen.debug();
  expect(onClick).toHaveBeenCalledTimes(1);
 });
 it("disabled button", () => {
  const onClick = vi.fn();
  render(
   <Button disabled onClick={onClick}>
    text
   </Button>
  );
  screen.debug();
  const buttonElement = screen.getByRole("button", { name: /text/i });
  expect(buttonElement).toBeDisabled();
 });
 it("click on disabled button", () => {
  const onClick = vi.fn();
  render(
   <Button disabled onClick={onClick}>
    text
   </Button>
  );
  screen.debug();
  const buttonElement = screen.getByRole("button", { name: /text/i });
  fireEvent.click(buttonElement);
  screen.debug();
  expect(onClick).toHaveBeenCalledTimes(0);
 });
});
