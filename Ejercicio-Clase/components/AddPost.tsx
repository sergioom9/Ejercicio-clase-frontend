import { FunctionComponent } from "preact";

const AddPost: FunctionComponent = () => {
  return (
    <form class="AddForm" action="/add" method="post">
      <h1>Add new Post</h1>
      <input type="text" titulo="titulo" placeholder="Titulo" />
      <div></div>
      <input type="text" autor="autor" placeholder="Autor" />
      <div></div>
      <input type="text" contenido="contenido" placeholder="Descripcion" />
      <div></div>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPost;