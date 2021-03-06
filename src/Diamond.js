import { Button, Table } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';

function Diamond() {
    const [position, setPosition] = useState([]);
    const [dataDiamond, setDataDiamond] = useState([]);
    const [mon, setMon] = useState([]);
    const [land, setLand] = useState([]);
    const [counter, setCounter] = useState(0);
    useEffect(
        () => {
            const id = setTimeout(() => {
                setCounter(counter + 1);
                getDataAll()
            }, 10000);
            return () => {
                clearTimeout(id);
            };
        },
        [counter],
    );
    const getDiamondPurple = async () => {
        setDataDiamond([])
        axios.get(`https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=3&sortBy=fixed_price&order=asc&name=purple%20diamond`)
            .then(res => {
                const tempData = res.data.list
                tempData.forEach(element => {
                    element.fixed_price = new Intl.NumberFormat().format(element.fixed_price)
                });
                setDataDiamond(res.data.list)
            })
            .catch(error => console.log(error));
    }
    const getMetamon = async () => {
        setMon([])
        axios.get(`https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=3&sortBy=fixed_price&name=&order=asc&saleType&category=13&tokenType`)
            .then(res => {
                const tempData = res.data.list
                tempData.forEach(element => {
                    element.fixed_price = new Intl.NumberFormat().format(element.fixed_price)
                });
                setMon(res.data.list)
            })
            .catch(error => console.log(error));
    }
    const getLand = async () => {
        setLand([])
        axios.get(`https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=3&sortBy=fixed_price&name=&order=asc&saleType&category=17&tokenType`)
            .then(res => {
                const tempData = res.data.list
                tempData.forEach(element => {
                    element.fixed_price = new Intl.NumberFormat().format(element.fixed_price)
                });
                setLand(res.data.list)
            })
            .catch(error => console.log(error));
    }
    const getPosition = async () => {
        setPosition([])
        axios.get(`https://market-api.radiocaca.com/nft-sales?saleType&category=16&tokenType&tokenId=0&token_standard=BEP1155&pageNo=1&pageSize=3&sortBy=fixed_price&order=asc&min_count=1&max_count=500`)
            .then(res => {
                const tempData = res.data.list
                tempData.forEach(element => {
                    element.fixed_price = new Intl.NumberFormat().format(element.fixed_price)
                });
                setPosition(res.data.list)
            })
            .catch(error => console.log(error));
    }
    const getDataAll = async () => {
        await getDiamondPurple()
        await getLand([])
        await getMetamon([])
        await getPosition([])
    }
    const refreshData = () => {
        getDataAll()
    }
    useEffect(() => {
        getDataAll()
    }, []);

    const columnsPosition = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <b style={{ color: 'green' }}>{text}</b>,
        },
        {
            title: 'Price',
            dataIndex: 'fixed_price',
            key: 'fixed_price',
            render: text => <b>{text}</b>,
        },
        {
            title: 'Mua',
            dataIndex: 'id',
            key: 'id',
            render: id => <a target='_blank' href={'https://market.radiocaca.com/#/market-place/'+ id} style={{padding: 10, backgroundColor: 'lightgrey', border: 0, borderRadius: 5}}>{'Mua'}</a>,
        },
    ];
    const columnsDiamond = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <b style={{ color: '#8f02d7' }}>{text}</b>,
        },
        {
            title: 'Price',
            dataIndex: 'fixed_price',
            key: 'fixed_price',
            render: text => <b>{text}</b>,
        },
        {
            title: 'Mua',
            dataIndex: 'id',
            key: 'id',
            render: id => <a target='_blank' href={'https://market.radiocaca.com/#/market-place/'+ id} style={{padding: 10, backgroundColor: 'lightgrey', border: 0, borderRadius: 5}}>{'Mua'}</a>,
        },
    ];
    const columnsMon = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <b style={{ color: '#a5a51a' }}>{text}</b>,
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
            render: img => <img src={img} style={{ width: 50, height: 50 }}></img>,
        },
        {
            title: 'Mua',
            dataIndex: 'id',
            key: 'id',
            render: id => <a target='_blank' href={'https://market.radiocaca.com/#/market-place/'+ id} style={{padding: 10, backgroundColor: 'lightgrey', border: 0, borderRadius: 5}}>{'Mua'}</a>,
        },
    ];
    const columnsLand = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <b style={{ color: 'darkGray' }}>{text}</b>,
        },
        {
            title: 'Price',
            dataIndex: 'fixed_price',
            key: 'fixed_price',
            render: text => <b>{text}</b>,
        },
        {
            title: 'Mua',
            dataIndex: 'id',
            key: 'id',
            render: id => <a target='_blank' href={'https://market.radiocaca.com/#/market-place/'+ id} style={{padding: 10, backgroundColor: 'lightgrey', border: 0, borderRadius: 5}}>{'Mua'}</a>,
        },
    ];
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex' }}>
                <Table style={{ margin: 20 }} dataSource={position && position} columns={columnsPosition} pagination={false} />
                <Table style={{ margin: 20 }} dataSource={dataDiamond && dataDiamond} columns={columnsDiamond} pagination={false} />
            </div>
            <div style={{ display: 'flex' }}>
                <Table style={{ margin: 20 }} dataSource={land && land} columns={columnsLand} pagination={false} />
                <Table style={{ margin: 20 }} dataSource={mon && mon} columns={columnsMon} pagination={false} />
            </div>
        </div>
    )
}

export default Diamond;
