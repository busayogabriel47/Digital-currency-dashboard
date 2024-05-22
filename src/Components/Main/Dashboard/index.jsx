import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Candlestick from '../Candlestick/Candlestick';
import Headertwo from '../../Headertwo/index';



const Dashboard = () => {
    const [tradingPairs, setTradingPairs] = useState([]);
    const [selectedPair, setSelectedPair] = useState('');
    const [candleData, setCandleData] = useState([]);

    useEffect(() => {
        const fetchTradingPairs = async () => {
            try {
                const response = await axios.get('https://api.binance.com/api/v3/ticker/24hr');
                setTradingPairs(response.data);
            } catch (error) {
                console.error('Error fetching trading pairs:', error);
            }
        };

        fetchTradingPairs();
    }, []);

    useEffect(() => {
        const fetchCandleData = async () => {
            if (selectedPair) {
                try {
                    const response = await axios.get(`https://api.binance.com/api/v3/klines?symbol=${selectedPair}&interval=1h&limit=100`);
                    const transformedData = response.data.map(item => ({
                        x: new Date(item[0]),
                        y: [parseFloat(item[1]), parseFloat(item[2]), parseFloat(item[3]), parseFloat(item[4])],
                    }));
                    setCandleData(transformedData);
                } catch (error) {
                    console.error('Error fetching candlestick data:', error);
                }
            }
        };

        fetchCandleData();
    }, [selectedPair]);

    return (
        <div>
            <Headertwo tradingPairs={tradingPairs} selectedPair={selectedPair} setSelectedPair={setSelectedPair} />
            <Candlestick data={candleData} />
        </div>
    );
};

export default Dashboard;