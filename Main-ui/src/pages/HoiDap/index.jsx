import React, { useState } from 'react';
import { Button } from '@mui/material';
import './index.scss';
import { Container, Col } from 'reactstrap';
import { HoiDapPosts } from '../../apis/HoiDapPosts';
import HoiDapItem from '../../components/Item/HoiDapItem';

const HoiDap = (props) => {
    return (
        <div className='HoiDap'>
            <div className="HoiDap-button">
                <Button color='error' size='medium' variant="contained">Đặt câu hỏi ?</Button>
            </div>

            <div className='HoiDap-body'>
                <div className="left">
                    <div className='HoiDap-posts'>
                        <Container>
                            {HoiDapPosts.map((post) => {
                                return <HoiDapItem post={post} />
                            })}
                        </Container>
                    </div>
                </div>
                <div className='right'>
                    <h4>Đáng quan tâm</h4><hr />
                    <h5>Tôi không thể sống nếu thiếu nó</h5>
                    <span>created by Nhat Long </span>
                    <hr />
                    <h5>Làm ơn hãy giúp tôi</h5>
                    <span>created by Elon </span>
                </div>
            </div>
        </div >
    );
}

export default HoiDap;