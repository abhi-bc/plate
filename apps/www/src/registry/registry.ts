import { Registry } from './schema';

const ui: Registry = [
  {
    name: 'editor',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/editor.tsx'],
  },
  {
    name: 'cloud',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-cloud'],
    registryDependencies: [],
    files: [
      'plate-ui/cloud.tsx',
      'plate-ui/cloud-attachment-element.tsx',
      'plate-ui/cloud-image-element.tsx',
      'plate-ui/cloud-resize-controls.tsx',
      'plate-ui/cloud-status-bar.tsx',
      'plate-ui/cloud-toolbar-buttons.tsx',
    ],
  },
  {
    name: 'code-block-element',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-code-block'],
    registryDependencies: ['command'],
    files: [
      'plate-ui/code-block-element.tsx',
      'plate-ui/code-block-element.css',
      'plate-ui/code-block-combobox.tsx',
    ],
  },
  {
    name: 'color-dropdown-menu',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [
      'dropdown-menu',
      'toolbar',
      'separator',
      'button',
      'tooltip',
    ],
    files: [
      'plate-ui/color-dropdown-menu.tsx',
      'plate-ui/color-constants.ts',
      'plate-ui/color-dropdown-menu-items.tsx',
      'plate-ui/color-input.tsx',
      'plate-ui/color-picker.tsx',
      'plate-ui/colors-custom.tsx',
    ],
  },
  {
    name: 'comments-popover',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-comments'],
    registryDependencies: ['popover', 'avatar'],
    files: [
      'plate-ui/comments-popover.tsx',
      'plate-ui/comment-avatar.tsx',
      'plate-ui/comment-create-form.tsx',
      'plate-ui/comment-item.tsx',
      'plate-ui/comment-more-dropdown.tsx',
      'plate-ui/comment-reply-items.tsx',
      'plate-ui/comment-resolve-button.tsx',
      'plate-ui/comment-value.tsx',
    ],
  },
  {
    name: 'draggable',
    type: 'components:plate-ui',
    dependencies: [
      '@udecode/plate-dnd',
      'react-dnd',
      'react-dnd-html5-backend',
    ],
    registryDependencies: ['tooltip'],
    files: ['plate-ui/draggable.tsx', 'plate-ui/with-draggables.tsx'],
  },
  {
    name: 'emoji-dropdown-menu',
    type: 'components:plate-ui',
    dependencies: ['@radix-ui/react-popover'],
    registryDependencies: ['toolbar'],

    files: [
      'plate-ui/emoji-dropdown-menu.tsx',
      'plate-ui/emoji-toolbar-dropdown.tsx',
      'plate-ui/emoji-icons.tsx',
      'plate-ui/emoji-picker.tsx',
      'plate-ui/emoji-picker-content.tsx',
      'plate-ui/emoji-picker-navigation.tsx',
      'plate-ui/emoji-picker-preview.tsx',
      'plate-ui/emoji-picker-search-and-clear.tsx',
      'plate-ui/emoji-picker-search-bar.tsx',
    ],
  },
  {
    name: 'align-dropdown-menu',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-alignment'],
    registryDependencies: ['dropdown-menu', 'toolbar'],
    files: ['plate-ui/align-dropdown-menu.tsx'],
  },
  {
    name: 'avatar',
    type: 'components:plate-ui',
    dependencies: ['@radix-ui/react-avatar'],
    registryDependencies: [],
    files: ['plate-ui/avatar.tsx'],
  },
  {
    name: 'blockquote-element',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-block-quote'],
    registryDependencies: [],
    files: ['plate-ui/blockquote-element.tsx'],
  },
  {
    name: 'button',
    type: 'components:plate-ui',
    dependencies: ['@radix-ui/react-slot'],
    registryDependencies: [],
    files: ['plate-ui/button.tsx'],
  },
  {
    name: 'caption',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-caption'],
    registryDependencies: [],
    files: ['plate-ui/caption.tsx'],
  },
  {
    name: 'checkbox',
    type: 'components:plate-ui',
    dependencies: ['@radix-ui/react-checkbox'],
    registryDependencies: [],
    files: ['plate-ui/checkbox.tsx'],
  },
  {
    name: 'code-leaf',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-basic-marks'],
    registryDependencies: [],
    files: ['plate-ui/code-leaf.tsx'],
  },
  {
    name: 'code-line-element',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-code-block'],
    registryDependencies: [],
    files: ['plate-ui/code-line-element.tsx'],
  },
  {
    name: 'code-syntax-leaf',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-code-block'],
    registryDependencies: [],
    files: ['plate-ui/code-syntax-leaf.tsx'],
  },
  {
    name: 'combobox',
    type: 'components:plate-ui',
    dependencies: [
      '@radix-ui/react-popover',
      '@udecode/plate-combobox',
      '@udecode/plate-floating',
    ],
    registryDependencies: [],
    files: ['plate-ui/combobox.tsx'],
  },
  {
    name: 'command',
    type: 'components:plate-ui',
    dependencies: ['cmdk'],
    registryDependencies: ['dialog'],
    files: ['plate-ui/command.tsx'],
  },
  {
    name: 'comment-leaf',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-comments'],
    registryDependencies: [],
    files: ['plate-ui/comment-leaf.tsx'],
  },
  {
    name: 'comment-toolbar-button',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/comment-toolbar-button.tsx'],
  },
  {
    name: 'cursor-overlay',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/cursor-overlay.tsx'],
  },
  {
    name: 'dialog',
    type: 'components:plate-ui',
    dependencies: ['@radix-ui/react-dialog'],
    registryDependencies: [],
    files: ['plate-ui/dialog.tsx'],
  },
  {
    name: 'dropdown-menu',
    type: 'components:plate-ui',
    dependencies: ['@radix-ui/react-dropdown-menu'],
    registryDependencies: [],
    files: ['plate-ui/dropdown-menu.tsx'],
  },

  {
    name: 'emoji-combobox',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-combobox'],
    registryDependencies: [],
    files: ['plate-ui/emoji-combobox.tsx'],
  },
  {
    name: 'excalidraw-element',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-excalidraw'],
    registryDependencies: [],
    files: ['plate-ui/excalidraw-element.tsx'],
  },
  {
    name: 'fixed-toolbar',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: ['toolbar'],
    files: ['plate-ui/fixed-toolbar.tsx'],
  },
  {
    name: 'fixed-toolbar-buttons',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-basic-marks'],
    registryDependencies: [
      'toolbar',
      'insert-dropdown-menu',
      'mark-toolbar-button',
      'mode-dropdown-menu',
      'turn-into-dropdown-menu',
    ],
    files: ['plate-ui/fixed-toolbar-buttons.tsx'],
  },
  {
    name: 'floating-toolbar',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-floating'],
    registryDependencies: ['toolbar'],
    files: ['plate-ui/floating-toolbar.tsx'],
  },
  {
    name: 'floating-toolbar-buttons',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-basic-marks'],
    registryDependencies: [
      'mark-toolbar-button',
      'more-dropdown-menu',
      'turn-into-dropdown-menu',
    ],
    files: ['plate-ui/floating-toolbar-buttons.tsx'],
  },
  {
    name: 'heading-element',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-heading'],
    registryDependencies: [],
    files: ['plate-ui/heading-element.tsx'],
  },
  {
    name: 'highlight-leaf',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-highlight'],
    registryDependencies: [],
    files: ['plate-ui/highlight-leaf.tsx'],
  },
  {
    name: 'hr-element',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-horizontal-rule'],
    registryDependencies: [],
    files: ['plate-ui/hr-element.tsx'],
  },
  {
    name: 'image-element',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-media'],
    registryDependencies: ['media-popover', 'caption', 'resizable'],
    files: ['plate-ui/image-element.tsx'],
  },
  {
    name: 'indent-list-toolbar-button',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-indent-list'],
    registryDependencies: ['toolbar'],
    files: ['plate-ui/indent-list-toolbar-button.tsx'],
  },
  {
    name: 'indent-toolbar-button',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-indent'],
    registryDependencies: ['toolbar'],
    files: ['plate-ui/indent-toolbar-button.tsx'],
  },
  {
    name: 'input',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: [],
    files: ['plate-ui/input.tsx'],
  },
  {
    name: 'insert-dropdown-menu',
    type: 'components:plate-ui',
    dependencies: [
      '@udecode/plate-block-quote',
      '@udecode/plate-heading',
      '@udecode/plate-paragraph',
    ],
    registryDependencies: ['dropdown-menu', 'toolbar'],
    files: ['plate-ui/insert-dropdown-menu.tsx'],
  },
  {
    name: 'kbd-leaf',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-kbd'],
    registryDependencies: [],
    files: ['plate-ui/kbd-leaf.tsx'],
  },
  {
    name: 'line-height-dropdown-menu',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-line-height'],
    registryDependencies: ['toolbar', 'dropdown-menu'],
    files: ['plate-ui/line-height-dropdown-menu.tsx'],
  },
  {
    name: 'link-element',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-link'],
    registryDependencies: [],
    files: ['plate-ui/link-element.tsx'],
  },
  {
    name: 'link-floating-toolbar',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-link'],
    registryDependencies: ['button', 'input', 'popover', 'separator'],
    files: ['plate-ui/link-floating-toolbar.tsx'],
  },
  {
    name: 'link-toolbar-button',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-link'],
    registryDependencies: ['toolbar'],
    files: ['plate-ui/link-toolbar-button.tsx'],
  },
  {
    name: 'list-element',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-list'],
    registryDependencies: [],
    files: ['plate-ui/list-element.tsx'],
  },
  {
    name: 'list-toolbar-button',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-list'],
    registryDependencies: ['toolbar'],
    files: ['plate-ui/list-toolbar-button.tsx'],
  },
  {
    name: 'mark-toolbar-button',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-basic-marks'],
    registryDependencies: ['toolbar'],
    files: ['plate-ui/mark-toolbar-button.tsx'],
  },
  {
    name: 'media-embed-element',
    type: 'components:plate-ui',
    dependencies: [
      '@udecode/plate-media',
      'react-tweet',
      'react-lite-youtube-embed',
    ],
    registryDependencies: ['media-popover', 'caption', 'resizable'],
    files: ['plate-ui/media-embed-element.tsx'],
  },
  {
    name: 'media-popover',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-media'],
    registryDependencies: ['button', 'input', 'popover', 'separator'],
    files: ['plate-ui/media-popover.tsx'],
  },
  {
    name: 'media-toolbar-button',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-media'],
    registryDependencies: ['toolbar'],
    files: ['plate-ui/media-toolbar-button.tsx'],
  },
  {
    name: 'mention-combobox',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-mention', '@udecode/plate-combobox'],
    registryDependencies: ['combobox'],
    files: ['plate-ui/mention-combobox.tsx'],
  },
  {
    name: 'mention-element',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-mention'],
    registryDependencies: [],
    files: ['plate-ui/mention-element.tsx'],
  },
  {
    name: 'mention-input-element',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-mention'],
    registryDependencies: [],
    files: ['plate-ui/mention-input-element.tsx'],
  },
  {
    name: 'mode-dropdown-menu',
    type: 'components:plate-ui',
    dependencies: [],
    registryDependencies: ['dropdown-menu', 'toolbar'],
    files: ['plate-ui/mode-dropdown-menu.tsx'],
  },
  {
    name: 'more-dropdown-menu',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-basic-marks'],
    registryDependencies: ['dropdown-menu', 'toolbar'],
    files: ['plate-ui/more-dropdown-menu.tsx'],
  },
  {
    name: 'outdent-toolbar-button',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-indent'],
    registryDependencies: ['toolbar'],
    files: ['plate-ui/outdent-toolbar-button.tsx'],
  },
  {
    name: 'paragraph-element',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-paragraph'],
    registryDependencies: [],
    files: ['plate-ui/paragraph-element.tsx'],
  },
  {
    name: 'placeholder',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-heading'],
    registryDependencies: ['paragraph-element'],
    files: ['plate-ui/placeholder.tsx'],
  },
  {
    name: 'popover',
    type: 'components:plate-ui',
    dependencies: ['@radix-ui/react-popover'],
    registryDependencies: [],
    files: ['plate-ui/popover.tsx'],
  },
  {
    name: 'search-highlight-leaf',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-find-replace'],
    registryDependencies: [],
    files: ['plate-ui/search-highlight-leaf.tsx'],
  },
  {
    name: 'separator',
    type: 'components:plate-ui',
    dependencies: ['@radix-ui/react-separator'],
    registryDependencies: [],
    files: ['plate-ui/separator.tsx'],
  },
  {
    name: 'table-cell-element',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-table'],
    registryDependencies: ['resizable'],
    files: ['plate-ui/table-cell-element.tsx'],
  },
  {
    name: 'table-dropdown-menu',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-table'],
    registryDependencies: ['dropdown-menu', 'toolbar'],
    files: ['plate-ui/table-dropdown-menu.tsx'],
  },

  {
    name: 'table-element',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-table'],
    registryDependencies: ['dropdown-menu'],
    files: ['plate-ui/table-element.tsx'],
  },
  {
    name: 'table-row-element',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-table'],
    registryDependencies: [],
    files: ['plate-ui/table-row-element.tsx'],
  },
  {
    name: 'todo-list-element',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-list'],
    registryDependencies: ['checkbox'],
    files: ['plate-ui/todo-list-element.tsx'],
  },
  {
    name: 'toolbar',
    type: 'components:plate-ui',
    dependencies: ['@radix-ui/react-toolbar'],
    registryDependencies: ['tooltip', 'separator'],
    files: ['plate-ui/toolbar.tsx'],
  },
  {
    name: 'tooltip',
    type: 'components:plate-ui',
    dependencies: ['@radix-ui/react-tooltip'],
    registryDependencies: [],
    files: ['plate-ui/tooltip.tsx'],
  },
  {
    name: 'turn-into-dropdown-menu',
    type: 'components:plate-ui',
    dependencies: [
      '@udecode/plate-block-quote',
      '@udecode/plate-heading',
      '@udecode/plate-paragraph',
    ],
    registryDependencies: ['dropdown-menu', 'toolbar'],
    files: ['plate-ui/turn-into-dropdown-menu.tsx'],
  },
  {
    name: 'resizable',
    type: 'components:plate-ui',
    dependencies: ['@udecode/plate-resizable'],
    registryDependencies: [],
    files: ['plate-ui/resizable.tsx'],
  },
];

