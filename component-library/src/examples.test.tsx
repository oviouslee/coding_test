import { afterEach, beforeAll, describe, expect, test, vi } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Scenario from "./Scenario/Scenario";

describe("Modal", () => {
  const mockClose = vi.fn();

  beforeAll(() => {
    mockClose.mockClear();
  });

  afterEach(() => {
    mockClose.mockReset();
  });

  test("renders modal with expected controls", () => {
    render(<Scenario />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });

  describe("when passed onClose handler", () => {
    test("calls onClose action when pressing the ESC key", () => {
      render(<Scenario onClose={mockClose} />);
      fireEvent.keyDown(screen.getByRole("dialog"), {
        key: "Escape",
        code: "Escape",
      });
      expect(mockClose).toHaveBeenCalledTimes(1);
    });

    test("renders dismissible button that calls onClose action when clicked", async () => {
      render(<Scenario onClose={mockClose} />);
      const closeButton = screen.getByRole("button", { name: /close/i });
      await userEvent.click(closeButton);
      expect(mockClose).toHaveBeenCalledTimes(1);
    });

    test("calls onClick action when clicking outside of the modal", async () => {
      render(<Scenario data-testid="mockId" onClose={mockClose} />);
      const scrimElement = screen.queryByTestId("mockId");
      await userEvent.click(scrimElement!);
      expect(mockClose).toHaveBeenCalledTimes(1);
    });
  });
});
