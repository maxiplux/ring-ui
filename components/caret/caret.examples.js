import {storiesOf} from '@storybook/html';

import '../link/link__legacy.css';
import Caret from '../caret/caret';

storiesOf('Utilities|Caret', module).
  addParameters({
    notes: 'Allows manipulation of the caret position in a text box or a contenteditable element. Ported from [jquery-caret](https://github.com/accursoft/caret/).',
    hermione: {skip: true}
  }).
  add('basic', () => {
    const node = document.createElement('div');

    node.innerHTML = ` 
<textarea id="test-input" class="ring-input">
Lorem ipsum
dolor sit amet
</textarea>
<div><a href="" id="cursor-action" class="ring-link">Set caret position</a></div>
    `;

    const caret = new Caret(node.querySelector('#test-input'));

    node.querySelector('#cursor-action').addEventListener('click', event => {
      caret.focus();
      caret.setPosition(4);
      event.preventDefault();
    });

    return node;
  });
