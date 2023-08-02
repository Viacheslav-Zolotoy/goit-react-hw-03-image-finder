import { styled } from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 300px;
  margin: 0 auto;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #787882;
  margin-bottom: 5px;
  border-radius: 5px;
`;

const ContactText = styled.p`
  margin: 0;
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
`;

export { List, ListItem, ContactText, DeleteButton };
