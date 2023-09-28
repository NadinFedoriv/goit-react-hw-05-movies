import styled from 'styled-components';

export const CastCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 10px;
`;

export const ActorCard = styled.div`
  width: 210px;
  margin-bottom: 10px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  img {
    max-width: 100%;
    height: auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 10px;

    li {
      font-size: 14px;
      margin-bottom: 10px;

      p {
        margin: 0;
        color: #333;
      }
    }
  }
`;
