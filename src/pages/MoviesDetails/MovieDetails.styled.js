import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 0 20px;
  
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-size: 15px;
  color: #007acc;
  margin-bottom: 0px;
  transition: color 0.3s;

  &:hover {
    color: #004f7a;
  }

  svg {
    margin-right: 8px;
  }
`;

export const AdditionalInfo = styled.p`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const InfoItem = styled.li`
  margin-bottom: 10px;
  font-size: 18px;

  a {
    text-decoration: none;
    color: #007acc;
    transition: color 0.3s;

    &:hover {
      color: #004f7a;
    }
  }
`;