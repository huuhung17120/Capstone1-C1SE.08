import React from 'react'
import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography,} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';

export default function Post({post}) {
    console.log(post)
    return (
        <Card>
            <CardHeader avatar={<Avatar>A</Avatar>}
                title={post.authorId}
                subheader={moment(post.updateAt).format('HH:MM MMM DD,YYYY')}
                action={
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                }a
            />
            <CardMedia image={post.attachment} title="Title" />
            <CardContent>
                <Typography cariant='h5' color='textPrimary'> {post.title}</Typography>
                <Typography cariant='body2' component="p" color='textSecondary'> {post.content} </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <FavoriteIcon/>
                    <Typography component='span' color='textSecondary'>{post.likeCount}</Typography>
                </IconButton>
            </CardActions>
        </Card>
    )
}
