import React from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { Route, Routes } from "react-router-dom";

function NestedInput() {
  const { register } = useFormContext(); // retrieve all hook methods
  return <input {...register("test")} />;
}

const Test1 = () => {
  const methods = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <div>Test1</div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <NestedInput />
          <input type="submit" />
        </form>
      </FormProvider>
    </div>
  );
};

const Test2 = () => {
  const methods = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <div>Test2</div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <NestedInput />
          <input type="submit" />
        </form>
      </FormProvider>
    </div>
  );
};

const Test3 = () => {
  const methods = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <div>Test3</div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <NestedInput />
          <input type="submit" />
        </form>
      </FormProvider>
    </div>
  );
};

const TestContainer = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Test1 />
            <Test2 />
            <Test3 />
          </>
        }
      />
    </Routes>
  );
};

export default TestContainer;
