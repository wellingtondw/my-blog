import { render } from "utils/test-utils";
import { Container } from ".";

describe("<Container />", () => {
  it("Should be able to render correctly", () => {
    const { container } = render(<Container />);

    expect(container).toMatchSnapshot();
  });
});
