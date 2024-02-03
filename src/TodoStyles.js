// TodoStyles.js

import styled from 'styled-components';

export const TodoContainer = styled.div`
  max-width: 400px;
  margin: auto;
  background-color: #3498db; /* Background color for the entire application */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const TodoHeader = styled.h1`
  text-align: center;
  color: #fff; /* White text for better visibility on a colored background */
`;

export const TodoForm = styled.div`
  display: flex;
  margin-bottom: 20px;

  input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #2c3e50; /* Darker border color for contrast */
    border-radius: 4px;
    outline: none;

    &:focus {
      border-color: #34495e; /* Darker border color on focus */
    }
  }

  button {
    padding: 10px 16px;
    font-size: 16px;
    margin-left: 8px;
    background-color: #2ecc71;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const TodoListContainer = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    background-color: #ecf0f1;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 8px;
  }

  input[type="checkbox"] {
    margin-right: 10px;
  }

  span {
    flex: 1;
    font-size: 16px;
    color: #333;
    text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  }

  button {
    background-color: #e74c3c;
    color: #fff;
    border: none;
    padding: 6px 10px;
    font-size: 14px;
    margin-left: 10px;
    cursor: pointer;
    border-radius: 4px;
  }
`;
