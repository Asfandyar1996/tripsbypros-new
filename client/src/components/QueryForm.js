const QueryForm = ({ values, setValues, handleChange, handleSubmit }) => {
  const { destination, participants, days, departure, information } = values;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="form-group mb-3">
          <label>Enter Destinaiton</label>
          <input
            type="text"
            name="destination"
            onChange={handleChange}
            placeholder="Destination"
            className="form-control m-2"
            value={destination}
          />
        </div>

        <div className="form-group mb-3">
          <label>Number of Participants</label>
          <input
            type="text"
            name="participants"
            onChange={handleChange}
            placeholder="Participants"
            className="form-control m-2"
            value={participants}
          />
        </div>

        <div className="form-group mb-3">
          <label>Number of Days</label>
          <input
            type="number"
            name="days"
            onChange={handleChange}
            placeholder="Days"
            className="form-control m-2"
            value={days}
          />
        </div>

        <div className="form-group mb-3">
          <label>Departure From</label>
          <input
            type="text"
            name="departure"
            onChange={handleChange}
            placeholder="Departure"
            className="form-control m-2"
            value={departure}
          />
        </div>

        <div className="form-group mb-3">
          <label>
            Enter any additional information you'd like the travel agent to know
          </label>
          <textarea
            rows="5"
            name="information"
            onChange={handleChange}
            placeholder="Information"
            className="form-control m-2"
            value={information}
          />
        </div>
      </div>
      <button className="btn btn-outline-primary m-2">Save</button>
    </form>
  );
};

export default QueryForm;
