import { Button, Table } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';

function Diamond() {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [mon, setMon] = useState([]);
    const [land, setLand] = useState([]);
    const getData = () => {
        setData([])
        setData2([])
        setMon([])
        setLand([])
        axios.get(`https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=3&sortBy=fixed_price&name=&order=asc&saleType&category=16&tokenType`)
            .then(res => {
                const tempData = res.data.list
                tempData.forEach(element => {
                    element.fixed_price = new Intl.NumberFormat().format(element.fixed_price)
                });
                setData(res.data.list)
            })
            .catch(error => console.log(error));
            axios.get(`https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=3&sortBy=fixed_price&order=asc&name=purple%20diamond`)
            .then(res => {
                const tempData = res.data.list
                tempData.forEach(element => {
                    element.fixed_price = new Intl.NumberFormat().format(element.fixed_price)
                });
                setData2(res.data.list)
            })
            .catch(error => console.log(error));
            axios.get(`https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=3&sortBy=fixed_price&name=&order=asc&saleType&category=13&tokenType`)
            .then(res => {
                const tempData = res.data.list
                tempData.forEach(element => {
                    element.fixed_price = new Intl.NumberFormat().format(element.fixed_price)
                });
                setMon(res.data.list)
            })
            .catch(error => console.log(error));
            axios.get(`https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=3&sortBy=fixed_price&order=asc&name=&saleType&category=20&tokenType`)
            .then(res => {
                const tempData = res.data.list
                tempData.forEach(element => {
                    element.fixed_price = new Intl.NumberFormat().format(element.fixed_price)
                });
                setLand(res.data.list)
            })
            .catch(error => console.log(error));
    }
    const refreshData = () => {
        getData()
    }
    useEffect(() => {
        getData()
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <b style={{color: '#a5a51a'}}>{text}</b>,
        },
        {
            title: 'Price',
            dataIndex: 'fixed_price',
            key: 'fixed_price',
            render: text => <b>{text}</b>,
        },
    ];
    const columns2 = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <b style={{color: '#8f02d7'}}>{text}</b>,
        },
        {
            title: 'Price',
            dataIndex: 'fixed_price',
            key: 'fixed_price',
            render: text => <b>{text}</b>,
        },
    ];
    const columnsMon = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <b style={{color: '#a5a51a'}}>{text}</b>,
        },
        {
            title: 'Price',
            dataIndex: 'fixed_price',
            key: 'fixed_price',
            render: text => <b>{text}</b>,
        },
        {
            title: 'Image',
            dataIndex: 'image_url',
            key: 'image_url',
            render: img => <img src={img} style={{width: 50, height: 50}}></img>,
        },
    ];
    const columnsLand = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <b style={{color: '#a5a51a'}}>{text}</b>,
        },
        {
            title: 'Price',
            dataIndex: 'fixed_price',
            key: 'fixed_price',
            render: text => <b>{text}</b>,
        },
    ];
    return (
        <div style={{textAlign: 'center'}}>
            <div style={{display: 'flex'}}>
            <Table style={{margin: 20}} dataSource={data && data} columns={columns} pagination={false}/>
            <Table style={{margin: 20}} dataSource={data2 && data2} columns={columns2} pagination={false}/>
            </div>
            <div style={{display: 'flex'}}>
            <Table style={{margin: 20}} dataSource={mon && mon} columns={columnsMon} pagination={false}/>
            <Table style={{margin: 20}} dataSource={land && land} columns={columnsLand} pagination={false}/>
            </div>
            <Button type="primary" onClick={() => refreshData()}>Refresh</Button>
        </div>
    )
}

export default Diamond;
