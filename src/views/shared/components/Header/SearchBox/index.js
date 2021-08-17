import React from 'react';
import styled from 'styled-components';

import {MdMic, MdSearch} from "react-icons/all";
import {DefaultButton} from "../../Button/StyledButton";

const SearchBox = () => {
    return (
        <Container>
            <Form>
                <Label>
                    <Input placeholder={"검색"}/>
                    {/*<span>*/}
                    {/*    <img src="//www.gstatic.com/inputtools/images/tia.png" tia_field_name="search_query"*/}
                    {/*         tia_disable_swap="true" tia_property="youtube" alt=""/>*/}
                    {/*</span>*/}
                </Label>
                <SearchButton>
                    <MdSearch/>
                </SearchButton>
            </Form>
            <MicButton>
                <MdMic/>
            </MicButton>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  padding: 0 4px;
  height: 30px;
  flex-basis: 728px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
`;

const Label = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  width: 100px;
  height: 100%;
  border: 1px solid rgba(204, 204, 204);
  border-radius: 2px 0 0 2px;
  font-size: 14px;
  font-weight: 400;
  padding: 1px 6px;
`;


const SearchButton = styled(DefaultButton)`
    width: 51px;
    height: 30px;
    background: #f8f8f8;
    border: 1px solid rgba(204, 204, 204);
    border-left: 1px solid transparent;
    border-radius: 0 2px 2px 0;
    transition: 0.3s;
    svg {
      width: 20px;
      height: 20px;
      fill: #767676;
    }

    &:hover {
      background: rgb(240, 240, 240);
      svg {
        fill: rgb(51, 51, 51);
      }
    }

`;

const MicButton = styled(DefaultButton)`
    padding: 8px;
    border-radius: 50%;
  margin-left: 4px;
    svg {
      width: 24px;
      height: 24px;
      fill: rgb(96, 96, 96);
    }
    background: #f8f8f8;
`;

export default SearchBox;