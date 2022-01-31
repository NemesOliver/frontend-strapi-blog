import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { Container, Paper, ButtonText } from "../../components";
import URL from "../../utils/strapi_connection";

const Blog = ({ blog }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{blog.data.attributes.title}</title>
        <meta name="description" content="Blog/personal documetation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen">
        <Container>
          <div className="mt-[70px]">
            <div className="my-3 ">
              <ButtonText text="&larr; Back" onClick={() => router.back()} />
            </div>
            <Paper>
              <div className="relative h-[230px] sm:h-[430px] w-full">
                <Image
                  src={blog.data.attributes.blog_img.data.attributes.url}
                  alt="hobbits house"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                />
              </div>
              <article className="px-4 md:px-20 pb-8">
                <div className="text-5xl font-bold py-10 ">
                  <h1>{blog.data.attributes.title}</h1>
                  <p className="text-[14px] font-medium opacity-60 mt-4 ">
                    {/* Convert date on fetch in static props */}
                    {new Date(blog.data.attributes.publishedAt).toDateString()}
                  </p>
                </div>

                <ReactMarkdown className="text-[18px] prose max-w-full">
                  {blog.data.attributes.body}
                </ReactMarkdown>
              </article>
            </Paper>
          </div>
        </Container>
      </div>
    </>
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

    return { props: { blog }, revalidate: 10 };
  } catch (e) {
    console.warn(e.message);
    return { props: {} };
  }
}
