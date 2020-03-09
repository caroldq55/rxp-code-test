import React from "react";
import { shallow } from "enzyme";
import "jest-styled-components";

import CartItem from ".";
import { item } from "../../containers/App/__test__/fixtures";

describe("<CartItem/>", () => {
  const handleRemoveCartItemSpy = jest.fn();

  it("should render CartItem correctly", () => {
    const wrapper = shallow(
      <CartItem item={item} handleRemoveCartItem={handleRemoveCartItemSpy} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should render CartItem correctly", () => {
    const wrapper = shallow(
      <CartItem item={item} handleRemoveCartItem={handleRemoveCartItemSpy} />
    );
    const removeButton = wrapper.find('[data-test-id="removeButton"]');
    expect(removeButton).toHaveLength(1);
    removeButton.simulate("click");
    expect(handleRemoveCartItemSpy).toHaveBeenCalledTimes(1);
  });
});
