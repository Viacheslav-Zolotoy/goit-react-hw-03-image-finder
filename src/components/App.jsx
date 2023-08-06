import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { fetchImg } from './Api/Fetch';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

export class App extends Component {
  state = {
    request: '',
    page: 1,
    response: [],
    isLoading: false,
    isLimitPage: false,
    largeImg: null,
    status: 'idle',
  };
  async componentDidUpdate(_, prevState) {
    const { page, request, response } = this.state;
    if (prevState.request !== request || prevState.page !== page) {
      try {
        this.setState({ status: 'pending' });
        const { dataImg, totalHits } = await fetchImg(request, page);
        this.setState({
          response: [...response, ...dataImg],
          status: 'resolved',
        });
        this.limitPage(totalHits);
      } catch (error) {
        console.error();
      } finally {
        this.setState({ status: 'idle' });
      }
    }
  }

  handleSubmit = ({ search }) => {
    if (search.trim() === '') {
      return;
    }
    this.setState({ request: search });
    this.handleReset();
  };
  handleNextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  handleReset = () => {
    this.setState({ response: [], page: 1 });
  };
  limitPage(totalHits) {
    const { response, page } = this.state;

    const limitPage = page * response.length > totalHits;
    this.setState({ isLimitPage: limitPage });
  }
  openLargeImage = largeImageURL => {
    this.setState({
      largeImg: largeImageURL,
    });
  };
  closeModal = () => {
    this.setState({ largeImg: null });
  };

  render() {
    const { response, isLimitPage, largeImg, status } = this.state;

    return (
      <>
        <div className="App">
          <Searchbar request={this.handleSubmit} />
          {status === 'pending' && <Loader />}
          <ImageGallery
            status={status}
            response={response}
            onClick={this.openLargeImage}
          />
          {response.length !== 0 && !isLimitPage && (
            <Button onClick={this.handleNextPage} />
          )}
        </div>
        {largeImg &&
          createPortal(
            <Modal largeImg={largeImg} onClose={this.closeModal} />,
            modalRoot
          )}
        <ToastContainer />
      </>
    );
  }
}
