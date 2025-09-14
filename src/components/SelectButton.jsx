import React from "react";

export const SelectButton = ({
  options,
  title,
  open,
  setOpen,
  selected,
  setSelected,
}) => {
  const handleClear = () => setSelected([]);

  return (
    <div className="select-button__wrapper">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="select-button"
      >
        {title}
        <img src="../assets/images/icon-chevron-down.svg" alt="" />
      </button>
      {open && (
        <div className="select-button__item-wrapper">
          {options.map((opt) => (
            <div className="select-button__item" key={opt.value}>
              <input
                type="checkbox"
                name={opt.value}
                value={opt.value}
                checked={selected.includes(opt.value)}
                onChange={() =>
                  setSelected((prev) => {
                    if (prev.includes(opt.value)) {
                      return prev.filter((v) => v !== opt.value);
                    }
                    return [opt.value];
                  })
                }
              />
              {opt.label}
            </div>
          ))}
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
