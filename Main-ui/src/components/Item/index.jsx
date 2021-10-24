import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import './index.scss';

function Item(props) {
    const { post, classname } = props;

    const handleItemClick = (postID) => {

    }

    return (
        <Col lg='6' className={classname + 'Item'} onClick={() => handleItemClick(post.postID)}>
            <span className='Id'>#PostID{post.postID}</span> <br />
            <label className='Author'>{post.author}</label>
            <span className='CreatedAt'>{post.createdAt} hours ago</span><br /><span className='Star'>Stars: {post.stars}</span>
            <p className='Title'>{post.title}</p>
            <Link className='Item-link' to={`/post/${post.postID}`} >Detail</Link>
            <hr />
        </Col>
    );
}

export default Item;