import { useState } from "react";

const Toggle = ({ prop }) => {
  prop = prop.toString();
  const [isActive, setActive] = useState(true);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div>
      {prop.length < 10 ? (
        <div>{prop}</div>
      ) : isActive ? (
        <div>
          {prop.substring(0, 10)}
          <i onClick={handleToggle} className="link-primary pointer">
            ...show more
          </i>
        </div>
      ) : (
        <div>
          {prop}
          <i onClick={handleToggle} className="link-primary pointer">
            {" "}
            show less
          </i>
        </div>
      )}
    </div>
  );
};

export default Toggle;
