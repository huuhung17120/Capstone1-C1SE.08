import React from "react";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import moment from "moment";
import { Link } from "react-router-dom";

import img from "../../../assets/item.jpg";
import './style.scss';

export default function Post({ post }) {
    console.log(post);
    return (
        <Card className='card'>
            <CardHeader
                avatar={<Avatar></Avatar>}
                title={post.authorId}
                subheader={moment(post.updateAt).format("HH:MM MMM DD,YYYY")}
                action={
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                }
            />
            <CardMedia
                image={img}
                title="Title"
                style={{ height: "500px", width: "800px", borderRadius: "5px", marginLeft: '0rem' }}
            />
            <CardContent className='card-content'>
                <Typography cariant="h5" color="textPrimary">
                    {" "}
                    {post.title}
                </Typography>
                <Typography cariant="body2" component="p" color="textSecondary">
                    {" "}
                    {post.content}{" "}
                </Typography>
            </CardContent>
            <CardActions className='card-action'>
                <IconButton>
                    <FavoriteIcon />
                    <Typography component="span" color="textSecondary">
                        {post.likeCount}
                    </Typography>
                </IconButton>
            </CardActions >
            <Link
                className="card-link"
                to={{ pathname: `/home/postid=${post?.postID}`, state: { post } }}
                style={{ marginLeft: '15rem', marginBottom: '2rem', fontWeight: 'bold' }}
            >
                Go to Detail
            </Link>
        </Card >
    );
}
