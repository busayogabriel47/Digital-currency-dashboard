
import infocircle from "../../../../assets/images/infor-circle.png"



const countries = [
    { code: "AFG", name: "Afghanistan" },
    { code: "ALB", name: "Albania" },
    { code: "DZA", name: "Algeria" },
    { code: "ASM", name: "American Samoa" },
    { code: "AND", name: "Andorra" },
    { code: "AGO", name: "Angola" },
    { code: "AIA", name: "Anguilla" },
    { code: "ATA", name: "Antarctica" },
    { code: "ATG", name: "Antigua and Barbuda" },
    { code: "ARG", name: "Argentina" },
];


const LimitForm = () => {
  return (
    <div>
    <form class="form">
        <div class="form__group">
            <div class="form__input-wrapper">
                <input class="form__input" type="text" id="input1" name="input1" />
                <span class="form__input-placeholder">Limit price <img src={infocircle} /></span>
                <span class="form__input-placeholder form__input-placeholder--right">0.00 USD</span>
            </div>
        </div>
        <div class="form__group">
            <div class="form__input-wrapper">
                <input class="form__input" type="text" id="input2" name="input2" />
                <span class="form__input-placeholder">Amount <img src={infocircle} /></span>
                <span class="form__input-placeholder form__input-placeholder--right">0.00 USD</span>
            </div>
        </div>
        <div class="form__group">
            <div class="form__input-wrapper">
                <input class="form__input" type="text" id="input3" name="input3" />
                <span class="form__input-placeholder">Type <img src={infocircle} /></span>
                <span class="form__input-placeholder form__input-placeholder--right">Placeholder 2</span>
            </div>
        </div>
        <div class="form__group">
            <input class="form__checkbox" type="checkbox" id="checkbox" name="checkbox" />
            <label class="form__checkbox-label" for="checkbox">Post Only</label>
        </div>
        <div class="form__total">
            <span>Total</span>
            <span class="form__total-amount">0.00</span>
        </div>
        <button class="form__button" type="submit">Buy BTC</button>


        <div className="total__accvalue">
            <div className="total__accvalue--container">{/* Total acc value*/}
                <div>
                    <p className="total__accvalue--text">Total account value</p>
                    <p className="total__accvalue--text">0.00</p>
                </div>

                <div>
                    <div className="form__group">
                        <select className="form__select" id="country" name="country">
                            {countries.map(country => (
                                <option key={country.code} value={country.code}>
                                    {country.code}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="total__accvalue--container">{/* Open order*/}
                <div>
                    <p className="total__accvalue--text">Open Orders</p>
                    <p className="total__accvalue--text">0.00</p>
                </div>

                <div>
                <p className="total__accvalue--text">Available</p>
                    <p className="total__accvalue--text">0.00</p>
                </div>
            </div>

            <button className="total__accvalue--btn">Deposit</button>
        </div>
    </form>
    </div>
  )
}

export default LimitForm