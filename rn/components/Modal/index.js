import ModalBasics from '../ModalBasics';
import ModalDrawerView from '../ModalDrawerView';
import ModalTarget from '../ModalTarget';
import ModalView from '../ModalView';
import Alert from '../Alert';
import Prompt from '../Prompt';

export default class Modal {
  static View = ModalView;

  static DrawerView = ModalDrawerView;

  static alert = Alert;

  static prompt = Prompt;

  static show = ModalBasics.show;

  static remove = ModalBasics.remove;
}
