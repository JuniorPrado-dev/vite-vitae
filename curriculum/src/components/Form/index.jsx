import React from 'react';
import * as S from "./style"
export default function Form() {
  return (
    <S.StyleForm>
      <S.StyleLabel>
        Nome:
        <S.StyleInput></S.StyleInput>
      </S.StyleLabel>
      <S.StyleLabel>
        E-mail:
        <S.StyleInput></S.StyleInput>
      </S.StyleLabel>
      <S.StyleLabel>
        Cell:
        <S.StyleInput></S.StyleInput>
      </S.StyleLabel>
    </S.StyleForm>

  );
}