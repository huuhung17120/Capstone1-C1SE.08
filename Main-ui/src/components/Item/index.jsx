import React from 'react';
import { Col } from 'reactstrap';

function Item(props) {
    const { post, classname } = props;
    return (

        <Col lg='6' className={classname}>
            <span>#PostID{post.postID}</span> <br />
            <label>{post.author}</label><br />
            <span>{post.createdAt} hours ago</span>--------<span>Star: {post.stars}</span>
            <p>{post.description}</p>
            <hr />
        </Col>

    );
}

export default Item;