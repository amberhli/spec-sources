import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
`;

const EntryContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Entry = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 4.5rem;
    margin-right: 4.5rem;
    margin-bottom: 1rem;
    background-color: white;
    height: 107px;
    border-radius: 2rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-right: 3rem;
    padding-left: 3rem;
    align-items: center;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const Number = styled.a`
    text-align: left;
    font-weight: 600;
    color: #36476D;
    font-size: 30px;
    margin-right: 5rem;
`;

const Name = styled.a`
    text-align: left;
    font-weight: 600;
    color: #36476D;
    font-size: 30px;
    margin-right: 5rem;
`;

const Email = styled.a`
    text-align: left;
    font-weight: 400;
    color: #828EA6;
    font-size: 28px;
`;

const DeleteButton = styled.button`
    background-color: #FF7676;
    width: 10rem;
    height: 3rem;
    color: white;
    font-weight: 600;
    border: none; 
    outline: none; 
    border-radius: 20px;
    margin-left: auto;
    white-space: nowrap;
`;
const List = ({ source, setSource }) => {

    const deleteSource = (index) => {
        setSource(source.filter((_, i) => i !== index));
    };

    return (
        <Container>
            <EntryContainer>
                {source.map((source, index) => (
                    <Entry key={index}>
                        <Number>{index + 1}</Number>
                        <Name>{source.name}</Name>
                        <Email>{source.email}</Email>
                        <DeleteButton onClick={() => deleteSource(index)}>
                            DELETE
                        </DeleteButton>
                    </Entry>
                ))};
            </EntryContainer>
        </Container>
    );
};
  
export default List;