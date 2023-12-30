import * as React from 'react';
import {Link} from 'react-router-dom';

export function PageHeaderComponent({ title, dirArr }) {
    return (
        <>
            <div className="page-header">
                <h1 className="page-title my-auto">{title}</h1>
                <div>
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                    <Link to={`/`}></Link>
                    </li>
                    <li className="breadcrumb-item">
                    <Link to={`/agent/customer`}>My {formTitle}s</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">{`${formAction} ${formTitle}`}</li>
                </ol>
                </div>
            </div>
        </>
    )
}