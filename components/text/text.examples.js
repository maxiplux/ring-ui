import React from 'react';
import {storiesOf} from '@storybook/html';

import reactDecorator from '../../.storybook/react-decorator';
import Text from '../text/text';
import Group from '../group/group';

storiesOf('Components|Text', module).
  addParameters({
    notes: 'A component for rendering text content.'
  }).
  addDecorator(reactDecorator()).
  add('basic', () => (
    <Group>
      <Text>Text</Text>
      <Text info>with an info message</Text>
    </Group>
  ));
