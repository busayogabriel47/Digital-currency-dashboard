import React from 'react'
import "./style.css"

const Wallets = () => {
  return (
    <>
        <div class="wallet">
        <div class="wallet__container">
            <section class="wallet__info">
                <h2 class="wallet__title">My Wallet</h2>
                <table class="wallet__table">
                    <thead class="wallet__table-head">
                        <tr class="wallet__table-row">
                            <th class="wallet__table-header">Currency</th>
                            <th class="wallet__table-header">Balance</th>
                            <th class="wallet__table-header">Value (USD)</th>
                        </tr>
                    </thead>
                    <tbody class="wallet__table-body">
                        <tr class="wallet__table-row">
                            <td class="wallet__table-cell">Bitcoin (BTC)</td>
                            <td class="wallet__table-cell">0.5</td>
                            <td class="wallet__table-cell">$20,000</td>
                        </tr>
                        <tr class="wallet__table-row">
                            <td class="wallet__table-cell">Ethereum (ETH)</td>
                            <td class="wallet__table-cell">10</td>
                            <td class="wallet__table-cell">$30,000</td>
                        </tr>
                        <tr class="wallet__table-row">
                            <td class="wallet__table-cell">Binance Coin (BNB)</td>
                            <td class="wallet__table-cell">20</td>
                            <td class="wallet__table-cell">$10,000</td>
                        </tr>
                        <tr class="wallet__table-row">
                            <td class="wallet__table-cell">Cardano (ADA)</td>
                            <td class="wallet__table-cell">1000</td>
                            <td class="wallet__table-cell">$1,200</td>
                        </tr>
                        <tr class="wallet__table-row">
                            <td class="wallet__table-cell">Solana (SOL)</td>
                            <td class="wallet__table-cell">50</td>
                            <td class="wallet__table-cell">$5,000</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </div>
    </>
  )
}

export default Wallets