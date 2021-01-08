import React from 'react';
import {BookstoreServiceConsumer} from "../Bookstore-Service-Context";

const withBookstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            return <Wrapped {...props} bookstoreService={bookstoreService}/>
          }
        }
      </BookstoreServiceConsumer>
    )
  }
}

export default withBookstoreService
