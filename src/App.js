import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import ListPosts from './ListPosts';

const DUMMY_POSTS = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body:
      'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body:
      'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  },
];

export default () => (
  <Provider store={store}>
    <div>
      <h1>Welcome to my Blog</h1>
      <input type="text" placeholder="search" />
      <br />
      Posts:
      <ListPosts posts={DUMMY_POSTS} />
      <hr />
      <h1>Post title 1</h1>
      Body bla bla bla bla bla bla bla <br />
      Comments:
      <ul>
        <li>Alice: ada sda sd a sdadf</li>
        <li>Bob: bo boboboo bo bo</li>
      </ul>
    </div>
  </Provider>
);
