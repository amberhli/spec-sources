import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
`;

const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #AFD7FA;
    border-radius: 30px;
    margin-left: 4.5rem;
    margin-right: 4.5rem;
    margin-bottom: 5rem;
    padding: 3.125rem;
    border: 1px solid black;
`;

const SourceContainer = styled.div`
    display: flex;
    flex-direction: stretch;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

const Header2 = styled.a`
    text-align: left;
    color: white;
    font-weight: 600;
    font-size: 1.25rem;
`;

const InputField = styled.input`
    flex-grow: 1;
    height: 30px; 
    background-color: white; 
    padding: 0.5rem;
    margin-left: 1rem;
    margin-right: 3rem;
    outline: none;
    border: none;
`;

const AddButton = styled.button`
    background-color: #56C854;
    width: 16rem;
    height: 3rem;
    color: white;
    font-weight: 600;
    border: none; 
    outline: none; 
    border-radius: 20px;
    margin-left: auto;
    white-space: nowrap;
`;

const Input = ({ source, setSource }) => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");

    const addSource = () => {
        if(name.trim() && email.trim()){ // does this handle empty string?
          setSource([...source, {name, email}]); // append to end of list
          setName("");
          setEmail("");
          console.log(source);
        }
    };

    return (
      <>
        <Container>
            <SearchContainer>
                <SourceContainer>
                    <Header2>   
                        Source Name:
                    </Header2>
                    <InputField
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></InputField>
                </SourceContainer>
                <SourceContainer>
                    <Header2>   
                        Source Email:
                    </Header2>
                    <InputField
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></InputField>
                </SourceContainer>
                <AddButton onClick={addSource}>
                    ADD
                </AddButton>
            </SearchContainer>
        </Container>
      </>
    );
};

export default Input;