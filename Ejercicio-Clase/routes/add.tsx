import { FreshContext, Handlers } from "$fresh/server.ts";
import AddPost from "../components/AddPost.tsx";
import ContactModel from "../DB/Post.ts";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try {
      const form = await req.formData();
      const data = {
        titulo: form.get("titulo"),
        autor: form.get("autor"),
        contenido: form.get("contenido")
      };

      await ContactModel.create(data);

      return new Response("", {
        status: 303,
        headers: {
          "Location": "/",
        },
      });
    } catch (error) {
      return new Response(error.message, {
        status: 500,
      });
    }
  },
};

const Page = () => {
  return (
    <div class="AddPost">
      <AddPost />
    </div>
  );
};

export default Page;