import React from 'react';
import s from "./AddDev.module.css";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addDeveloper } from '../store/developer';

const AddDev = (props) => {
    const onsubmit = (e) => {
        if (e) e.preventDefault();
        let expValue;

        const radioValue = document.getElementsByName("radio")
        radioValue.forEach(el => {
            if (el.checked) expValue = el.value;
        });

        const rootElem = e.target.children[1].children;
        const developer = {
            income: rootElem.income.value,
            position: rootElem.position.value,
            positionType: rootElem.positionType.value,
            location: rootElem.location.value,
            skillsList: rootElem.skillsList.value,
            experience: expValue
        };

        props.addDeveloper(developer);
        props.history.push("/");
    };

    return <header className={s.main}>
        <Form onSubmit={onsubmit}>
            <h4>Creating New Developer</h4>
            <FormGroup>
                <Label for="income" className="mr-sm-2">Income Per Hour: </Label>
                <Input required type="text" name="income" id="income" placeholder="Income Per Hour" />

                <Label for="position" className="mr-sm-2">Position: </Label>
                <Input required type="text" name="password" id="position" placeholder="Position" />

                <Label for="positionType">Position Type: </Label>
                <Input required type="select" name="positionType" id="positionType">
                    <option value="Full-Time">Full-Time</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Office Plankton">Office Plankton</option>
                    <option value="Freelanc">Freelance</option>
                    <option value="Web Employee">Web Employee</option>
                </Input>

                <Label for="location" className="mr-sm-2">Location: </Label>
                <Input required type="text" name="location" id="location" placeholder="Location" />

                <Label for="skillsList">Skills List: </Label>
                <Input required type="textarea" name="skillsList" id="skillsList" placeholder="Node.js, JavaScript, Python, C#, Java, Etc..." />
            </FormGroup>

            <FormGroup className={s.experience} check>
                <h5>Experience</h5>
                <Label check>
                    <Input required type="radio" name="radio" value="0-1" />untill 1 year
                </Label>
                <Label check>
                    <Input required type="radio" name="radio" value="1-3" /> from 1-3 years
                </Label>
                <Label check>
                    <Input required type="radio" name="radio" value="3-5" /> from 3-5 years
                </Label>
                <Label check>
                    <Input required type="radio" name="radio" value="5-10" /> from 5-10 years
                </Label>
                <Label check>
                    <Input required type="radio" name="radio" value="10+" /> above 10 years
                </Label>
            </FormGroup>
            <Button size="lg">Submit</Button>
        </Form>
    </header>
}

const mapStateToProps = (state) => ({
    developers: state.developer.developers
});

export default connect(mapStateToProps, { addDeveloper })(AddDev);





