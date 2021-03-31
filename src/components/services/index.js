import React from 'react';
import * as ReactRedux from "react-redux";
// import * as Components from "../../components";
import "./index.css";

export const Services = () => {
    const strings = ReactRedux.useSelector((state) => state.strings);
    const lang = ReactRedux.useSelector((state) => state.lang);

    return (
        <div id="services" className="container" style={{ marginTop: 50 }}>
            <h1 className="title">{strings[lang]["services-title"]}</h1>
            <div className="row row-cols-3 justify-content-center" style={{ textAlign: 'center' }}>
                <div className="col activities">
                    <svg className="container activities__icon icon-1"></svg>
                    <hr className="hr-line"/>
                    <p className="activities-info">{strings[lang]["construction"]}</p>                    
                </div>
                <div className="col activities">
                    <div className="container activities__icon icon-2" />
                    <hr className="hr-line"/>
                    <p className="activities-info">{strings[lang]["water-supply"]}</p>
                </div>
                <div className="col activities">
                    <div className="container activities__icon icon-3" />
                    <hr className="hr-line"/>
                    <p className="activities-info">{strings[lang]["hydraulic-engineering"]}</p>
                </div>
                <div className="col activities">
                    <div className="container activities__icon icon-4" />
                    <hr className="hr-line"/>
                    <p className="activities-info">{strings[lang]["electricity-supply"]}</p>
                </div>
                <div className="col activities">
                    <div className="container activities__icon icon-5" />
                    <hr className="hr-line"/>
                    <p className="activities-info">{strings[lang]["architectural-design"]}</p>
                </div>
                <div className="col activities">
                    <div className="container activities__icon icon-6" />
                    <hr className="hr-line"/>   
                    <p className="activities-info">{strings[lang]["heating-networks"]}</p>
                </div>
            </div>
        </div>
    );
};