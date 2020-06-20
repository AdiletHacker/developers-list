import React, { useEffect } from 'react';
import s from "./DevList.module.css";
import Footer from './Footer';
import Search from './Search';
import { connect } from 'react-redux';
import { getDevelopers } from '../../store/developer';

const DevList = (props) => {
    useEffect(() => {
        props.getDevelopers();
    }, [props]);

    return <main className={s.main}>
        <Search />
        {
            props.developers.map(el => <div className={s.devBlock} key={el._id}>
                <div>
                    <h6 className="text-muted">${el.income}/hour</h6>
                    <h5>{el.position}</h5>
                </div>
                <div>
                    <h6 className="text-muted">{el.positionType}</h6>
                    <h6>{el.location}</h6>
                </div>
                <div>
                    <h6 className="text-muted">{el.skillsList}</h6>
                    <h6 className="text-muted">{el.experience} years</h6>
                </div>
            </div>)
        }
        <Footer />
    </main>
}

const mapStateToProps = (state) => ({
    developers: state.developer.developers
});

export default connect(mapStateToProps, { getDevelopers })(DevList);
