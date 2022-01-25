import { useRouter } from "next/router";
import { Container, Paper, ButtonText } from "../components";

const About = () => {
  const router = useRouter();

  return (
    <Container>
      <div className="mt-[70px]">
        <div className="my-3 ">
          <ButtonText text="&larr; Back" onClick={() => router.back()} />
        </div>
        <Paper>
          <div className="py-3 px-5">
            <h3 className="text-[30px] font-bold mb-3">
              About TheUn<span className="text-green-700">ex</span>plained.
            </h3>
            <p className="text-[18px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque dolores, maxime accusamus consequuntur eius sit enim
              est inventore vero odit placeat ex omnis magnam alias, facilis
              nulla exercitationem, expedita blanditiis porro laborum libero
              error quos nihil culpa. Alias at sunt amet nostrum! Officiis
              fugiat molestias consequuntur officia quaerat delectus. Quasi
              numquam aspernatur a molestiae fugit atque voluptates ratione
              culpa natus!
            </p>
            <br />
            <p className="text-[18px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque dolores, maxime accusamus consequuntur eius sit enim
              est inventore vero odit placeat ex omnis magnam alias, facilis
              nulla exercitationem, expedita blanditiis porro laborum libero
              error quos nihil culpa. Alias at sunt amet nostrum! Officiis
              fugiat molestias consequuntur officia quaerat delectus. Quasi
              numquam aspernatur a molestiae fugit atque voluptates ratione
              culpa natus!
            </p>
          </div>
        </Paper>
      </div>
    </Container>
  );
};

export default About;
