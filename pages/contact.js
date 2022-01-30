import { useRouter } from "next/router";
import { Container, Paper, ButtonText } from "../components";

const Contact = () => {
  const router = useRouter();

  return (
    <Container>
      <div className="mt-[70px]">
        <div className="my-3 ">
          <ButtonText text="&larr; Back" onClick={() => router.back()} />
        </div>
        <Paper>
          <div className="py-3 px-5">
            <h3 className="text-[30px] font-bold mb-3">Contact us here.</h3>
            <p className="text-[18px] font-medium">
              Email:
              <a
                href="mailto:dev@olivernemes.co.uk?subject=Send from The Unexplained"
                className="underline cursor-pointer text-green-600"
              >
                dev@olivernemes.co.uk
              </a>
            </p>
            <p className="text-[18px] font-medium">
              Phone:
              <a className="underline cursor-pointer text-green-600">
                07333-333-333
              </a>
            </p>
            <p className="text-[18px] font-medium">
              Support:
              <a className="underline cursor-pointer text-green-600">
                support@example.com
              </a>
            </p>
          </div>
        </Paper>
      </div>
    </Container>
  );
};

export default Contact;
