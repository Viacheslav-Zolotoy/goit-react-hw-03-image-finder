import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow, ModalImg } from './Modal.styled';

export class Modal extends Component {
  static propTypes = {
    largeImg: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydownCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydownCloseModal);
  }

  handleKeydownCloseModal = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClickMouseCloseModal = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImg } = this.props;
    return (
      <Overlay onClick={this.handleClickMouseCloseModal}>
        <ModalWindow>
          <ModalImg src={largeImg} alt="" />
        </ModalWindow>
      </Overlay>
    );
  }
}
