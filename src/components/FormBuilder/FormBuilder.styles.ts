import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  .MuiFormControl-root {
    margin-bottom: 16px;
  }

  input[type='hidden'] ~ fieldset {
    border: none;
  }
`;
