import Hunza from "../images/hunza.jpg";
import Skardu from "../images/skardu.jpg";
import Shogran from "../images/siripaye.jpg";
import Swat from "../images/swat-valley.jpg";

const TopDestinations = () => {
  return (
    <div className="card-group container-fluid align-center my-5">
      <div className="row">
        <div
          className="a mx-2"
          style={{
            width: "300px",
            height: "200px",
            backgroundImage: `url(${Hunza})`,
          }}
        >
          <h3
            style={{
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: "200px",
            }}
          >
            <div style={{ color: "#C0C0C0" }}>Hunza</div>
          </h3>
        </div>
        <div
          className="a mx-2"
          style={{
            width: "300px",
            height: "200px",
            backgroundImage: `url(${Swat})`,
          }}
        >
          <h3
            style={{
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: "200px",
            }}
          >
            <div style={{ color: "#C0C0C0" }}>Swat</div>
          </h3>
        </div>
        <div
          className="a mx-2"
          style={{
            width: "300px",
            height: "200px",
            backgroundImage: `url(${Skardu})`,
          }}
        >
          <h3
            style={{
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: "200px",
            }}
          >
            <div style={{ color: "#C0C0C0" }}>Skardu</div>
          </h3>
        </div>
        <div
          className="a mx-2"
          style={{
            width: "300px",
            height: "200px",
            backgroundImage: `url(${Shogran})`,
          }}
        >
          <h3
            style={{
              textAlign: "center",
              verticalAlign: "middle",
              lineHeight: "200px",
            }}
          >
            <div style={{ color: "#C0C0C0" }}>Shogran</div>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TopDestinations;
