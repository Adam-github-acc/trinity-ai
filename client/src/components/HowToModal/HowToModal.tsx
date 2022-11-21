import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import React from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';

type Props = {
  darkMode:boolean;
}
const HowToModal: React.FC<Props> = ({ darkMode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>
        <AiFillQuestionCircle color={darkMode ? "#E2E8F0" : "black"} size="2em" />
      </button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>How to play</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="modal-body">
              Trinity gives you a pixelated AI generated image made by DALL-E
              from Open AI and you have to guess the keywords used in the prompt
              to generate the image.
              <br />
              <br />
              With each guess the image becomes less pixelated and you get hints
              to guess the prompt.
              <br />
              <br />
              At the end you will be able to see your own AI generated image
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HowToModal;
