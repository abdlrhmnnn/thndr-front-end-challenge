import {showMessage} from 'react-native-flash-message';
import {strings} from './constants';

interface NotificationType {
  title?: string;
  msg: string;
  timeout?: number;
  action?: any;
}
export const errorNoty = ({
  msg = '',
  title = strings.errors.general.failed,
  timeout = 5000,
}: NotificationType) => {
  return showMessage({
    message: title,
    description: msg,
    type: 'danger',
    duration: timeout,
  });
};
