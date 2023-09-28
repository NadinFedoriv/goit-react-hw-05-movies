import styled from 'styled-components';

export const ReviewsWrapper = styled.div`
  padding: 10px;  
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);

  p {
    font-size: 16px;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      
      h4 {
        font-size: 18px;
        margin-bottom: 10px;
        color: #4caf50;
      }

      p {
        font-size: 16px;
      }
    }
  }
`;
