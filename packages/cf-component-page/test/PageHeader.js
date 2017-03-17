import React from "react";
import renderer from "react-test-renderer";
import felaTestContext from "../../../styleguide/felaTestContext";
import { applyTheme } from "cf-style-container";
import {
  PageHeader as PageHeaderUnstyled,
  PageHeaderTheme
} from "cf-component-page";

const PageHeader = applyTheme(PageHeaderUnstyled, PageHeaderTheme);

test("should render title", () => {
  const component = renderer.create(
    felaTestContext(<PageHeader title="Title" />)
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test("should render title/subtitle", () => {
  const component = renderer.create(
    felaTestContext(<PageHeader title="Title" subtitle="Subtitle" />)
  );
  expect(component.toJSON()).toMatchSnapshot();
});
