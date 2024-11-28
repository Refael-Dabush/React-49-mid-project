import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const getAllData = async () => {
  const { data: usersWB } = await axios.get(USERS_URL);
  const { data: todosWB } = await axios.get(TODOS_URL);
  const { data: postsWB } = await axios.get(POSTS_URL);

  const users = usersWB.map((user) => {
    // todo list 
    const todos = todosWB
      .filter((todo) => todo.userId === user.id)
      .map((t) => {
        return { id: t.id, title: t.title, completed: t.completed };
      });

    // posts list 
    const posts = postsWB
      .filter((post) => post.userId === user.id)
      .map((m) => {
        return { id: m.id, title: m.title, body: m.body };
      });

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        address: {
            street: user.address.street,
            city: user.address.city,
            zipcode: user.address.zipcode
        },
        todos,
        posts 
      }
  });

  console.log(users);

  return users;
};

export {getAllData}
