import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Container,
  Paper,
  Navigation,
  Advertisment,
  Search,
} from "../components";
import URL from "../utils/strapi_connection";
import ReactMarkdown from "react-markdown";

export default function Home({ blogs }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>The Unexplained.</title>
        <meta name="description" content="Blog/personal documetation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen ">
        <Container>
          <div className="mt-[70px] grid gap-3 grid-cols-[1fr] lg:grid-cols-[240px_2fr_1fr] md:grid-cols-[240px_1fr] ">
            {/* Side bar  */}
            <div className="hidden md:block ">
              <Paper>
                <div className="py-3 px-5">
                  <p className="text-[24px] font-medium mb-4 ">
                    Read Our Latest Blogs
                  </p>
                  <p className="text-[18px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam ut id malesuada pellentesque maecenas adipiscing
                    ante dis nunc. Faucibus sed lorem amet amet.
                  </p>
                </div>
              </Paper>
              <Navigation />
            </div>

            {/* Center content */}
            <main>
              <div className="mb-3">
                <Search />
              </div>
              {blogs.map((blog, index) => (
                <div
                  key={blog.id}
                  className="mb-3"
                  onClick={() => router.push(`/blog/${blog.id}`)}
                >
                  <Paper hover>
                    {index === 0 && (
                      // Change alt tags
                      <div className="relative h-[230px] ">
                        <Image
                          src={blog.attributes.blog_img.data.attributes.url}
                          alt="hobbits house"
                          layout="fill"
                          objectFit="cover"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
                        />
                      </div>
                    )}
                    <div className="py-3 px-5">
                      <br />
                      <h2 className="text-[30px] font-bold ">
                        {blog.attributes.title}
                      </h2>
                      <p className="text-[14px] font-medium opacity-60 mb-7 ">
                        {/* Convert date on fetch in static props */}
                        {new Date(blog.attributes.publishedAt).toDateString()}
                      </p>
                      <ReactMarkdown className="text-[18px] prose ">
                        {`${blog.attributes.body.substring(0, 250)}...`}
                      </ReactMarkdown>
                    </div>
                  </Paper>
                </div>
              ))}
            </main>

            {/* Right sidebar */}
            <div className="hidden lg:block ">
              <Advertisment />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${URL}?populate=blog_img&sort=publishedAt:DESC&publicationState=preview` // Using publication=preview to see drafts in development
    );
    const { data: blogs } = await res.json();

    return { props: { blogs }, revalidate: 10 };
  } catch (e) {
    console.warn(e.message);
    return { props: {} };
  }
}
