import { ChangeEvent, SyntheticEvent, useState } from "react";

type FoodDeliveryFormType = {
  customerName: string;
  mobile: string;
};

type FormErrorType = {
  customerName: string;
  mobile: string;
};

export const FoodDeliveryForm = () => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [values, setValues] = useState<FoodDeliveryFormType>({
    customerName: "",
    mobile: "",
  });
  const [errors, setErrors] = useState<FormErrorType>({
    customerName: "",
    mobile: "",
  });

  const validateFormData = () => {
    let tempErrors: FormErrorType = {
      customerName: "",
      mobile: "",
    };
    if (values.customerName == "") {
      tempErrors.customerName = "Customer name is required.";
    }
    if (values.mobile == "") {
      tempErrors.mobile = "Mobile is required.";
    }
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x == "");
  };

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateFormData()) console.log("form data", values);
    else console.log("form is invalid");
  };

  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          name="customerName"
          className="form-control"
          placeholder="Customer Name"
          value={values.customerName}
          onChange={handleInputChange}
        />
        <label>Customer Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          name="mobile"
          className="form-control"
          placeholder="Mobile"
          value={values.mobile}
          onChange={handleInputChange}
        />
        <label>Mobile</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
