import React from 'react';
import {storiesOf} from '@storybook/html';
import {action} from '@storybook/addon-actions';

import reactDecorator from '../../.storybook/react-decorator';
import confirm, {hideConfirm} from '../confirm-service/confirm-service';
import Button from '../button/button';

storiesOf('Services|Confirm Service', module).
  addParameters({
    notes: ' wrapper for the Confirm component. Allows showing the confirmation dialog * without mounting the Confirm component first. Can be used outside React.',
    hermione: {captureSelector: '*[data-test~=ring-dialog]'}
  }).
  addDecorator(reactDecorator()).
  add('basic', () => {
    class ConfirmDemo extends React.Component {
      componentDidMount() {
        this.showConfirm();
      }

      componentWillUnmount() {
        hideConfirm();
      }

      showConfirm = () => confirm({text: 'Do you really wish to proceed?'}).
        then(action('Confirmed')).
        catch(action('Rejected'));

      showWithAnotherText = () => confirm({
        text: 'There is another confirmation',
        description: 'Confirmation description',
        confirmLabel: 'OK',
        rejectLabel: 'Cancel',
        cancelIsDefault: true,
        onBeforeConfirm: () => new Promise(resolve => setTimeout(resolve, 1000))
      }).
        then(action('Confirmed')).
        catch(action('Rejected'));

      render() {
        return (
          <div>
            <Button onClick={this.showConfirm}>Show confirm</Button>
            <Button onClick={this.showWithAnotherText}>Show another message</Button>
          </div>
        );
      }
    }

    return <ConfirmDemo/>;
  });
