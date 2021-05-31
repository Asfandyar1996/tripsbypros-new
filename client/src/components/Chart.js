import { Bar, Doughnut, Line } from "react-chartjs-2";

const Chart = () => {
  return (
    <>
      <div
        className="container row m-auto my-5"
        style={{ alignItems: "center" }}
      >
        <Line
          className="mx-1"
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "Sales",
                data: [420, 260, 400, 350, 600, 750],
                backgroundColor: ["red", "blue"],
                borderColor: ["black"],
                borderWidth: 1,
              },
            ],
          }}
          height={300}
          width={400}
          options={{
            maintainAspectRatio: true,
            responsive: false,
            plugins: {
              title: {
                display: true,
                text: "Sales (past 6 months)",
                padding: { top: 10, bottom: 20 },
              },
            },
          }}
        />

        <Bar
          className="mx-1"
          data={{
            labels: ["S", "M", "T", "W", "T", "F", "S"],
            datasets: [
              {
                label: "votes",
                data: [12, 11, 14, 16, 24, 12, 22],
                backgroundColor: ["red", "blue"],
                borderColor: ["black"],
                borderWidth: 1,
              },
            ],
          }}
          height={300}
          width={400}
          options={{
            maintainAspectRatio: true,
            responsive: false,
            plugins: {
              title: {
                display: true,
                text: "Sales (past 6 months)",
                padding: { top: 10, bottom: 20 },
              },
            },
          }}
        />
        {/* <Doughnut
          className="mx-1"
          data={{
            labels: ["Male", "Female"],
            datasets: [
              {
                // label: "votes",
                data: [48, 52],
                backgroundColor: ["red", "blue"],
                borderColor: ["black"],
                borderWidth: 1,
              },
            ],
          }}
          height={300}
          width={400}
          options={{
            maintainAspectRatio: true,
            responsive: false,
            plugins: {
              title: {
                display: true,
                text: "Average Male/Female Ratio on Public Trips",
                padding: { top: 10, bottom: 20 },
              },
            },
          }}
        /> */}
      </div>

      <div className="table-responsive container mb-3 mt-3">
        <h2>Active trips</h2>
        <table className="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Duration</th>
              <th scope="col">Type</th>
              <th scope="col">Participants</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Two days trip to Shogran</td>
              <td>2 days</td>
              <td>Public</td>
              <td>37</td>
              <td style={{ color: "green" }}>Acive</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>One day trip to Mukshpuri</td>
              <td>1 day</td>
              <td>Public</td>
              <td>49</td>
              <td style={{ color: "green" }}>Acive</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Two days trip to Swat</td>
              <td>2 days</td>
              <td>Private</td>
              <td>23</td>
              <td style={{ color: "green" }}>Acive</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Seven days trip to Hunza</td>
              <td>7 days</td>
              <td>Private</td>
              <td>7</td>
              <td style={{ color: "green" }}>Acive</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>8 days trip to Skardu</td>
              <td>8 days</td>
              <td>Public</td>
              <td>19</td>
              <td style={{ color: "green" }}>Acive</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Chart;
