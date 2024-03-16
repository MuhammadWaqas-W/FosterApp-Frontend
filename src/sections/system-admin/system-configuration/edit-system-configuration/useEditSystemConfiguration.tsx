import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { useState } from "react";

const useEditSystemConfiguration = () => {

  const todayDate = dayjs().format("MM/DD/YYYY");
  const [selectedDate,setSelectedDate]= useState('')

  const defaultValues = {
    name: "ijaz",
    // key: "",
    value: "",
    description: "",
    approver: "",
    approver_role: "",
    aprrover_date: new Date(todayDate),
  };

  const editSystemConfigurationSchmea = Yup.object().shape({
    name: Yup.string().required("Required"),
    // key: Yup.string().required("Required"),
    value: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    approver: Yup.string().required("Required"),
    approver_role: Yup.string().required("Required"),
    aprrover_date: Yup.date().required("Required"),
  });

  const methods:any = useForm({
    resolver: yupResolver(editSystemConfigurationSchmea),
    defaultValues,
  });
  console.log(methods);

  const { handleSubmit } = methods;

  
  const onSubmit = (data: any) => {
    console.log("jhvjhg");
    
    console.log(data);
  };

  return { methods, handleSubmit, onSubmit, defaultValues,selectedDate,setSelectedDate };
};

export default useEditSystemConfiguration;
