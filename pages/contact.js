import { Container, Paper } from "../components";

const Contact = () => {
  return (
    <Container>
      <div className="mt-[70px]">
        <Paper>
          <div className="py-3 px-5">
            <h3 className="text-[30px] font-bold mb-3">Contact us here.</h3>
            <p className="text-[18px] font-medium">
              Email:
              <a className="underline cursor-pointer text-green-600">
                email@example.com
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
