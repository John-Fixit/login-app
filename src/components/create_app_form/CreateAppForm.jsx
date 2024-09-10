import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useCustomMessage from "../../hooks/useCustomMessage";
import { Input, Select } from "antd";
import CustomButton from "../buttons/CustomButton";

export default function CreateAppForm({handleCloseDrawer}){
  //external hooks
//   const {
//     closeDrawer,
//     data: { company_detail },
//   } = useDrawer();

//   const mutation = useUpdateCompany();

//   const { data, isLoading: bankListLoading } = useBankList();

//   const bank_list = data?.map((bank) => {
//     return {
//       ...bank,
//       value: bank?.name,
//       label: bank?.name,
//     };
//   });

  const { showMessage, contextHolder } = useCustomMessage();

  //

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    trigger,
    reset,
    getValues,
  } = useForm({
    defaultValues: {
      bank_name: "",
      account_name: "",
      account_number: "",
      bank_code: ""
    },
  });

//   useEffect(() => {
//     const selected = bank_list?.find((bank) => bank?.value === company_detail?.bank_name);
//     reset({
//       bank_name: company_detail?.bank_name,
//       account_name: company_detail?.account_name,
//       account_number: company_detail?.account_number,
//       bank_code: selected?.bank_code,
//       nip_code: selected?.nip_code,
//     });
//   }, [company_detail, reset]);

  const onsubmit = (data) => {
    const json = {
      bank_name: data?.bank_name,
      account_name: data?.account_name,
      account_number: data?.account_number,
      bank_code: data?.bank_code,
      nip_code: data?.nip_code,
    };


    setIsLoading(true);

    // mutation.mutate(json, {
    //   onError: (error) => {
    //     const err = error?.response?.data?.message ?? error?.message;

    //     showMessage("error", err);
    //   },
    //   onSuccess: (data) => {
    //     const res = data?.data;

    //     reset();

    //     showMessage("success", res?.message);
    //     handleCloseDrawer();
    //   },
    //   onSettled: () => {
    //     setIsLoading(false);
    //   },
    // });
  };

  const handleChange = (value, fieldName) => {
    setValue(fieldName, value);
    trigger(fieldName);
  };

  const onChange = (fieldName, value) => {
    // const selected = bank_list.find((bank) => bank?.value === value);


    setValue(fieldName, value);
    // setValue("bank_code", selected?.bank_code);
    // setValue("nip_code", selected?.nip_code);

    trigger(fieldName);
    // trigger("bank_code");
    // trigger("nip_code");
  };

  return (
    <>
      <main className="w-full max-w-lg mx-auto">
        <p className="my-5 font-[500] text-[16px] text-black capitalize">
          Create App
        </p>
        <form action="" onSubmit={handleSubmit(onsubmit)}>
        <div className="mb-3">
            <label htmlFor="" className="font-[400] text-[14px]">
              Name
            </label>
            <Input
              name="name"
              value={getValues("name")}
              placeholder="Enter App Name"
              size={"large"}
              className={` text-[14px] ${errors.name ? "error" : ""}`}
              status={errors.name ? "error" : ""}
              {...register("name", {
                required: "App Name is required",
              })}
              onChange={(e) => handleChange(e.target.value, "name")}
            />
            <small style={{ fontSize: "13px" }} className="text-red-500">
              {errors.name && errors.name.message}
            </small>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="font-[400] text-[14px]">
              Login Return Data
            </label>
            <Select
              value={getValues("return_data")}
              showSearch
              size={"large"}
              placeholder="Select Login return data"
              className="w-full"
              optionFilterProp="label"
              status={errors.return_data ? "error" : ""}
              mode="multiple"
              
              {...register("return_data", {
                required: "Bank Name is required",
              })}
              onChange={(value)=>handleChange(value, "return_data")}
              options={[
                    {
                        label: "STAFF ID", value: "staff_id"
                    },
                    {
                        label: "STAFF NUMBER", value: "staff_number"
                    },
                    {
                        label: "FIRST NAME", value: "first_name"
                    },
                    {
                        label: "LAST NAME", value: "last_name"
                    },
                    {
                        label: "DEPARTMENT", value: "department"
                    },
                    {
                        label: "DESIGNATION", value: "designation"
                    },
                    {
                        label: "UNIT", value: "unit"
                    },
                    {
                        label: "REGION", value: "region"
                    },
                    {
                        label: "DIRECTORATE", value: "directorate"
                    },
                    {
                        label: "GRADE", value: "grade"
                    },
              ]}
            />
            <small style={{ fontSize: "13px" }} className="text-red-500">
              {errors.return_data && errors.return_data.message}
            </small>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="font-[400] text-[14px]">
              Staff Permission
            </label>
            <Select
              value={getValues("staff_permission")}
              showSearch
              size={"large"}
              placeholder="Select staff permission"
              className="w-full"
              optionFilterProp="label"
              status={errors.staff_permission ? "error" : ""}
              mode="multiple"
              
              {...register("staff_permission", {
                required: "Bank Name is required",
              })}
              onChange={(value)=>handleChange(value, "staff_permission")}
              options={[
                    {
                        label: "STAFF", value: "staff"
                    },
                    {
                        label: "DEPARTMENT", value: "department"
                    },
                    {
                        label: "DESIGNATION", value: "designation"
                    },
                    {
                        label: "UNIT", value: "unit"
                    },
                    {
                        label: "REGION", value: "region"
                    },
                    {
                        label: "DIRECTORATE", value: "directorate"
                    },
                    {
                        label: "GRADE", value: "grade"
                    },
              ]}
            />
            <small style={{ fontSize: "13px" }} className="text-red-500">
              {errors.staff_permission && errors.staff_permission.message}
            </small>
          </div>
        
          <div className="mb-3 flex flex-col col-span-2">
            <label htmlFor="" className="font-[400] text-[14px]">
              App Description
            </label>
            <Input.TextArea
              rows={4}
              placeholder="App description"
              {...register("description")}
              onChange={(e) => handleChange(e.target.value, "description")}
            />
          </div>

          <div className="mt-5 mb-5">
            <CustomButton
              type={"submit"}
              className={"w-full"}
              loading={isLoading}
            >
              Create App
            </CustomButton>
          </div>
        </form>
      </main>

      {contextHolder}
    </>
  );
};
