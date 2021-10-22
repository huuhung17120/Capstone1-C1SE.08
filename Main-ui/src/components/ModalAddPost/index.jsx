import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalAddPost(props) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Add a post ✍️</ModalHeader>
                <ModalBody>
                    <Input type="text" placeholder="title" />
                    <Input type="textarea" placeholder="content" rows={3} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Publish it</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalAddPost;