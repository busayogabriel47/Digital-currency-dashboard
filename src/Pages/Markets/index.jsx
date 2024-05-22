import "./style.css"



const Markets = () => {
  return (
    <>
        <main class="main">
        <div class="main__container">
            <section class="market">
                <h2 class="market__title">Top Cryptocurrencies</h2>
                <table class="market__table">
                    <thead class="market__table-head">
                        <tr class="market__table-row">
                            <th class="market__table-header">Name</th>
                            <th class="market__table-header">Price</th>
                            <th class="market__table-header">24h Change</th>
                            <th class="market__table-header">Market Cap</th>
                        </tr>
                    </thead>
                    <tbody class="market__table-body">
                        <tr class="market__table-row">
                            <td class="market__table-cell">Bitcoin</td>
                            <td class="market__table-cell">$40,000</td>
                            <td class="market__table-cell">+5%</td>
                            <td class="market__table-cell">$800B</td>
                        </tr>
                        <tr class="market__table-row">
                            <td class="market__table-cell">Ethereum</td>
                            <td class="market__table-cell">$3,000</td>
                            <td class="market__table-cell">+3%</td>
                            <td class="market__table-cell">$400B</td>
                        </tr>
                        <tr class="market__table-row">
                            <td class="market__table-cell">Binance Coin</td>
                            <td class="market__table-cell">$500</td>
                            <td class="market__table-cell">+2%</td>
                            <td class="market__table-cell">$80B</td>
                        </tr>
                        <tr class="market__table-row">
                            <td class="market__table-cell">Cardano</td>
                            <td class="market__table-cell">$1.20</td>
                            <td class="market__table-cell">+4%</td>
                            <td class="market__table-cell">$40B</td>
                        </tr>
                        <tr class="market__table-row">
                            <td class="market__table-cell">Solana</td>
                            <td class="market__table-cell">$100</td>
                            <td class="market__table-cell">+6%</td>
                            <td class="market__table-cell">$30B</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </main>
    </>
  )
}

export default Markets