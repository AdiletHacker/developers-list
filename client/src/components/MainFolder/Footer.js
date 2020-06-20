import React from 'react';
import s from "./Footer.module.css";
import { Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Footer = (props) => {
    return <footer className={s.main}>
        <div>
            <Button color="light" size="lg">Show Ten More</Button>

            <Pagination>
                <PaginationItem>
                    <PaginationLink first href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                <PaginationItem active>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">5</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last href="#" />
                </PaginationItem>
            </Pagination>
        </div>

        <div>
            <Button size="lg" color="light">Apply Without Vacancy</Button>
        </div>
    </footer>
}

export default Footer;
