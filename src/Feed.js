import React, { useState, useEffect } from 'react';

import classes from './Feed.module.css';

import InputOption from './InputOption';
import Post from './Post';

import { db } from './firebase';
import { addDoc, collection } from 'firebase/firestore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faImage, faVideo, faCalendar, faTableList } from '@fortawesome/free-solid-svg-icons';

import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

import FlipMove from 'react-flip-move';

const Feed = () => {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  const inputValue = collection(db, 'posts');

  const sendPost = (event) => {
    event.preventDefault();

    let data = {
      id: Math.random(),
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: new Date()
    }

    setPosts([ data, ...posts ]);

    try {
      addDoc(inputValue, data)
    }
    catch(error) {
      console.log(error);
    }
    setInput('');
  };

  const changeInputHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className={classes.feed}>
      <div className={classes.feed__inputContainer}>
        <div className={classes.feed__input}>
          <FontAwesomeIcon icon={faPen} />

          <form>
            <input
              type="text"
              value={input}
              onChange={changeInputHandler}
            />
            <button type='submit' onClick={sendPost}>Send</button>
          </form>
        </div>

        <div className={classes.feed__inputOptions}>
          <InputOption icon={faImage} title="Photo" color="#70b5f9" />
          <InputOption icon={faVideo} title="Video" color="#e7a33e" />
          <InputOption icon={faCalendar} title="Event" color="#c0cbcd" />
          <InputOption icon={faTableList} title="Write Article" color="#7fc15e" />
        </div>
      </div>

      <FlipMove>
        {posts.length > 0 && posts.map(post => (
          <Post
            id={post.id}
            name={post.name}
            description={post.description}
            message={post.message}
            photoUrl={post.photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  )
};

export default Feed;