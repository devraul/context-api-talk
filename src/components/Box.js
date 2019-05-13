import styled from 'styled-components';

export default styled.div`
  padding: ${props => props.padding || '1rem'};
  border: 1px dashed ${props => props.color};
  position: relative;
  &::before {
    content: "${props => props.content}";
    color: ${props => props.color};
    position: absolute;
    font-size: 12px;
    top: 6px;
    left: 6px;
  }
`;
