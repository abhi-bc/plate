/** @jsx jsxt */

import { createSlateEditor } from '@udecode/plate-common';
import { jsxt } from '@udecode/plate-test-utils';
import { getAutoformatOptions } from 'www/src/lib/plate/demo/plugins/autoformatOptions';

import { BaseAutoformatPlugin } from '../../../BaseAutoformatPlugin';

jsxt;

const input = (
  <fragment>
    <hp>
      ~~hello~
      <cursor />
    </hp>
  </fragment>
) as any;

const output = (
  <fragment>
    <hp>
      <htext strikethrough>hello</htext>
    </hp>
  </fragment>
) as any;

it('should autoformat', () => {
  const editor = createSlateEditor({
    plugins: [
      BaseAutoformatPlugin.configure({ options: getAutoformatOptions() }),
    ],
    value: input,
  });

  editor.insertText('~');

  expect(input.children).toEqual(output.children);
});
