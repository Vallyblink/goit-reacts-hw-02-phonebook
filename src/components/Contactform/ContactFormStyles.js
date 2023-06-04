import { Field, ErrorMessage } from 'formik';
import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  color: black;
  font-size: 20px;
  text-align: center;
`;

export const Input = styled(Field)`
  padding: 10px;
  margin-top: 5px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 20px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
  margin-top: 5px;
  font-size: 14px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

