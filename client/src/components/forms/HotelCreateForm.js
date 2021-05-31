import AlgoliaPlaces from "algolia-places-react";
import { Select, DatePicker } from "antd";
import moment, { duration } from "moment";

const { Option } = Select;

const config = {
  addId: process.env.REACT_APP_ALGOLIA_APP_ID,
  apiKey: process.env.REACT_APP_ALGOLIA_API_KEY,
  language: "en",
  countries: ["pk"],
};

const HotelCreateForm = ({
  values,
  setValues,
  handleChange,
  handleImageChange,
  handleSubmit,
  location,
  setLocation,
}) => {
  const { title, content, price, duration, itinerary } = values;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="btn btn-outline-secondary btn-block m-2 text-left">
          Image
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            hidden
          />
        </label>

        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Title"
          className="form-control m-2"
          value={title}
        />

        <textarea
          rows="5"
          name="content"
          onChange={handleChange}
          placeholder="Overview"
          className="form-control m-2"
          value={content}
        />
        <AlgoliaPlaces
          className="form-control ml-2 mr-2"
          placeholder="Location"
          defaultValue={location}
          options={config}
          onChange={({ suggestion }) => setLocation(suggestion.value)}
          style={{ height: "50px" }}
        />
        <input
          type="number"
          name="price"
          onChange={handleChange}
          placeholder="Price"
          className="form-control m-2"
          value={price}
        />
        {/* <Select
          onChange={(value) => setValues({ ...values, bed: value })}
          className="w-100"
          size="large"
          placeholder="Number of Beds"
        >
          <Option key={1}>{1}</Option>
          <Option key={2}>{2}</Option>
          <Option key={3}>{3}</Option>
          <Option key={4}>{4}</Option>
        </Select> */}
        <input
          type="number"
          name="duration"
          onChange={handleChange}
          placeholder="Duration (Days)"
          className="form-control m-2"
          value={duration}
        />
        <textarea
          rows="10"
          name="itinerary"
          onChange={handleChange}
          placeholder="Itinerary"
          className="form-control m-2"
          value={itinerary}
        />
      </div>

      <DatePicker
        placeholder="From Date"
        className="form-control m-2"
        onChange={(date, dateString) =>
          setValues({ ...values, from: dateString })
        }
        disabledDate={(current) =>
          current && current.valueOf() < moment().subtract(1, "days")
        }
      />

      <DatePicker
        placeholder="To Date"
        className="form-control m-2"
        onChange={(date, dateString) =>
          setValues({ ...values, to: dateString })
        }
        disabledDate={(current) =>
          current && current.valueOf() < moment().subtract(1, "days")
        }
      />

      <button className="btn btn-outline-primary m-2">Save</button>
    </form>
  );
};

export default HotelCreateForm;
