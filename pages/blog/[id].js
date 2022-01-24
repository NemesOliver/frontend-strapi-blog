import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Container, Paper } from "../../components";
import URL from "../../utils/strapi_connection";

const Blog = ({ blog }) => {
  console.log(blog);
  return (
    <Container>
      <div className="mt-[70px]">
        <Paper>
          <div className="relative h-[430px] w-full">
            <Image
              src={blog.data.attributes.blog_img.data.attributes.url}
              alt="hobbits house"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
            />
          </div>
          <div className="px-20 pb-8">
            <div className="text-5xl font-bold py-10 ">
              <h1>{blog.data.attributes.title}</h1>
              <p className="text-[14px] font-medium opacity-60 mt-4 ">
                {/* Convert date on fetch in static props */}
                {new Date(blog.data.attributes.publishedAt).toDateString()}
              </p>
            </div>
            <ReactMarkdown className="text-[18px] ">
              {blog.data.attributes.body}
            </ReactMarkdown>
          </div>
        </Paper>
      </div>
    </Container>
  );
};

export default Blog;

export async function getStaticPaths() {
  try {
    const res = await fetch(URL);
    const blogs = await res.json();

    const paths = blogs.data.map((blog) => `/blog/${blog.id}`);
    return { paths, fallback: "blocking" };
  } catch (e) {
    console.warn(e.message);
    return { props: {} };
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`${URL}/${params.id}?populate=blog_img`);
    const blog = await res.json();

    return { props: { blog }, revalidate: 60 };
  } catch (e) {
    console.warn(e.message);
    return { props: {} };
  }
}
