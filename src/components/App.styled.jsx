import styled from 'styled-components';

export const Layer = styled.div`
  /* max-width: 910px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 0 auto; */
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const LoaderStyle = styled.div`
  /* position: fixed; */
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* margin-top: 30%; */
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
  /* margin: auto; */
`;
