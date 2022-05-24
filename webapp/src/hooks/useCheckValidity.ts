import React from "react";

interface Props {
  schema: any;
  value: string;
}

interface ReturnType {
  checkValidityByKey: (key: string) => boolean;
}

const useCheckValidity = ({ schema, value }: Props): ReturnType => {
  const checkValidityByKey = (key: string) => {
    try {
      schema.validateSync(value, { abortEarly: false });

      return true;
    } catch (err: any) {
      const invalidKeys = err.inner.map((element: any) => {
        return element.errors[0];
      });

      const isValid = invalidKeys.includes(key);

      return !isValid;
    }
  };
  return { checkValidityByKey };
};

export default useCheckValidity;
