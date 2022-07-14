import { Link } from "react-router-dom";
import { Avatar,List,Col} from 'antd';
import React from 'react';

function CountriesList(props) {
    const {countryData} = props
    return(
        <Col span={12}>
            <List
                bordered
                dataSource={countryData}
                renderItem={(country) => (
                    <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />}
                        title={<Link to={`/${country.alpha3Code}`}>{country.name.official}</Link>}
                        />
                    </List.Item>
                )}
            />
        </Col>
    )
}

export default CountriesList