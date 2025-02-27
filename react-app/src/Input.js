import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
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

const InputField = styled.div`
    flex-grow: 1;
    height: 30px; 
    background-color: white; 
    padding: 0.5rem;
    margin-left: 1rem;
    margin-right: 3rem;
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

const Input = () => {
    return (
      <>
        <Container>
            <SearchContainer>
                <SourceContainer>
                    <Header2>   
                        Source Name:
                    </Header2>
                    <InputField></InputField>
                </SourceContainer>
                <SourceContainer>
                    <Header2>   
                        Source Email:
                    </Header2>
                    <InputField></InputField>
                </SourceContainer>
                <AddButton>ADD</AddButton>
            </SearchContainer>
        </Container>
      </>
    );
};

export default Input;