import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const Headertwo = () => {
    const [tradingPairs, setTradingPairs] = useState([]);
    const [selectedPair, setSelectedPair] = useState('');
    const [pairData, setPairData] = useState({});
    const [pairLogo, setPairLogo] = useState('');

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
        const fetchPairData = async () => {
            if (selectedPair) {
                try {
                    const response = await axios.get(`https://api.binance.com/api/v3/klines?symbol=${selectedPair}&interval=1h&limit=1`);
                    setPairData({
                        change: response.data[0][7], // 24h change
                        high: response.data[0][2],   // 24h high
                        low: response.data[0][3],    // 24h low
                        volume: response.data[0][5]  // 24h volume
                    });

                    // Fetch logo URL for the selected pair
                    const pairInfo = tradingPairs.find(pair => pair.symbol === selectedPair);
                    if (pairInfo && pairInfo.icons) {
                        setPairLogo(pairInfo.icons[0].url);
                    }
                } catch (error) {
                    console.error('Error fetching pair data:', error);
                }
            }
        };

        fetchPairData();
    }, [selectedPair, tradingPairs]);

    return (
        <div className='headertwo'>
            <div className='headertwo__select'>
                <select className='headertwo_btn' value={selectedPair} onChange={(e) => setSelectedPair(e.target.value)}>
                    <option value=''>Select a pair</option>
                    {tradingPairs.map(pair => (
                        <option key={pair.symbol} value={pair.symbol}>{pair.symbol}</option>
                    ))}
                </select>
                {pairLogo && <img src={pairLogo} alt=''/>}
            </div>

            <div className='headertwo__price'>
                <p>${pairData.high}</p>
            </div>

            <div className='headertwo__btcdata'>
                <div>
                    <span className='header__btcdata-hrs'>24h change</span>
                    <p className='header__btcdata-digit'>{pairData.change}</p>
                </div>

                <div>
                    <span className='header__btcdata-hrs'>24h high</span>
                    <p className='header__btcdata-digit'>{pairData.high}</p>
                </div>

                <div>
                    <span className='header__btcdata-hrs'>24h low</span>
                    <p className='header__btcdata-digit'>{pairData.low}</p>
                </div>

                <div>
                    <span className='header__btcdata-hrs'>24h volume</span>
                    <p className='header__btcdata-digit'>{pairData.volume}</p>
                </div>
            </div>
        </div>
    );
}

export default Headertwo;