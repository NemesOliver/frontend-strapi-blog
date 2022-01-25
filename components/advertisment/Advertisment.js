import { Paper } from "../../components";

const Advertisment = () => {
  return (
    <div>
      <div className="mb-3">
        <Paper>
          <div className="py-[70px] px-5 text-center">I could be an add</div>
        </Paper>
      </div>
      <div className="mb-3">
        <Paper>
          <div className="py-[200px] px-5 text-center">I could be a widget</div>
        </Paper>
      </div>
      <div className="mb-3">
        <Paper>
          <div className="py-[130px] px-5 text-center">I could be an add</div>
        </Paper>
      </div>
    </div>
  );
};

export default Advertisment;
