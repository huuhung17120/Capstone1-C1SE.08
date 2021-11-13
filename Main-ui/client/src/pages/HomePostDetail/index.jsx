import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './index.scss';

import { Button } from '@mui/material';
function HomePostDetail(props) {

    //truyen props thong qua Link
    const location = useLocation();
    const { post } = location.state;
    return (
        <div className='HomePostDetail'>
            <div className='left'>
                <section className='head'>
                    <Link to='/home' style={{ textDecoration: 'none' }}>
                        <Button size='small' variant='outlined' ><i class="fas fa-arrow-left"></i>Back to home</Button>
                    </Link> <br /> <hr />
                    <lable className='head-author'>{post.author}</lable>
                    <span>Đã đăng khoảng {post.createdAt} giờ trước</span>
                    <Button className='head-button' size='small' variant='outlined' >Theo dõi</Button><br />
                    <label><i className="fas fa-star">  {post.stars}</i></label>
                    <hr />
                </section>
                <section className='body'>
                    <h4 className='body-title'>
                        {post.title}
                    </h4>
                    <p className='body-content'>
                        content of the post here
                        Line 21:12:   'content' is assigned a value but never used     no-unused-vars
                        Line 21:21:   'setContent' is assigned a value but never used  no-unused-vars
                        Line 66:115:  Expected dot to be on same line as property
                        Line 21:12:   'content' is assigned a value but never used     no-unused-vars
                        Line 21:21:   'setContent' is assigned a value but never used  no-unused-vars
                        Line 66:115:  Expected dot to be on same line as property
                        Line 21:12:   'content' is assigned a value but never used     no-unused-vars
                        Line 21:21:   'setContent' is assigned a value but never used  no-unused-vars
                        Line 66:115:  Expected dot to be on same line as property
                        Line 21:12:   'content' is assigned a value but never used     no-unused-vars
                        Line 21:21:   'setContent' is assigned a value but never used  no-unused-vars
                        Line 66:115:  Expected dot to be on same line as property
                        content of the post here
                        Line 21:12:   'content' is assigned a value but never used     no-unused-vars
                        Line 21:21:   'setContent' is assigned a value but never used  no-unused-vars
                        Line 66:115:  Expected dot to be on same line as property
                        Line 21:12:   'content' is assigned a value but never used     no-unused-vars
                        Line 21:21:   'setContent' is assigned a value but never used  no-unused-vars
                        Line 66:115:  Expected dot to be on same line as property
                        Line 21:12:   'content' is assigned a value but never used     no-unused-vars
                        Line 21:21:   'setContent' is assigned a value but never used  no-unused-vars
                        Line 66:115:  Expected dot to be on same line as property
                        Line 21:12:   'content' is assigned a value but never used     no-unused-vars
                        Line 21:21:   'setContent' is assigned a value but never used  no-unused-vars
                        Line 66:115:  Expected dot to be on same line as property
                        content of the post here
                        Line 21:12:   'content' is assigned a value but never used     no-unused-vars
                        Line 21:21:   'setContent' is assigned a value but never used  no-unused-vars
                        Line 66:115:  Expected dot to be on same line as property
                        Line 21:12:   'content' is assigned a value but never used     no-unused-vars
                        Line 21:21:   'setContent' is assigned a value but never used  no-unused-vars
                        Line 66:115:  Expected dot to be on same line as property
                        Line 21:12:   'content' is assigned a value but never used     no-unused-vars
                        Line 21:21:   'setContent' is assigned a value but never used  no-unused-vars
                        Line 66:115:  Expected dot to be on same line as property
                        Line 21:12:   'content' is assigned a value but never used     no-unused-vars
                        Line 21:21:   'setContent' is assigned a value but never used  no-unused-vars
                        Line 66:115:  Expected dot to be on same line as property
                    </p>
                </section>
                <section className='foot'>
                    Signature
                </section>
            </div>
            <div className='right'>
                <h4>Danh mục bài viết</h4>

            </div>
        </div>
    );
}

export default HomePostDetail;