const example: Registry = [
  {
    name: 'editor-default',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/editor-default.tsx'],
  },
  {
    name: 'editor-disabled',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/editor-disabled.tsx'],
  },
  {
    name: 'editor-ghost',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/editor-ghost.tsx'],
  },
  {
    name: 'editor-label',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/editor-label.tsx'],
  },
  {
    name: 'editor-text',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/editor-text.tsx'],
  },
  {
    name: 'editor-button',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/editor-button.tsx'],
  },
  {
    name: 'editor-form',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/editor-form.tsx'],
  },
  {
    name: 'basic-editor-default-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/basic-editor-default-demo.tsx'],
  },
  {
    name: 'basic-editor-styling-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/basic-editor-styling-demo.tsx'],
  },
  {
    name: 'basic-editor-handler-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/basic-editor-handler-demo.tsx'],
  },
  {
    name: 'basic-editor-value-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/basic-editor-value-demo.tsx'],
  },
  {
    name: 'basic-plugins-components-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/basic-plugins-components-demo.tsx'],
  },
  {
    name: 'basic-plugins-default-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/basic-plugins-default-demo.tsx'],
  },
  {
    name: 'cloud-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/cloud-demo.tsx'],
  },
  {
    name: 'editable-voids-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/editable-voids-demo.tsx'],
  },
  {
    name: 'find-replace-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/find-replace-demo.tsx'],
  },
  {
    name: 'hundreds-blocks-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/hundreds-blocks-demo.tsx'],
  },
  {
    name: 'hundreds-editors-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/hundreds-editors-demo.tsx'],
  },
  {
    name: 'iframe-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/iframe-demo.tsx'],
  },
  {
    name: 'mode-toggle',
    type: 'components:example',
    files: ['example/mode-toggle.tsx'],
  },
  {
    name: 'multiple-editors-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/multiple-editors-demo.tsx'],
  },
  {
    name: 'version-history-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/version-history-demo.tsx'],
  },
  {
    name: 'playground-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/playground-demo.tsx'],
  },
  {
    name: 'preview-md-demo',
    type: 'components:example',
    registryDependencies: [],
    files: ['example/preview-md-demo.tsx'],
  },
  {
    name: 'globals',
    type: 'components:component',
    external: true,
    files: ['styles/globals.css'],
  },
  {
    name: 'plate-types',
    type: 'components:component',
    external: true,
    files: ['types/plate-types.ts'],
  },
];

export const registry: Registry = [...ui, ...example];
