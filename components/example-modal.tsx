import React from "react"
import { Button, Modal } from "native-base"
import { useState } from "react"

export const ExampleModal = () => {
    const [showModal, setShowModal] = useState(false);
      
    return (
      <>
        <Button onPress={() => setShowModal(true)}>Show Information hello</Button>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content height={'600px'} maxHeight={'900px'}>
            <Modal.CloseButton />
            <Modal.Header>Lorem ipsum</Modal.Header>
            <Modal.Body>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Modal.Body>
            <Modal.Footer>
              <Button.Group variant="ghost" space={2}>
                <Button>Cancel</Button>
                <Button
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  OK
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </>
    );
  };