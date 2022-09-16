import React from "react";
import { Spinner } from "react-bootstrap";

import './loading.css';

function Loading(){
    return(
        <section className="loading">
              <Spinner animation="border" variant="light" className="loading-item"/>
              loading
        </section>
    );
}
export default Loading;