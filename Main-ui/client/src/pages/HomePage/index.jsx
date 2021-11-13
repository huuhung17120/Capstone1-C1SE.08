import React, { useState } from 'react';
import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import './index.scss';
import { Posts } from '../../apis/Posts';
import { Container, Row, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Item from '../../components/Item/HomeItem';

const active = {
    borderBottom: '3px solid black',
}

const Home = (props) => {

    const tabs = ['Mới nhất', 'Quan tâm', 'Xu hướng'];
    const [currentFilter, setCurrentFilter] = useState('Mới nhất');

    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const toggle = () => setModal(!modal);
    const onChange = (e) => {
        console.log('changed')
    }
    console.log(Posts);
    return (
        <div className='Home'>
            <div className='Home-button'>
                <div className='Home-button-1'>
                    {tabs.map((tab, index) => {
                        return <Button
                            key={tab}
                            onClick={() => setCurrentFilter(tab)}
                            style={currentFilter === tab ? active : {}}
                        >
                            {tab}
                        </Button>
                    })}
                </div>
                <div className='Home-button-2'>
                    <Button onClick={toggle} variant="contained">Viết bài <CreateIcon /></Button>
                    {/*Modal: Hiện pop-up để đăng bài */}
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>Add a post ✍️</ModalHeader>
                        <ModalBody>
                            <Input type="text" placeholder="title" onChange={onChange} />
                            <Input type="textarea" placeholder="content" rows={3} onChange={onChange} />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>POST IT</Button>{'   '}
                            <Button variant='danger' onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
            <hr />
            <div className='Home-posts'>
                <Container>
                    <Row>
                        {currentFilter === 'Mới nhất' && Posts.sort((post1, post2) => post1.createdAt - post2.createdAt)
                            .map((post, index) => {
                                return <Item key={index} post={post} classname={'Home-post-item '} />
                            })}
                        {currentFilter === 'Quan tâm' && Posts.sort((post1, post2) => post1.postID - post2.postID).
                            map((post, index) => {
                                return <Item key={index} post={post} classname={'Home-post-item'} />
                            })}
                        {currentFilter === 'Xu hướng' && Posts.sort((post1, post2) => post2.stars - post1.stars)
                            .map((post, index) => {
                                return <Item key={index} post={post} classname={'Home-post-item'} />
                            })}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Home;