import { fixture, expect, html } from '../index.js';
import '../demo/my-element.js';

describe('my-element', () => {
  it('renders correctly', async () => {
    const element = await fixture(
      html`
        <my-element></my-element>
      `,
    );
    // @ts-ignore
    await element.getMessage();
    // @ts-ignore
    await element.updateComplete;

    expect(element).shadowDom.to.equalSnapshot();
  });
});
