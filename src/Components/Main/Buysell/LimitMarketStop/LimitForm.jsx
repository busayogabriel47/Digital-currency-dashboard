
import infocircle from "../../../../assets/images/infor-circle.png"


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
    </form>
    </div>
  )
}

export default LimitForm