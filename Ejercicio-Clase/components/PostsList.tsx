import { FunctionComponent } from "preact";
import { Post } from "../types.ts";

const PostsList: FunctionComponent<{ posts: Post[] }> = (
    { post },
  ) => {
    return (
      <div class="postslist">
        <h1>Post list</h1>
        <ul>
          {post.map((post) => (
            <li key={post.id}>
              <span>{post.titulo}:</span>
              <span>{post.autor}:</span>
              <span>{post.contenido}:</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PostsList;