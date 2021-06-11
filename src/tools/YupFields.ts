import styled from "styled-components";
import {Colors} from "../styledHelpers/Colors";
import {FontSize} from "../styledHelpers/FontSizes";

export const isValidateField = (error: any, index: number, field: string): boolean => {
    return (error[index] !== undefined && error[index][field] !== undefined);
};

export const ErrorWrapper = styled.div`
  margin-top: 5px;
  
  small {
    color: ${Colors.red};
    font-size: ${FontSize["12"]};
  }
`;