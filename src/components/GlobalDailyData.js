import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ChartData from './ChartData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const GlobalDailyData = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button style={{ marginLeft: '25px' }} color='danger' onClick={toggle}>
        <span>
          <FontAwesomeIcon icon={faGlobe} /> Daily Update
        </span>
      </Button>
      <Modal size='lg' isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Global Daily Data</ModalHeader>
        <ModalBody>
          <ChartData />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default GlobalDailyData;
