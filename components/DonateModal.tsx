import { useState } from 'react'

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap"

import CheckoutForm from '../components/CheckoutForm'

function DonateModal() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        className='sidebar__btn_donate'
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        Donate
      </Button>
      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Make a Donation to Amor de 4 Patas
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalBody>
          <CheckoutForm />
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            type="button"
            onClick={() => setModalOpen(!modalOpen)}
          >
            Close
          </Button>
          <Button color="primary" type="button">
            Save changes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default DonateModal;