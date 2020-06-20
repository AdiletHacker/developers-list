import React from 'react';
import s from "./Search.module.css";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Search = (props) => {
    return <div className={s.main}>
        <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="Position" className="mr-sm-2">Position: </Label>
                <Input type="search" name="password" id="Position" placeholder="Position" />
            </FormGroup>
            <Button color="light">Search</Button>
        </Form>
    </div >
}

export default Search;
