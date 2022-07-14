import { PageHeader } from 'antd';
import React from 'react';

function Navbar () {
    return (
        <div className="page-header">
            <PageHeader
                ghost={false}
                title="React WikiCountries"
                >
            </PageHeader>
        </div>
    )
}
export default Navbar