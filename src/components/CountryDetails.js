import { useParams } from "react-router-dom";
import { Col,Card,Descriptions } from 'antd';
import { Link } from "react-router-dom";
//import { useState,useEffect } from 'react'
//const axios = require('axios').default;

function CountryDetails(props) {
    const {countryData} = props
    const {code} = useParams()
    /*const [country,setCountry] = useState({})
    const url = `https://ih-countries-api.herokuapp.com/countries/${code}`
    useEffect(()=>{
        debugger
        axios.get(url)
        .then((countryFromApi)=>{
            setCountry(countryFromApi)
            console.log("TEST",countryFromApi)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[countryCode])*/
    const country = countryData.find(country => country.alpha3Code === code)

    return (
        <Col span={8} offset={1}>
            <Card 
                cover={<img alt="flag" src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    style={{width:"100px",margin:"auto",marginTop:"10px"}}
                />}
                >
                <h4>{country.name.official}</h4>
                <Descriptions bordered>
                    <Descriptions.Item label="Capital">{country.capital}</Descriptions.Item>
                </Descriptions>
                <Descriptions bordered>
                    <Descriptions.Item label="Area">{country.area} km2</Descriptions.Item>
                </Descriptions>
                {country.borders.length > 0 && 
                <Descriptions bordered>
                    <Descriptions.Item label="Borders">
                    {country.borders.map((border)=>{
                        let country = countryData.find(country => country.alpha3Code === border)
                        return (<p><Link to={`/${border}`}>{country.name.official}</Link></p>)
                    })}
                    </Descriptions.Item>

                </Descriptions>}
                
            </Card>
        </Col>
    )
}

export default CountryDetails