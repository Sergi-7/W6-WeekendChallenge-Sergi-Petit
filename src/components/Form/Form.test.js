import Form from "./Form";
import renderWithProviders from "../../utils/test-utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given a Form component", () => {
  describe("When it's rendered", () => {
    test("Then it should display four inputs and a button", () => {
      renderWithProviders(<Form />);

      const nameInput = screen.getByLabelText("Robot Name :");
      const imageInput = screen.getByLabelText("Image Url :");
      const speedInput = screen.getByLabelText("Speed :");
      const staminaInput = screen.getByLabelText("Stamina :");
      const button = screen.getByRole("button");

      expect(nameInput).toBeInTheDocument();
      expect(imageInput).toBeInTheDocument();
      expect(speedInput).toBeInTheDocument();
      expect(staminaInput).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
  describe("When the user types in the name input", () => {
    test("Then it should render the input with the typed text inside", () => {
      renderWithProviders(<Form />);
      const typedWord = "figatablo dels col·lons";

      const nameInput = screen.getByLabelText("Robot Name :");
      userEvent.type(nameInput, typedWord);

      expect(nameInput).toHaveValue(typedWord);
    });
  });
});
