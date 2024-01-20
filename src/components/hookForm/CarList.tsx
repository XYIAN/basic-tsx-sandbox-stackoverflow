import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function CarList() {
  type Car = {
    brandId: number;
    brand: string;
  };

  const defaultBrandId = 5; // 'Other'
  const [showBrandInput, setShowBrandInput] = useState<boolean>(true);
  const { register, handleSubmit, setValue, getValues, watch } = useForm<Car>({
    defaultValues: { brandId: 5 },
  });
  const CurrentBrandID = watch("brandId");

  function fetchCarBrands() {
    // API call to get select list data
    //use default value object to set default values on load
  }

  const onSubmit = (data: Car) => {
    console.log("form submitted with data:", data);
  };
  useEffect(() => {
    fetchCarBrands();
  }, [CurrentBrandID]);

  useEffect(() => {
    setShowBrandInput(+getValues().brandId === +defaultBrandId);
  }, [CurrentBrandID]);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate id="carForm">
        <div className="mb-4">
          <label>Brand</label>
          <div>
            <select {...register("brandId")}>
              <option value="1">Chevy</option>
              <option value="2">Ford</option>
              <option value="3">Honda</option>
              <option value="4">Toyota</option>
              <option value="5">Other</option>
            </select>
          </div>
          <div>
            {showBrandInput && <input type="text" {...register("brand")} />}
          </div>
        </div>
        <button type="submit" className="btn-dk-blue" form="carForm">
          Submit
        </button>
      </form>
    </>
  );
}
