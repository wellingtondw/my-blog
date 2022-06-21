import { render, screen, fireEvent } from "utils/test-utils";
import { Header } from ".";

describe("<Header />", () => {
  it("Should be able to render correctly", () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });

  it("should be able to open/close menu", () => {
    render(<Header />);

    const fullMenuElement = screen.getByRole("navigation");

    expect(fullMenuElement).toHaveStyleRule("opacity", "0", {
      media: "(max-width: 768px)",
    });
    expect(fullMenuElement).toHaveStyleRule("pointer-events", "none", {
      media: "(max-width: 768px)",
    });

    fireEvent.click(screen.getByLabelText(/open menu/i));

    expect(fullMenuElement).toHaveStyleRule("opacity", "1", {
      media: "(max-width: 768px)",
    });
    expect(fullMenuElement).toHaveStyleRule("pointer-events", "all", {
      media: "(max-width: 768px)",
    });

    fireEvent.click(screen.getByLabelText(/close menu/i));

    expect(fullMenuElement).toHaveStyleRule("opacity", "0", {
      media: "(max-width: 768px)",
    });
    expect(fullMenuElement).toHaveStyleRule("pointer-events", "none", {
      media: "(max-width: 768px)",
    });
  });

  it("should be able to click in Buy Button", () => {
    const buyFn = jest.fn();
    render(<Header onClickBuy={buyFn} />);

    fireEvent.click(screen.getByRole("button"));

    expect(buyFn).toBeCalledTimes(1);
  });
});
