/** @jsx jsx */

import { BoldPlugin } from '@udecode/plate-basic-marks';
import { jsx } from '@udecode/plate-test-utils';

import { createPlateEditor } from '../editor';
import { onKeyDownToggleMark } from './onKeyDownToggleMark';

jsx;

const input = (
  <editor>
    <hp>
      t<anchor />
      est
      <focus />
    </hp>
  </editor>
) as any;

const event = new KeyboardEvent('keydown') as any;

const output = (
  <editor>
    <hp>
      t<anchor />
      est
      <focus />
    </hp>
  </editor>
) as any;

const editor = createPlateEditor({
  editor: input,
  plugins: [
    BoldPlugin.configure({
      options: {
        hotkey: 'enter',
      },
    }),
  ],
});

it('should be', () => {
  onKeyDownToggleMark({
    api: editor.api,
    editor,
    event,
    plugin: editor.getPlugin(BoldPlugin),
  });
  expect(editor.children).toEqual(output.children);
  expect(editor.selection).toEqual(output.selection);
});
