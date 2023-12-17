import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title test", () => {
 it("dispalay header 1", () => {
  render(<Title>Title that is h1</Title>);
  const titleElement = screen.getByRole("heading", {
   name: /Title that is h1/i,
   level: 1,
  });
  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toBeVisible();
  expect(titleElement).toHaveTextContent("Title that is h1");
 });
 it("dispalay header 3", () => {
  render(<Title level={3}>Title that is h3</Title>);
  const titleElement = screen.getByRole("heading", {
   name: /Title that is h3/i,
   level: 3,
  });
  expect(titleElement).toBeInTheDocument();
  expect(titleElement).toBeVisible();
  expect(titleElement).toHaveTextContent("Title that is h3");
 });
});
