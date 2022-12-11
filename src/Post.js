import classes from './Post.module.css';

import React, { forwardRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faThumbsUp, faComment, faShare, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Post = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={classes.post} key={props.id}>
      <div className={classes.post__header}>
        <FontAwesomeIcon icon={faUser} className={classes.icon} />
        <div className={classes.post__info}>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </div>
      </div>

      <div className={classes.body}>
        <p>{props.message}</p>
      </div>

      <div className={classes.post__buttons}>
        <div className={classes.post__button}>
          <FontAwesomeIcon icon={faThumbsUp} color='gray' size="2xl" />
          <h4>Like</h4>
        </div>
        <div className={classes.post__button}>
          <FontAwesomeIcon icon={faComment} color='gray' size="2xl" />
          <h4>Comment</h4>
        </div>
        <div className={classes.post__button}>
          <FontAwesomeIcon icon={faShare} color='gray' size="2xl" />
          <h4>Share</h4>
        </div>
        <div className={classes.post__button}>
          <FontAwesomeIcon icon={faPaperPlane} color='gray' size="2xl" />
          <h4>Send</h4>
        </div>
      </div>
    </div>
  );
});

export default Post;