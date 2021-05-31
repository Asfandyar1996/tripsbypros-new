const AnswerQueryForm = ({ values, setValues, handleChange, handleSubmit }) => {
  const { cost, proposedItinerary, message } = values;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="form-group mb-3">
          <label>Write the cost you want to offer</label>
          <input
            type="text"
            name="cost"
            onChange={handleChange}
            placeholder="Cost"
            className="form-control m-2"
            value={cost}
          />
        </div>

        <div className="form-group mb-3">
          <label>Write your proposed itinerary</label>
          <textarea
            rows="5"
            name="proposedItinerary"
            onChange={handleChange}
            placeholder="Itinerary"
            className="form-control m-2"
            value={proposedItinerary}
          />
        </div>

        <div className="form-group mb-3">
          <label>Your message to the travellers</label>
          <textarea
            rows="5"
            name="message"
            onChange={handleChange}
            placeholder="Message"
            className="form-control m-2"
            value={message}
          />
        </div>
      </div>
      <button className="btn btn-outline-primary m-2">Place bid</button>
    </form>
  );
};

export default AnswerQueryForm;
