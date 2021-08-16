import React from 'react';
import styled from 'styled-components';

import {MdSearch} from "react-icons/all";

const SearchBox = () => {
    return (
        <Container>
            <Form>
                <Label>
                    <Input placeholder={"검색"}/>
                    <span>
                        <img src="//www.gstatic.com/inputtools/images/tia.png" tia_field_name="search_query"
                             tia_disable_swap="true" tia_property="youtube"/>
                    </span>
                </Label>
                <Button>
                    <MdSearch/>
                </Button>
            </Form>
        </Container>
)
}

const Container = styled.div`

`;

const Form = styled.form`

`;

const Label = styled.label`

`;

const Input = styled.input`

`;

const Button = styled.div`
    
`;
export default SearchBox;