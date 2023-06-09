import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";
import React from "react";
import { useField } from "formik";

const CategorySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const categories = [
    { name: "Dezert", code: "dessert" },
    { name: "Hlavní chod", code: "main course" },
    { name: "Koktejl", code: "drink" },
    { name: "Polévka", code: "soup" },
    { name: "Předkrm", code: "starter" },
    { name: "Svačina", code: "snack" },
  ];
  return (
    <>
      <span className="p-float-label">
        <Dropdown
          inputId={props.id}
          name={props.name}
          options={categories}
          optionLabel="name"
          optionValue="code"
          {...field}
          {...props}
          className={classNames("w-full md:w-14rem", {
            "p-invalid": !!(meta.touched && meta.error),
          })}
        />
        <label htmlFor={props.id || props.name}>{label}</label>
      </span>
      {!!(meta.touched && meta.error) ? (
        <small className="p-error">{meta.error}</small>
      ) : (
        <small className="p-error">&nbsp;</small>
      )}
    </>
  );
};

export default CategorySelect;
