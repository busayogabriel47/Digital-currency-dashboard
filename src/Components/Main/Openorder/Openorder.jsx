

const Openorder = () => {
  return (
    <>
              <div className='main__openorder'>
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link text-primary fw-semibold active position-relative" id="pills-orders-tab" data-bs-toggle="pill" data-bs-target="#pills-orders" type="button" role="tab" aria-controls="pills-orders" aria-selected="true">Open Orders</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link text-primary fw-semibold position-relative" id="pills-positions-tab" data-bs-toggle="pill" data-bs-target="#pills-positions" type="button" role="tab" aria-controls="pills-positions" aria-selected="false">Positions</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link text-primary fw-semibold position-relative" id="pills-history-tab" data-bs-toggle="pill" data-bs-target="#pills-history" type="button" role="tab" aria-controls="pills-history" aria-selected="false">Order History</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link text-primary fw-semibold position-relative" id="pills-trade-tab" data-bs-toggle="pill" data-bs-target="#pills-trade" type="button" role="tab" aria-controls="pills-trade" aria-selected="false">Trade History</button>
                      </li>
                    </ul>
                    <div class="tab-content rounded-3 p-3 text-white" id="pills-tabContent">
                      <div class="tab-pane order fade show active" id="pills-orders" role="tabpanel" aria-labelledby="pills-orders-tab">
                            <div className="order__content">
                                <h5>No Open Order</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eveniet voluptates dolorem possimus saepe in neque consectetur perferendis aliquam ut dicta veniam recusandae a</p>
                            </div>
                      </div>
                      <div class="tab-pane fade order" id="pills-positions" role="tabpanel" aria-labelledby="pills-positions-tab">
                            <div className="order__content">
                                <h5>No Open Order</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eveniet voluptates dolorem possimus saepe in neque consectetur perferendis aliquam ut dicta veniam recusandae a</p>
                            </div>
                      </div>
                      <div class="tab-pane fade order" id="pills-history" role="tabpanel" aria-labelledby="pills-history-tab">
                            <div className="order__content">
                                <h5>No Open Order</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eveniet voluptates dolorem possimus saepe in neque consectetur perferendis aliquam ut dicta veniam recusandae a</p>
                            </div>
                      </div>
                      <div class="tab-pane fade order" id="pills-trade" role="tabpanel" aria-labelledby="pills-trade-tab">
                            <div className="order__content">
                                <h5>No Open Order</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eveniet voluptates dolorem possimus saepe in neque consectetur perferendis aliquam ut dicta veniam recusandae a</p>
                            </div>
                      </div>
                    </div>
               </div>
    </>
  )
}

export default Openorder