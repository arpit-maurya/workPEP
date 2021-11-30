let addReservation = document.querySelector('.addReservation');
addReservation.addEventListener('click', (e) => {
 let div = document.createElement('div');
 div.classList.add('formBody');
 div.innerHTML = `
 <div class="modalContainer">
    <div class="modal">
      <header class="modal__header">
        <div class="heading">
          <div>Add a reservation</div>

          <div class="heading__btns">
            <i class="fas fa-cog"></i>
            <i class="far fa-copy"></i>
            <button><i class="far fa-save"></i>&nbsp;Save</button>
            <i class="fas fa-times ">X</i>
          </div>
        </div>

        <div class="hero__btns">
          <span>Room n</span>
          <span>Lack of Payment</span>
        </div>
      </header>

      <div class="modal__body">
        <div class="nav__btns">
          <div class="bookingArea"><i class="fas fa-book"></i>&ensp;<span>Booking</span></div>
          <div class = "clientArea" style= "border:none;color:black;"><i class="fas fa-user-alt"></i>&ensp;<span>Client</span></div>
          <div class = "detailsArea"><i class="far fa-file-alt"></i>&ensp;<span>Details</span></div>
          <div class= "invoiceArea"><i class="fas fa-file-alt"></i>&ensp;<span>Invoices</span></div>
        </div>

       <div class="bodyModal_container">
        <div class="bodymodal">
          <strong class="sc-hEsumM text" style="font-size: 18px;">Term</strong>
          <div class="bookingdate">
            <div class="datelabel">
              <label for="dateFrom" class="fromToText">From</label>
              <label for="dateFrom" class="fromToText">to</label>
            </div>
            <div class="datepicker">
              <input type="date" id="bookingduration1" name="bookingduration"
                style="border: 1px solid rgb(182, 180, 180);border-radius: 5px; width: 40%;padding: 7px 5px; margin-right: 25px;">
              <input type="date" id="bookingduration2" name="bookingduration"
                style="border: 1px solid rgb(182, 180, 180);border-radius: 5px; width: 40%;padding: 7px 5px;margin-bottom: 25px;">
            </div>
            <div class="timepicker">
              <input type="time" id="bookingduration1" name="bookingduration"
                style="border: 1px solid rgb(182, 180, 180);border-radius: 5px; width: 40%;padding: 7px 5px;margin-right: 25px;">
              <input type="time" id="bookingduration2" name="bookingduration"
                style="border: 1px solid rgb(182, 180, 180);border-radius: 5px; width: 40%;padding: 7px 5px;">
            </div>
          </div>
          <div class="number">
            <div>
              <label for="dateFrom" class="fromToText">Number of nights</label>
              <div style="width: 100%;margin-top: 5px;">
                <input type="text" name="fname" style="width:98%;">
              </div>
            </div>
          </div>

          <strong class="sc-hEsumM text" style="font-size: 18px; margin-top: 15px;">Number of Guests</strong>
          <div class="number">
            <div>
              <label for="dateFrom" class="fromToText">Adults</label>
              <div style="width: 100%;margin-top: 5px;">
                <input type="text" name="fname" style="width:98%;">
              </div>
            </div>
          </div>

          <strong class="sc-hEsumM text" style="font-size: 18px; margin-top: 15px;">Room</strong>

        </div>
        <div class="bodymodal" style="overflow-x: hidden;">
          <strong class="sc-hEsumM text" style="font-size: 18px;">Price</strong>





          <div class="sc-bxivhb gLWEzJ">
            <div class="sc-bxivhb lffwST" style="margin-top: 4.25px; width: 100%;">

              <div class="sc-bxivhb sc-tilXH dAvvdK">
                <div class="sc-bxivhb gLWEzJ">
                  <div class="sc-bxivhb lffwST" style="margin-bottom: 8.5px;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC"><label for="endPrice" class="sc-cvbbAY eZIKiR">Final
                        price</label>
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="endPrice"
                            inputmode="numeric" class="sc-brqgnP sc-epnACN kFopZv" type="text" value=""
                            style="text-align: right;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 40.8px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                          <div color="#00a541" class="sc-jnlKLf jooZsp"
                            style="border-radius: 0px 3px 3px 0px; height: 32.3px; min-width: 32.3px; width: 32.3px;">
                            <img width="20.4" height="20.4"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACKSURBVEhL3ZVRCoAwDEN3O0HvfwH1Htp+FEpY1m6gjD0IJNAsnytLcohu0dMp7eyikEtUeyCjUxRix72ke78NjCqkVupRSPoQmHfAZ+YVzJRWkXkFMyV9CAwP+My8gpnSKjKvYKakD4HhAZ/NexmYKa2ieS8DMyV9CMwz8PmHo9/eyIg+vomWopQXLqm5jLrNp0MAAAAASUVORK5CYII="
                              alt="main price"
                              style="filter: invert(100%) sepia(25%) saturate(729%) hue-rotate(212deg) brightness(109%) contrast(101%);">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sc-bxivhb sc-cMljjf dAbKeC"><label for="pricePerPerson" class="sc-cvbbAY eZIKiR">Price per
                      person</label>
                    <div class="sc-bxivhb gLWEzJ">
                      <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="pricePerPerson"
                          inputmode="numeric" class="sc-brqgnP sc-iQNlJl grpwVb" type="text" value=""
                          style="text-align: end;">
                        <div class="sc-bxivhb exZuWt" style="position: absolute; right: 40.8px; top: 9.35px;">
                          <div class="sc-hXRMBi dGBcTC">EUR</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sc-bxivhb sc-cMljjf dAbKeC"><label for="pricePerDay" class="sc-cvbbAY eZIKiR">Price per
                      day</label>
                    <div class="sc-bxivhb gLWEzJ">
                      <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="pricePerDay"
                          inputmode="numeric" class="sc-brqgnP sc-iQNlJl grpwVb" type="text" value=""
                          style="text-align: end;">
                        <div class="sc-bxivhb exZuWt" style="position: absolute; right: 40.8px; top: 9.35px;">
                          <div class="sc-hXRMBi dGBcTC">EUR</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sc-bxivhb iVSKTp" style="margin-bottom: 17px; margin-top: 17px;">
                    <div class="sc-bHwgHz gjrWKo">Down payment</div>
                    <div style="border-bottom: 1px solid rgb(223, 223, 223); margin: 0px 17px; width: 100%;"></div>
                    <div class="sc-bRBYWo fpcNLq"><svg stroke="currentColor" fill="none" stroke-width="2"
                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" size="13.6" height="13.6"
                        width="13.6" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg></div>
                  </div>
                  <div class="sc-bxivhb sc-cMljjf dAbKeC">
                    <div class="sc-bxivhb gLWEzJ">
                      <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="advancePaymentPrice"
                          inputmode="numeric" class="sc-brqgnP sc-iQNlJl eunMVF" type="text" value=""
                          style="text-align: end;">
                        <div class="sc-bxivhb exZuWt" style="position: absolute; right: 40.8px; top: 9.35px;">
                          <div class="sc-hXRMBi dGBcTC">EUR</div>
                        </div>
                        <div class="sc-bxivhb exZuWt"
                          style="cursor: pointer; position: absolute; right: 8.5px; top: 9.35px;"><svg
                            stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                            stroke-linecap="round" stroke-linejoin="round" size="13.6" height="13.6" width="13.6"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path
                              d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                            </path>
                          </svg></div>
                      </div>
                    </div>
                  </div>
                  <div class="sc-bxivhb lffwST">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC" style="margin: 8.5px 0px;"><label for="advancePriceDate"
                        class="sc-cvbbAY eZIKiR">Date of payment</label>
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb ccvFeF" style="position: relative; z-index: 100;"><input
                            name="advancePriceDate" type="text" class="sc-brqgnP bXGThG" readonly="" value=""
                            style="background: transparent; cursor: pointer;">
                          <div class="sc-bxivhb exZuWt" style="pointer-events: none; position: absolute; right: 8.5px;">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                              stroke-linecap="round" stroke-linejoin="round" cursor="pointer" size="15.299999999999999"
                              height="15.299999999999999" width="15.299999999999999" xmlns="http://www.w3.org/2000/svg">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sc-bxivhb sc-cMljjf dAbKeC" style="z-index: 120;"><label for="advancePaymentType"
                        class="sc-cvbbAY eZIKiR">Payment</label>
                      <div class="sc-bxivhb gLWEzJ">
                        <div class=" css-2b097c-container">
                          <div class=" css-wi0uvx-control">
                            <div class=" css-bdvd70">
                              <div class=" css-1wa3eu0-placeholder">Select</div><input id="react-select-211-input"
                                readonly="" tabindex="0" class="css-62g3xt-dummyInput" value="">
                            </div>
                            <div class=" css-1wy0on6"><span class=" css-1hyfx7x"></span>
                              <div aria-hidden="true" class=" css-b4g0mn"><svg stroke="currentColor" fill="currentColor"
                                  stroke-width="0" viewBox="0 0 24 24" size="20.4" height="20.4" width="20.4"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7 10l5 5 5-5z"></path>
                                </svg></div>
                            </div>
                          </div><input name="advancePaymentType" type="hidden" value="">
                        </div>
                      </div>
                    </div>
                    <div class="sc-bxivhb lffwST">
                      <div class="sc-jAaTju craEcZ" style="margin-bottom: 0px;">Waiting for payment time</div>
                      <div class="sc-bxivhb UjGsQ">
                        <div class="sc-bxivhb sc-cMljjf hIQGOH"><label for="timeToPayDays" class="sc-cvbbAY eZIKiR">No.
                            of days</label>
                          <div class="sc-bxivhb gLWEzJ">
                            <div class="sc-bxivhb sc-btzYZH cTppYF" style="min-height: 32.3px; position: relative;"><a
                                class="sc-kafWEX sc-feJyhm undefined-button-decrese sc-iELTvK bfjoVk"><svg
                                  stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                  stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg></a><input name="timeToPayDays" type="number" class="sc-brqgnP sc-jwKygS goHApO"
                                value="">
                              <div
                                style="color: rgb(150, 150, 150); display: none; font-size: 11.05px; position: absolute; right: 10px;">
                              </div><a class="sc-kafWEX sc-feJyhm undefined-button-increse sc-cmTdod iVGoxb"><svg
                                  stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                  stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <line x1="12" y1="5" x2="12" y2="19"></line>
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg></a>
                            </div>
                          </div>
                        </div>
                        <div style="margin: 0px 8.5px;"></div>
                        <div class="sc-bxivhb sc-cMljjf jXqqum"><label for="timeToPayDate"
                            class="sc-cvbbAY eZIKiR">To</label>
                          <div class="sc-bxivhb gLWEzJ">
                            <div class="sc-bxivhb ccvFeF" style="position: relative; z-index: 100;"><input
                                name="timeToPayDate" type="text" class="sc-brqgnP bXGThG" readonly="" value=""
                                style="background: transparent; cursor: pointer;">
                              <div class="sc-bxivhb exZuWt"
                                style="pointer-events: none; position: absolute; right: 8.5px;"><svg
                                  stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                  stroke-linecap="round" stroke-linejoin="round" cursor="pointer"
                                  size="15.299999999999999" height="15.299999999999999" width="15.299999999999999"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                  <line x1="16" y1="2" x2="16" y2="6"></line>
                                  <line x1="8" y1="2" x2="8" y2="6"></line>
                                  <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sc-bxivhb lffwST">
                      <div class="sc-jAaTju craEcZ" style="margin-bottom: 0px; margin-top: 17px;">Waiting for payment
                        time in case of a reminder</div>
                      <div class="sc-bxivhb UjGsQ">
                        <div class="sc-bxivhb sc-cMljjf hIQGOH"><label for="timeToWaitDays" class="sc-cvbbAY eZIKiR">No.
                            of days</label>
                          <div class="sc-bxivhb gLWEzJ">
                            <div class="sc-bxivhb sc-btzYZH cTppYF" style="min-height: 32.3px; position: relative;"><a
                                class="sc-kafWEX sc-feJyhm undefined-button-decrese sc-iELTvK bfjoVk"><svg
                                  stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                  stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg></a><input name="timeToWaitDays" type="number" class="sc-brqgnP sc-jwKygS goHApO"
                                value="">
                              <div
                                style="color: rgb(150, 150, 150); display: none; font-size: 11.05px; position: absolute; right: 10px;">
                              </div><a class="sc-kafWEX sc-feJyhm undefined-button-increse sc-cmTdod iVGoxb"><svg
                                  stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                  stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <line x1="12" y1="5" x2="12" y2="19"></line>
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg></a>
                            </div>
                          </div>
                        </div>
                        <div style="margin: 0px 8.5px;"></div>
                        <div class="sc-bxivhb sc-cMljjf jXqqum"><label for="timeToWaitDate"
                            class="sc-cvbbAY eZIKiR">To</label>
                          <div class="sc-bxivhb gLWEzJ">
                            <div class="sc-bxivhb ccvFeF" style="position: relative; z-index: 100;"><input
                                name="timeToWaitDate" type="text" class="sc-brqgnP bXGThG" readonly="" value=""
                                style="background: transparent; cursor: pointer;">
                              <div class="sc-bxivhb exZuWt"
                                style="pointer-events: none; position: absolute; right: 8.5px;"><svg
                                  stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                  stroke-linecap="round" stroke-linejoin="round" cursor="pointer"
                                  size="15.299999999999999" height="15.299999999999999" width="15.299999999999999"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                  <line x1="16" y1="2" x2="16" y2="6"></line>
                                  <line x1="8" y1="2" x2="8" y2="6"></line>
                                  <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sc-bxivhb iVSKTp" style="margin-bottom: 17px; margin-top: 17px;">
                    <div class="sc-bHwgHz gjrWKo">Payment on place</div>
                    <div style="border-bottom: 1px solid rgb(223, 223, 223); margin: 0px 17px; width: 100%;"></div>
                    <div class="sc-bRBYWo fpcNLq"><svg stroke="currentColor" fill="none" stroke-width="2"
                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" size="13.6" height="13.6"
                        width="13.6" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg></div>
                  </div>
                  <div class="sc-bxivhb sc-cMljjf dAbKeC" style="cursor: not-allowed;">
                    <div class="sc-bxivhb gLWEzJ">
                      <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="payOnPlacePrice"
                          inputmode="numeric" disabled="" class="sc-brqgnP sc-iQNlJl hDPEZE" type="text" value=""
                          style="text-align: end;">
                        <div class="sc-bxivhb exZuWt" style="position: absolute; right: 40.8px; top: 9.35px;">
                          <div class="sc-hXRMBi dGBcTC">EUR</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sc-bxivhb lffwST">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC"><label for="payOnPlaceDate" class="sc-cvbbAY eZIKiR">Date of
                        payment</label>
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb ccvFeF" style="position: relative; z-index: 100;"><input
                            name="payOnPlaceDate" type="text" class="sc-brqgnP bXGThG" readonly="" value=""
                            style="background: transparent; cursor: pointer;">
                          <div class="sc-bxivhb exZuWt" style="pointer-events: none; position: absolute; right: 8.5px;">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                              stroke-linecap="round" stroke-linejoin="round" cursor="pointer" size="15.299999999999999"
                              height="15.299999999999999" width="15.299999999999999" xmlns="http://www.w3.org/2000/svg">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sc-bxivhb sc-cMljjf dAbKeC" style="z-index: unset;"><label for="payOnPlacePaymentType"
                        class="sc-cvbbAY eZIKiR">Payment</label>
                      <div class="sc-bxivhb gLWEzJ">
                        <div class=" css-2b097c-container">
                          <div class=" css-wi0uvx-control">
                            <div class=" css-bdvd70">
                              <div class=" css-1wa3eu0-placeholder">Select</div><input id="react-select-212-input"
                                readonly="" tabindex="0" class="css-62g3xt-dummyInput" value="">
                            </div>
                            <div class=" css-1wy0on6"><span class=" css-1hyfx7x"></span>
                              <div aria-hidden="true" class=" css-b4g0mn"><svg stroke="currentColor" fill="currentColor"
                                  stroke-width="0" viewBox="0 0 24 24" size="20.4" height="20.4" width="20.4"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7 10l5 5 5-5z"></path>
                                </svg></div>
                            </div>
                          </div><input name="payOnPlacePaymentType" type="hidden" value="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sc-bxivhb lffwST" style="margin: 8.5px 0px;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC"><label for="deposit"
                        class="sc-cvbbAY eZIKiR">Deposit</label>
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="deposit"
                            inputmode="numeric" class="sc-brqgnP sc-iQNlJl grpwVb" type="text" value=""
                            style="text-align: end;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 40.8px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sc-bxivhb sc-cMljjf dAbKeC"><label for="localTax" class="sc-cvbbAY eZIKiR">Local
                      tax</label>
                    <div class="sc-bxivhb gLWEzJ">
                      <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="localTax"
                          inputmode="numeric" class="sc-brqgnP sc-iQNlJl grpwVb" type="text" value=""
                          style="text-align: end;">
                        <div class="sc-bxivhb exZuWt" style="position: absolute; right: 40.8px; top: 9.35px;">
                          <div class="sc-hXRMBi dGBcTC">EUR</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sc-bxivhb exZuWt" style="margin-left: auto; margin-top: 8.5px;">
                    <div class="sc-bxivhb sc-cMljjf bkNtvW" style="z-index: 0;">
                      <div class="sc-bxivhb lffwST">
                        <div class="sc-bxivhb exZuWt" style="position: relative; z-index: 0;"><input name="withoutTax"
                            type="checkbox" class="sc-jlyJG iOcrWA" value="false">
                          <div class="sc-gipzik ixmrSw"></div>
                        </div>
                      </div><label class="sc-cvbbAY fkzQxt">Included in the price</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bodymodal">
          <strong class="sc-hEsumM text" style="font-size: 18px;">Additional Services</strong>
          <div class="sc-bxivhb sc-tilXH dAvvdK">
            <div class="sc-bxivhb gLWEzJ">
              <div class="sc-bxivhb gNBDcN" style="margin-bottom: 6.8px; width: 100%;">
                <div class="sc-bxivhb lffwST" style="width: 100%;">
                  <div
                    style="color: rgb(105, 106, 109); font-size: 11.9px; font-weight: 500; margin: 7.65px 0px; padding-right: 23.8px; width: 100%; word-break: break-all;">
                    cleaning fee</div>
                  <div class="sc-bxivhb iVSKTp" style="width: 100%;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC">
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="services[0].price"
                            inputmode="numeric" class="sc-brqgnP sc-iQNlJl ejOlfv" type="text" value=""
                            style="text-align: end;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 8.5px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                        </div>
                      </div>
                    </div><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"
                      style="margin-right: -9.35px; padding: 9.35px;"><span class="MuiIconButton-label"><svg
                          stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                          stroke-linejoin="round" color="red" size="12.75" height="12.75" width="12.75"
                          xmlns="http://www.w3.org/2000/svg" style="color: red;">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                          </path>
                        </svg></span><span class="MuiTouchRipple-root"></span></button>
                  </div>
                </div>
              </div>
              <div class="sc-bxivhb gNBDcN" style="margin-bottom: 6.8px; width: 100%;">
                <div class="sc-bxivhb lffwST" style="width: 100%;">
                  <div
                    style="color: rgb(105, 106, 109); font-size: 11.9px; font-weight: 500; margin: 7.65px 0px; padding-right: 23.8px; width: 100%; word-break: break-all;">
                    laundry fee</div>
                  <div class="sc-bxivhb iVSKTp" style="width: 100%;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC">
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="services[1].price"
                            inputmode="numeric" class="sc-brqgnP sc-iQNlJl ejOlfv" type="text" value=""
                            style="text-align: end;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 8.5px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                        </div>
                      </div>
                    </div><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"
                      style="margin-right: -9.35px; padding: 9.35px;"><span class="MuiIconButton-label"><svg
                          stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                          stroke-linejoin="round" color="red" size="12.75" height="12.75" width="12.75"
                          xmlns="http://www.w3.org/2000/svg" style="color: red;">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                          </path>
                        </svg></span><span class="MuiTouchRipple-root"></span></button>
                  </div>
                </div>
              </div>
              <div class="sc-bxivhb gNBDcN" style="margin-bottom: 6.8px; width: 100%;">
                <div class="sc-bxivhb lffwST" style="width: 100%;">
                  <div
                    style="color: rgb(105, 106, 109); font-size: 11.9px; font-weight: 500; margin: 7.65px 0px; padding-right: 23.8px; width: 100%; word-break: break-all;">
                    parking fee</div>
                  <div class="sc-bxivhb iVSKTp" style="width: 100%;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC">
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="services[2].price"
                            inputmode="numeric" class="sc-brqgnP sc-iQNlJl ejOlfv" type="text" value=""
                            style="text-align: end;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 8.5px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                        </div>
                      </div>
                    </div><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"
                      style="margin-right: -9.35px; padding: 9.35px;"><span class="MuiIconButton-label"><svg
                          stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                          stroke-linejoin="round" color="red" size="12.75" height="12.75" width="12.75"
                          xmlns="http://www.w3.org/2000/svg" style="color: red;">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                          </path>
                        </svg></span><span class="MuiTouchRipple-root"></span></button>
                  </div>
                </div>
              </div>
              <div class="sc-bxivhb gNBDcN" style="margin-bottom: 6.8px; width: 100%;">
                <div class="sc-bxivhb lffwST" style="width: 100%;">
                  <div
                    style="color: rgb(105, 106, 109); font-size: 11.9px; font-weight: 500; margin: 7.65px 0px; padding-right: 23.8px; width: 100%; word-break: break-all;">
                    bicycle hire fee</div>
                  <div class="sc-bxivhb iVSKTp" style="width: 100%;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC">
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="services[3].price"
                            inputmode="numeric" class="sc-brqgnP sc-iQNlJl ejOlfv" type="text" value=""
                            style="text-align: end;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 8.5px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                        </div>
                      </div>
                    </div><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"
                      style="margin-right: -9.35px; padding: 9.35px;"><span class="MuiIconButton-label"><svg
                          stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                          stroke-linejoin="round" color="red" size="12.75" height="12.75" width="12.75"
                          xmlns="http://www.w3.org/2000/svg" style="color: red;">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                          </path>
                        </svg></span><span class="MuiTouchRipple-root"></span></button>
                  </div>
                </div>
              </div>
              <div class="sc-bxivhb gNBDcN" style="margin-bottom: 6.8px; width: 100%;">
                <div class="sc-bxivhb lffwST" style="width: 100%;">
                  <div
                    style="color: rgb(105, 106, 109); font-size: 11.9px; font-weight: 500; margin: 7.65px 0px; padding-right: 23.8px; width: 100%; word-break: break-all;">
                    quad (ATV) hire fee</div>
                  <div class="sc-bxivhb iVSKTp" style="width: 100%;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC">
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="services[4].price"
                            inputmode="numeric" class="sc-brqgnP sc-iQNlJl ejOlfv" type="text" value=""
                            style="text-align: end;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 8.5px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                        </div>
                      </div>
                    </div><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"
                      style="margin-right: -9.35px; padding: 9.35px;"><span class="MuiIconButton-label"><svg
                          stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                          stroke-linejoin="round" color="red" size="12.75" height="12.75" width="12.75"
                          xmlns="http://www.w3.org/2000/svg" style="color: red;">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                          </path>
                        </svg></span><span class="MuiTouchRipple-root"></span></button>
                  </div>
                </div>
              </div>
              <div class="sc-bxivhb gNBDcN" style="margin-bottom: 6.8px; width: 100%;">
                <div class="sc-bxivhb lffwST" style="width: 100%;">
                  <div
                    style="color: rgb(105, 106, 109); font-size: 11.9px; font-weight: 500; margin: 7.65px 0px; padding-right: 23.8px; width: 100%; word-break: break-all;">
                    food fee</div>
                  <div class="sc-bxivhb iVSKTp" style="width: 100%;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC">
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="services[5].price"
                            inputmode="numeric" class="sc-brqgnP sc-iQNlJl ejOlfv" type="text" value=""
                            style="text-align: end;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 8.5px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                        </div>
                      </div>
                    </div><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"
                      style="margin-right: -9.35px; padding: 9.35px;"><span class="MuiIconButton-label"><svg
                          stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                          stroke-linejoin="round" color="red" size="12.75" height="12.75" width="12.75"
                          xmlns="http://www.w3.org/2000/svg" style="color: red;">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                          </path>
                        </svg></span><span class="MuiTouchRipple-root"></span></button>
                  </div>
                </div>
              </div>
              <div class="sc-bxivhb gNBDcN" style="margin-bottom: 6.8px; width: 100%;">
                <div class="sc-bxivhb lffwST" style="width: 100%;">
                  <div
                    style="color: rgb(105, 106, 109); font-size: 11.9px; font-weight: 500; margin: 7.65px 0px; padding-right: 23.8px; width: 100%; word-break: break-all;">
                    room drinks cabinet fee</div>
                  <div class="sc-bxivhb iVSKTp" style="width: 100%;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC">
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="services[6].price"
                            inputmode="numeric" class="sc-brqgnP sc-iQNlJl ejOlfv" type="text" value=""
                            style="text-align: end;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 8.5px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                        </div>
                      </div>
                    </div><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"
                      style="margin-right: -9.35px; padding: 9.35px;"><span class="MuiIconButton-label"><svg
                          stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                          stroke-linejoin="round" color="red" size="12.75" height="12.75" width="12.75"
                          xmlns="http://www.w3.org/2000/svg" style="color: red;">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                          </path>
                        </svg></span><span class="MuiTouchRipple-root"></span></button>
                  </div>
                </div>
              </div>
              <div class="sc-bxivhb gNBDcN" style="margin-bottom: 6.8px; width: 100%;">
                <div class="sc-bxivhb lffwST" style="width: 100%;">
                  <div
                    style="color: rgb(105, 106, 109); font-size: 11.9px; font-weight: 500; margin: 7.65px 0px; padding-right: 23.8px; width: 100%; word-break: break-all;">
                    transfer to/from airport fee</div>
                  <div class="sc-bxivhb iVSKTp" style="width: 100%;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC">
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="services[7].price"
                            inputmode="numeric" class="sc-brqgnP sc-iQNlJl ejOlfv" type="text" value=""
                            style="text-align: end;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 8.5px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                        </div>
                      </div>
                    </div><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"
                      style="margin-right: -9.35px; padding: 9.35px;"><span class="MuiIconButton-label"><svg
                          stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                          stroke-linejoin="round" color="red" size="12.75" height="12.75" width="12.75"
                          xmlns="http://www.w3.org/2000/svg" style="color: red;">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                          </path>
                        </svg></span><span class="MuiTouchRipple-root"></span></button>
                  </div>
                </div>
              </div>
              <div class="sc-bxivhb gNBDcN" style="margin-bottom: 6.8px; width: 100%;">
                <div class="sc-bxivhb lffwST" style="width: 100%;">
                  <div
                    style="color: rgb(105, 106, 109); font-size: 11.9px; font-weight: 500; margin: 7.65px 0px; padding-right: 23.8px; width: 100%; word-break: break-all;">
                    transfer to/from railway station fee</div>
                  <div class="sc-bxivhb iVSKTp" style="width: 100%;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC">
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="services[8].price"
                            inputmode="numeric" class="sc-brqgnP sc-iQNlJl ejOlfv" type="text" value=""
                            style="text-align: end;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 8.5px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                        </div>
                      </div>
                    </div><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"
                      style="margin-right: -9.35px; padding: 9.35px;"><span class="MuiIconButton-label"><svg
                          stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                          stroke-linejoin="round" color="red" size="12.75" height="12.75" width="12.75"
                          xmlns="http://www.w3.org/2000/svg" style="color: red;">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                          </path>
                        </svg></span><span class="MuiTouchRipple-root"></span></button>
                  </div>
                </div>
              </div>
              <hr class="MuiDivider-root" style="margin-top: 1.7px;">
              <div class="sc-bxivhb fPJBgQ" style="margin-right: 23.8px; margin-top: 8.5px;">
                <div style="color: rgb(105, 106, 109); font-size: 11.05px;">Sum</div>
                <div style="color: rgb(105, 106, 109); font-size: 11.05px; margin-right: 23.8px;"><span>0,00</span> EUR
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  </div>
 `;
 document.body.appendChild(div)
 let faTimes = document.querySelector('.fa-times ');
 faTimes.addEventListener('click', (e) => {
  div.remove();

 })


 let clientArea = div.querySelector('.clientArea');
 let bookingArea = div.querySelector('.bookingArea');
 clientArea.addEventListener('click', (e) => {
  let bodyDiv = document.querySelector('.bodyModal_container');
  

  bodyDiv.innerHTML = `
   <div class="bodymodal">
          <strong class="sc-hEsumM text" style="font-size: 18px;">Main Guest</strong>
          <div class="sc-bxivhb gLWEzJ">
            <div style="margin-top: 4.25px; width: 100%;" class="sc-bxivhb lffwST">
              
              <div class="sc-bxivhb sc-tilXH jdenrG">
                <div class="sc-bxivhb lffwST">
                  <div class="sc-hGoxap dAPQgh">
                    <div style="height: 35.7px;" class="sc-bxivhb liVsep">
                      <div class="sc-bxivhb sc-cMljjf dAbKeC"style="width: 100%;">
                        <div class="sc-bxivhb gLWEzJ">
                          <div style="position: relative;" class="sc-bxivhb eQsgCV"><input id="text-input"
                              name="guest.name" autocomplete="off" placeholder="Enter name and surname (Main guest)"
                              type="text" class="sc-brqgnP fWAkok" value=""></div>
                        </div>
                      </div><a class="sc-laTMn eKnREn"><svg stroke="currentColor" fill="none" stroke-width="2"
                          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" size="18.7" height="18.7"
                          width="18.7" xmlns="http://www.w3.org/2000/svg">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg></a>
                    </div>
                    <div class="sc-bxivhb exZuWt"></div>
                  </div>
                  <div class="sc-bxivhb cnQnkY">
                    <div style="width: 100%;" class="sc-bxivhb lffwST">
                      <div style="width: 100%;" class="sc-bxivhb hCKtHI">
                        <div style="margin-bottom: 8.5px; width: 100%;" class="sc-bxivhb sc-cMljjf dAbKeC"><label for="guest.phone"
                            class="sc-cvbbAY eZIKiR">Phone</label>
                          <div class="sc-bxivhb gLWEzJ">
                            <div style="position: relative;" class="sc-bxivhb eQsgCV"><input id="text-input"
                                name="guest.phone" type="text" class="sc-brqgnP fWAkok" value=""></div>
                          </div>
                        </div>
                        <div style="margin-top: 28.9px;" class="sc-bxivhb exZuWt"><a
                            style="border-radius: 0px; height: 32.3px;" class="sc-bZQynM sc-gzVnrw eXEqpq"><svg
                              stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                              stroke-linecap="round" stroke-linejoin="round" size="13.6" height="13.6" width="13.6"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                              </path>
                            </svg></a></div>
                        <div style="margin-top: 28.9px;" class="sc-bxivhb exZuWt"><a
                            style="border-radius: 0px; height: 32.3px;" class="sc-bZQynM sc-gzVnrw eXEqpq"><svg
                              stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                              stroke-linecap="round" stroke-linejoin="round" size="13.6" height="13.6" width="13.6"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg></a></div>
                      </div>
                      <div style="width: 100%;" class="sc-bxivhb hCKtHI">
                        <div class="sc-bxivhb sc-cMljjf dAbKeC" style="width: 100%;"><label for="guest.email"
                            class="sc-cvbbAY eZIKiR">Email</label>
                          <div class="sc-bxivhb gLWEzJ">
                            <div style="position: relative;" class="sc-bxivhb eQsgCV"><input id="text-input"
                                name="guest.email" type="text" class="sc-brqgnP fWAkok" value=""></div>
                          </div>
                        </div>
                        <div style="margin-top: 28.9px;" class="sc-bxivhb exZuWt"><a
                            style="border-radius: 0px; height: 32.3px;" class="sc-bZQynM sc-gzVnrw eXEqpq"><svg
                              stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                              stroke-linecap="round" stroke-linejoin="round" size="13.6" height="13.6" width="13.6"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                              </path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg></a></div>
                        <div style="margin-top: 28.9px;" class="sc-bxivhb flpuXm"><a
                            style="border-radius: 0px; height: 32.3px;" class="sc-bZQynM sc-gzVnrw eXEqpq"><svg
                              stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                              stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"
                              xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="3"></circle>
                              <path
                                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                              </path>
                            </svg></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bodymodal">
          <strong class="sc-hEsumM text" style="font-size: 18px;">Additional Guests</strong>
          <div class="sc-bxivhb gLWEzJ">
            <div style="margin-top: 4.25px; width: 100%;" class="sc-bxivhb lffwST">
              
              <div class="sc-bxivhb sc-tilXH jdenrG">
                <div class="sc-bxivhb lffwST">
                  <div class="sc-hGoxap dAPQgh">
                    <div style="height: 35.7px;" class="sc-bxivhb liVsep">
                      <div class="sc-bxivhb sc-cMljjf dAbKeC"style="width: 100%;">
                        <div class="sc-bxivhb gLWEzJ">
                          <div style="position: relative;" class="sc-bxivhb eQsgCV"><input id="text-input"
                              name="guest.name" autocomplete="off" placeholder="Enter name and surname (Main guest)"
                              type="text" class="sc-brqgnP fWAkok" value=""></div>
                        </div>
                      </div><a class="sc-laTMn eKnREn"><svg stroke="currentColor" fill="none" stroke-width="2"
                          viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" size="18.7" height="18.7"
                          width="18.7" xmlns="http://www.w3.org/2000/svg">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg></a>
                    </div>
                    <div class="sc-bxivhb exZuWt"></div>
                  </div>
                  <div class="sc-bxivhb cnQnkY">
                    <div style="width: 100%;" class="sc-bxivhb lffwST">
                      <div style="width: 100%;" class="sc-bxivhb hCKtHI">
                        <div style="margin-bottom: 8.5px; width: 100%;" class="sc-bxivhb sc-cMljjf dAbKeC"><label for="guest.phone"
                            class="sc-cvbbAY eZIKiR">Phone</label>
                          <div class="sc-bxivhb gLWEzJ">
                            <div style="position: relative;" class="sc-bxivhb eQsgCV"><input id="text-input"
                                name="guest.phone" type="text" class="sc-brqgnP fWAkok" value=""></div>
                          </div>
                        </div>
                        <div style="margin-top: 28.9px;" class="sc-bxivhb exZuWt"><a
                            style="border-radius: 0px; height: 32.3px;" class="sc-bZQynM sc-gzVnrw eXEqpq"><svg
                              stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                              stroke-linecap="round" stroke-linejoin="round" size="13.6" height="13.6" width="13.6"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                              </path>
                            </svg></a></div>
                        <div style="margin-top: 28.9px;" class="sc-bxivhb exZuWt"><a
                            style="border-radius: 0px; height: 32.3px;" class="sc-bZQynM sc-gzVnrw eXEqpq"><svg
                              stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                              stroke-linecap="round" stroke-linejoin="round" size="13.6" height="13.6" width="13.6"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg></a></div>
                      </div>
                      <div style="width: 100%;" class="sc-bxivhb hCKtHI">
                        <div class="sc-bxivhb sc-cMljjf dAbKeC" style="width: 100%;"><label for="guest.email"
                            class="sc-cvbbAY eZIKiR">Email</label>
                          <div class="sc-bxivhb gLWEzJ">
                            <div style="position: relative;" class="sc-bxivhb eQsgCV"><input id="text-input"
                                name="guest.email" type="text" class="sc-brqgnP fWAkok" value=""></div>
                          </div>
                        </div>
                        <div style="margin-top: 28.9px;" class="sc-bxivhb exZuWt"><a
                            style="border-radius: 0px; height: 32.3px;" class="sc-bZQynM sc-gzVnrw eXEqpq"><svg
                              stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                              stroke-linecap="round" stroke-linejoin="round" size="13.6" height="13.6" width="13.6"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                              </path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg></a></div>
                        <div style="margin-top: 28.9px;" class="sc-bxivhb flpuXm"><a
                            style="border-radius: 0px; height: 32.3px;" class="sc-bZQynM sc-gzVnrw eXEqpq"><svg
                              stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                              stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"
                              xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="3"></circle>
                              <path
                                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                              </path>
                            </svg></a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bodymodal">
          <strong class="sc-hEsumM text" style="font-size: 18px;">Company</strong>
          <div style="height: 35.7px;" class="sc-bxivhb liVsep">
            <div class="sc-bxivhb sc-cMljjf dAbKeC"style="width: 100%;">
              <div class="sc-bxivhb gLWEzJ">
                <div style="position: relative;" class="sc-bxivhb eQsgCV"><input id="text-input"
                    name="guest.name" autocomplete="off" placeholder="Enter name and surname (Main guest)"
                    type="text" class="sc-brqgnP fWAkok" value=""></div>
              </div>
            </div><a class="sc-laTMn eKnREn"><svg stroke="currentColor" fill="none" stroke-width="2"
                viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" size="18.7" height="18.7"
                width="18.7" xmlns="http://www.w3.org/2000/svg">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg></a>
          </div>
        </div>
  `;



 });


 // let bookingArea = div.querySelector('.bookingArea')
 bookingArea.addEventListener('click', (e) => {
  let bodyDiv = document.querySelector('.bodyModal_container');
  bodyDiv.innerHTML = `
          <div class="bodymodal">
          <strong class="sc-hEsumM text" style="font-size: 18px;">Term</strong>
          <div class="bookingdate">
            <div class="datelabel">
              <label for="dateFrom" class="fromToText">From</label>
              <label for="dateFrom" class="fromToText">to</label>
            </div>
            <div class="datepicker">
              <input type="date" id="bookingduration1" name="bookingduration"
                style="border: 1px solid rgb(182, 180, 180);border-radius: 5px; width: 40%;padding: 7px 5px; margin-right: 25px;">
              <input type="date" id="bookingduration2" name="bookingduration"
                style="border: 1px solid rgb(182, 180, 180);border-radius: 5px; width: 40%;padding: 7px 5px;margin-bottom: 25px;">
            </div>
            <div class="timepicker">
              <input type="time" id="bookingduration1" name="bookingduration"
                style="border: 1px solid rgb(182, 180, 180);border-radius: 5px; width: 40%;padding: 7px 5px;margin-right: 25px;">
              <input type="time" id="bookingduration2" name="bookingduration"
                style="border: 1px solid rgb(182, 180, 180);border-radius: 5px; width: 40%;padding: 7px 5px;">
            </div>
          </div>
          <div class="number">
            <div>
              <label for="dateFrom" class="fromToText">Number of nights</label>
              <div style="width: 100%;margin-top: 5px;">
                <input type="text" name="fname" style="width:98%;">
              </div>
            </div>
          </div>

          <strong class="sc-hEsumM text" style="font-size: 18px; margin-top: 15px;">Number of Guests</strong>
          <div class="number">
            <div>
              <label for="dateFrom" class="fromToText">Adults</label>
              <div style="width: 100%;margin-top: 5px;">
                <input type="text" name="fname" style="width:98%;">
              </div>
            </div>
          </div>

          <strong class="sc-hEsumM text" style="font-size: 18px; margin-top: 15px;">Room</strong>

        </div>
        <div class="bodymodal" style="overflow-x: hidden;">
          <strong class="sc-hEsumM text" style="font-size: 18px;">Price</strong>





          <div class="sc-bxivhb gLWEzJ">
            <div class="sc-bxivhb lffwST" style="margin-top: 4.25px; width: 100%;">

              <div class="sc-bxivhb sc-tilXH dAvvdK">
                <div class="sc-bxivhb gLWEzJ">
                  <div class="sc-bxivhb lffwST" style="margin-bottom: 8.5px;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC"><label for="endPrice" class="sc-cvbbAY eZIKiR">Final
                        price</label>
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="endPrice"
                            inputmode="numeric" class="sc-brqgnP sc-epnACN kFopZv" type="text" value=""
                            style="text-align: right;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 40.8px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                          <div color="#00a541" class="sc-jnlKLf jooZsp"
                            style="border-radius: 0px 3px 3px 0px; height: 32.3px; min-width: 32.3px; width: 32.3px;">
                            <img width="20.4" height="20.4"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACKSURBVEhL3ZVRCoAwDEN3O0HvfwH1Htp+FEpY1m6gjD0IJNAsnytLcohu0dMp7eyikEtUeyCjUxRix72ke78NjCqkVupRSPoQmHfAZ+YVzJRWkXkFMyV9CAwP+My8gpnSKjKvYKakD4HhAZ/NexmYKa2ieS8DMyV9CMwz8PmHo9/eyIg+vomWopQXLqm5jLrNp0MAAAAASUVORK5CYII="
                              alt="main price"
                              style="filter: invert(100%) sepia(25%) saturate(729%) hue-rotate(212deg) brightness(109%) contrast(101%);">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sc-bxivhb sc-cMljjf dAbKeC"><label for="pricePerPerson" class="sc-cvbbAY eZIKiR">Price per
                      person</label>
                    <div class="sc-bxivhb gLWEzJ">
                      <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="pricePerPerson"
                          inputmode="numeric" class="sc-brqgnP sc-iQNlJl grpwVb" type="text" value=""
                          style="text-align: end;">
                        <div class="sc-bxivhb exZuWt" style="position: absolute; right: 40.8px; top: 9.35px;">
                          <div class="sc-hXRMBi dGBcTC">EUR</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sc-bxivhb sc-cMljjf dAbKeC"><label for="pricePerDay" class="sc-cvbbAY eZIKiR">Price per
                      day</label>
                    <div class="sc-bxivhb gLWEzJ">
                      <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="pricePerDay"
                          inputmode="numeric" class="sc-brqgnP sc-iQNlJl grpwVb" type="text" value=""
                          style="text-align: end;">
                        <div class="sc-bxivhb exZuWt" style="position: absolute; right: 40.8px; top: 9.35px;">
                          <div class="sc-hXRMBi dGBcTC">EUR</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sc-bxivhb iVSKTp" style="margin-bottom: 17px; margin-top: 17px;">
                    <div class="sc-bHwgHz gjrWKo">Down payment</div>
                    <div style="border-bottom: 1px solid rgb(223, 223, 223); margin: 0px 17px; width: 100%;"></div>
                    <div class="sc-bRBYWo fpcNLq"><svg stroke="currentColor" fill="none" stroke-width="2"
                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" size="13.6" height="13.6"
                        width="13.6" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg></div>
                  </div>
                  <div class="sc-bxivhb sc-cMljjf dAbKeC">
                    <div class="sc-bxivhb gLWEzJ">
                      <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="advancePaymentPrice"
                          inputmode="numeric" class="sc-brqgnP sc-iQNlJl eunMVF" type="text" value=""
                          style="text-align: end;">
                        <div class="sc-bxivhb exZuWt" style="position: absolute; right: 40.8px; top: 9.35px;">
                          <div class="sc-hXRMBi dGBcTC">EUR</div>
                        </div>
                        <div class="sc-bxivhb exZuWt"
                          style="cursor: pointer; position: absolute; right: 8.5px; top: 9.35px;"><svg
                            stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                            stroke-linecap="round" stroke-linejoin="round" size="13.6" height="13.6" width="13.6"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path
                              d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                            </path>
                          </svg></div>
                      </div>
                    </div>
                  </div>
                  <div class="sc-bxivhb lffwST">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC" style="margin: 8.5px 0px;"><label for="advancePriceDate"
                        class="sc-cvbbAY eZIKiR">Date of payment</label>
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb ccvFeF" style="position: relative; z-index: 100;"><input
                            name="advancePriceDate" type="text" class="sc-brqgnP bXGThG" readonly="" value=""
                            style="background: transparent; cursor: pointer;">
                          <div class="sc-bxivhb exZuWt" style="pointer-events: none; position: absolute; right: 8.5px;">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                              stroke-linecap="round" stroke-linejoin="round" cursor="pointer" size="15.299999999999999"
                              height="15.299999999999999" width="15.299999999999999" xmlns="http://www.w3.org/2000/svg">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sc-bxivhb sc-cMljjf dAbKeC" style="z-index: 120;"><label for="advancePaymentType"
                        class="sc-cvbbAY eZIKiR">Payment</label>
                      <div class="sc-bxivhb gLWEzJ">
                        <div class=" css-2b097c-container">
                          <div class=" css-wi0uvx-control">
                            <div class=" css-bdvd70">
                              <div class=" css-1wa3eu0-placeholder">Select</div><input id="react-select-211-input"
                                readonly="" tabindex="0" class="css-62g3xt-dummyInput" value="">
                            </div>
                            <div class=" css-1wy0on6"><span class=" css-1hyfx7x"></span>
                              <div aria-hidden="true" class=" css-b4g0mn"><svg stroke="currentColor" fill="currentColor"
                                  stroke-width="0" viewBox="0 0 24 24" size="20.4" height="20.4" width="20.4"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7 10l5 5 5-5z"></path>
                                </svg></div>
                            </div>
                          </div><input name="advancePaymentType" type="hidden" value="">
                        </div>
                      </div>
                    </div>
                    <div class="sc-bxivhb lffwST">
                      <div class="sc-jAaTju craEcZ" style="margin-bottom: 0px;">Waiting for payment time</div>
                      <div class="sc-bxivhb UjGsQ">
                        <div class="sc-bxivhb sc-cMljjf hIQGOH"><label for="timeToPayDays" class="sc-cvbbAY eZIKiR">No.
                            of days</label>
                          <div class="sc-bxivhb gLWEzJ">
                            <div class="sc-bxivhb sc-btzYZH cTppYF" style="min-height: 32.3px; position: relative;"><a
                                class="sc-kafWEX sc-feJyhm undefined-button-decrese sc-iELTvK bfjoVk"><svg
                                  stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                  stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg></a><input name="timeToPayDays" type="number" class="sc-brqgnP sc-jwKygS goHApO"
                                value="">
                              <div
                                style="color: rgb(150, 150, 150); display: none; font-size: 11.05px; position: absolute; right: 10px;">
                              </div><a class="sc-kafWEX sc-feJyhm undefined-button-increse sc-cmTdod iVGoxb"><svg
                                  stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                  stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <line x1="12" y1="5" x2="12" y2="19"></line>
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg></a>
                            </div>
                          </div>
                        </div>
                        <div style="margin: 0px 8.5px;"></div>
                        <div class="sc-bxivhb sc-cMljjf jXqqum"><label for="timeToPayDate"
                            class="sc-cvbbAY eZIKiR">To</label>
                          <div class="sc-bxivhb gLWEzJ">
                            <div class="sc-bxivhb ccvFeF" style="position: relative; z-index: 100;"><input
                                name="timeToPayDate" type="text" class="sc-brqgnP bXGThG" readonly="" value=""
                                style="background: transparent; cursor: pointer;">
                              <div class="sc-bxivhb exZuWt"
                                style="pointer-events: none; position: absolute; right: 8.5px;"><svg
                                  stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                  stroke-linecap="round" stroke-linejoin="round" cursor="pointer"
                                  size="15.299999999999999" height="15.299999999999999" width="15.299999999999999"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                  <line x1="16" y1="2" x2="16" y2="6"></line>
                                  <line x1="8" y1="2" x2="8" y2="6"></line>
                                  <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sc-bxivhb lffwST">
                      <div class="sc-jAaTju craEcZ" style="margin-bottom: 0px; margin-top: 17px;">Waiting for payment
                        time in case of a reminder</div>
                      <div class="sc-bxivhb UjGsQ">
                        <div class="sc-bxivhb sc-cMljjf hIQGOH"><label for="timeToWaitDays" class="sc-cvbbAY eZIKiR">No.
                            of days</label>
                          <div class="sc-bxivhb gLWEzJ">
                            <div class="sc-bxivhb sc-btzYZH cTppYF" style="min-height: 32.3px; position: relative;"><a
                                class="sc-kafWEX sc-feJyhm undefined-button-decrese sc-iELTvK bfjoVk"><svg
                                  stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                  stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg></a><input name="timeToWaitDays" type="number" class="sc-brqgnP sc-jwKygS goHApO"
                                value="">
                              <div
                                style="color: rgb(150, 150, 150); display: none; font-size: 11.05px; position: absolute; right: 10px;">
                              </div><a class="sc-kafWEX sc-feJyhm undefined-button-increse sc-cmTdod iVGoxb"><svg
                                  stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                  stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <line x1="12" y1="5" x2="12" y2="19"></line>
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg></a>
                            </div>
                          </div>
                        </div>
                        <div style="margin: 0px 8.5px;"></div>
                        <div class="sc-bxivhb sc-cMljjf jXqqum"><label for="timeToWaitDate"
                            class="sc-cvbbAY eZIKiR">To</label>
                          <div class="sc-bxivhb gLWEzJ">
                            <div class="sc-bxivhb ccvFeF" style="position: relative; z-index: 100;"><input
                                name="timeToWaitDate" type="text" class="sc-brqgnP bXGThG" readonly="" value=""
                                style="background: transparent; cursor: pointer;">
                              <div class="sc-bxivhb exZuWt"
                                style="pointer-events: none; position: absolute; right: 8.5px;"><svg
                                  stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                  stroke-linecap="round" stroke-linejoin="round" cursor="pointer"
                                  size="15.299999999999999" height="15.299999999999999" width="15.299999999999999"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                  <line x1="16" y1="2" x2="16" y2="6"></line>
                                  <line x1="8" y1="2" x2="8" y2="6"></line>
                                  <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sc-bxivhb iVSKTp" style="margin-bottom: 17px; margin-top: 17px;">
                    <div class="sc-bHwgHz gjrWKo">Payment on place</div>
                    <div style="border-bottom: 1px solid rgb(223, 223, 223); margin: 0px 17px; width: 100%;"></div>
                    <div class="sc-bRBYWo fpcNLq"><svg stroke="currentColor" fill="none" stroke-width="2"
                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" size="13.6" height="13.6"
                        width="13.6" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg></div>
                  </div>
                  <div class="sc-bxivhb sc-cMljjf dAbKeC" style="cursor: not-allowed;">
                    <div class="sc-bxivhb gLWEzJ">
                      <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="payOnPlacePrice"
                          inputmode="numeric" disabled="" class="sc-brqgnP sc-iQNlJl hDPEZE" type="text" value=""
                          style="text-align: end;">
                        <div class="sc-bxivhb exZuWt" style="position: absolute; right: 40.8px; top: 9.35px;">
                          <div class="sc-hXRMBi dGBcTC">EUR</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sc-bxivhb lffwST">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC"><label for="payOnPlaceDate" class="sc-cvbbAY eZIKiR">Date of
                        payment</label>
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb ccvFeF" style="position: relative; z-index: 100;"><input
                            name="payOnPlaceDate" type="text" class="sc-brqgnP bXGThG" readonly="" value=""
                            style="background: transparent; cursor: pointer;">
                          <div class="sc-bxivhb exZuWt" style="pointer-events: none; position: absolute; right: 8.5px;">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                              stroke-linecap="round" stroke-linejoin="round" cursor="pointer" size="15.299999999999999"
                              height="15.299999999999999" width="15.299999999999999" xmlns="http://www.w3.org/2000/svg">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sc-bxivhb sc-cMljjf dAbKeC" style="z-index: unset;"><label for="payOnPlacePaymentType"
                        class="sc-cvbbAY eZIKiR">Payment</label>
                      <div class="sc-bxivhb gLWEzJ">
                        <div class=" css-2b097c-container">
                          <div class=" css-wi0uvx-control">
                            <div class=" css-bdvd70">
                              <div class=" css-1wa3eu0-placeholder">Select</div><input id="react-select-212-input"
                                readonly="" tabindex="0" class="css-62g3xt-dummyInput" value="">
                            </div>
                            <div class=" css-1wy0on6"><span class=" css-1hyfx7x"></span>
                              <div aria-hidden="true" class=" css-b4g0mn"><svg stroke="currentColor" fill="currentColor"
                                  stroke-width="0" viewBox="0 0 24 24" size="20.4" height="20.4" width="20.4"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7 10l5 5 5-5z"></path>
                                </svg></div>
                            </div>
                          </div><input name="payOnPlacePaymentType" type="hidden" value="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sc-bxivhb lffwST" style="margin: 8.5px 0px;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC"><label for="deposit"
                        class="sc-cvbbAY eZIKiR">Deposit</label>
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="deposit"
                            inputmode="numeric" class="sc-brqgnP sc-iQNlJl grpwVb" type="text" value=""
                            style="text-align: end;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 40.8px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sc-bxivhb sc-cMljjf dAbKeC"><label for="localTax" class="sc-cvbbAY eZIKiR">Local
                      tax</label>
                    <div class="sc-bxivhb gLWEzJ">
                      <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="localTax"
                          inputmode="numeric" class="sc-brqgnP sc-iQNlJl grpwVb" type="text" value=""
                          style="text-align: end;">
                        <div class="sc-bxivhb exZuWt" style="position: absolute; right: 40.8px; top: 9.35px;">
                          <div class="sc-hXRMBi dGBcTC">EUR</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="sc-bxivhb exZuWt" style="margin-left: auto; margin-top: 8.5px;">
                    <div class="sc-bxivhb sc-cMljjf bkNtvW" style="z-index: 0;">
                      <div class="sc-bxivhb lffwST">
                        <div class="sc-bxivhb exZuWt" style="position: relative; z-index: 0;"><input name="withoutTax"
                            type="checkbox" class="sc-jlyJG iOcrWA" value="false">
                          <div class="sc-gipzik ixmrSw"></div>
                        </div>
                      </div><label class="sc-cvbbAY fkzQxt">Included in the price</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>














        </div>
        <div class="bodymodal">
          <strong class="sc-hEsumM text" style="font-size: 18px;">Additional Services</strong>
          <div class="sc-bxivhb sc-tilXH dAvvdK">
            <div class="sc-bxivhb gLWEzJ">
              <div class="sc-bxivhb gNBDcN" style="margin-bottom: 6.8px; width: 100%;">
                <div class="sc-bxivhb lffwST" style="width: 100%;">
                  <div
                    style="color: rgb(105, 106, 109); font-size: 11.9px; font-weight: 500; margin: 7.65px 0px; padding-right: 23.8px; width: 100%; word-break: break-all;">
                    cleaning fee</div>
                  <div class="sc-bxivhb iVSKTp" style="width: 100%;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC">
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="services[0].price"
                            inputmode="numeric" class="sc-brqgnP sc-iQNlJl ejOlfv" type="text" value=""
                            style="text-align: end;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 8.5px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                        </div>
                      </div>
                    </div><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"
                      style="margin-right: -9.35px; padding: 9.35px;"><span class="MuiIconButton-label"><svg
                          stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                          stroke-linejoin="round" color="red" size="12.75" height="12.75" width="12.75"
                          xmlns="http://www.w3.org/2000/svg" style="color: red;">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                          </path>
                        </svg></span><span class="MuiTouchRipple-root"></span></button>
                  </div>
                </div>
              </div>
              <div class="sc-bxivhb gNBDcN" style="margin-bottom: 6.8px; width: 100%;">
                <div class="sc-bxivhb lffwST" style="width: 100%;">
                  <div
                    style="color: rgb(105, 106, 109); font-size: 11.9px; font-weight: 500; margin: 7.65px 0px; padding-right: 23.8px; width: 100%; word-break: break-all;">
                    laundry fee</div>
                  <div class="sc-bxivhb iVSKTp" style="width: 100%;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC">
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="services[1].price"
                            inputmode="numeric" class="sc-brqgnP sc-iQNlJl ejOlfv" type="text" value=""
                            style="text-align: end;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 8.5px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                        </div>
                      </div>
                    </div><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"
                      style="margin-right: -9.35px; padding: 9.35px;"><span class="MuiIconButton-label"><svg
                          stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                          stroke-linejoin="round" color="red" size="12.75" height="12.75" width="12.75"
                          xmlns="http://www.w3.org/2000/svg" style="color: red;">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                          </path>
                        </svg></span><span class="MuiTouchRipple-root"></span></button>
                  </div>
                </div>
              </div>
              <div class="sc-bxivhb gNBDcN" style="margin-bottom: 6.8px; width: 100%;">
                <div class="sc-bxivhb lffwST" style="width: 100%;">
                  <div
                    style="color: rgb(105, 106, 109); font-size: 11.9px; font-weight: 500; margin: 7.65px 0px; padding-right: 23.8px; width: 100%; word-break: break-all;">
                    parking fee</div>
                  <div class="sc-bxivhb iVSKTp" style="width: 100%;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC">
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="services[2].price"
                            inputmode="numeric" class="sc-brqgnP sc-iQNlJl ejOlfv" type="text" value=""
                            style="text-align: end;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 8.5px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                        </div>
                      </div>
                    </div><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"
                      style="margin-right: -9.35px; padding: 9.35px;"><span class="MuiIconButton-label"><svg
                          stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                          stroke-linejoin="round" color="red" size="12.75" height="12.75" width="12.75"
                          xmlns="http://www.w3.org/2000/svg" style="color: red;">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                          </path>
                        </svg></span><span class="MuiTouchRipple-root"></span></button>
                  </div>
                </div>
              </div>
              <div class="sc-bxivhb gNBDcN" style="margin-bottom: 6.8px; width: 100%;">
                <div class="sc-bxivhb lffwST" style="width: 100%;">
                  <div
                    style="color: rgb(105, 106, 109); font-size: 11.9px; font-weight: 500; margin: 7.65px 0px; padding-right: 23.8px; width: 100%; word-break: break-all;">
                    bicycle hire fee</div>
                  <div class="sc-bxivhb iVSKTp" style="width: 100%;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC">
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="services[3].price"
                            inputmode="numeric" class="sc-brqgnP sc-iQNlJl ejOlfv" type="text" value=""
                            style="text-align: end;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 8.5px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                        </div>
                      </div>
                    </div><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"
                      style="margin-right: -9.35px; padding: 9.35px;"><span class="MuiIconButton-label"><svg
                          stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                          stroke-linejoin="round" color="red" size="12.75" height="12.75" width="12.75"
                          xmlns="http://www.w3.org/2000/svg" style="color: red;">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                          </path>
                        </svg></span><span class="MuiTouchRipple-root"></span></button>
                  </div>
                </div>
              </div>
              <div class="sc-bxivhb gNBDcN" style="margin-bottom: 6.8px; width: 100%;">
                <div class="sc-bxivhb lffwST" style="width: 100%;">
                  <div
                    style="color: rgb(105, 106, 109); font-size: 11.9px; font-weight: 500; margin: 7.65px 0px; padding-right: 23.8px; width: 100%; word-break: break-all;">
                    quad (ATV) hire fee</div>
                  <div class="sc-bxivhb iVSKTp" style="width: 100%;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC">
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="services[4].price"
                            inputmode="numeric" class="sc-brqgnP sc-iQNlJl ejOlfv" type="text" value=""
                            style="text-align: end;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 8.5px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                        </div>
                      </div>
                    </div><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"
                      style="margin-right: -9.35px; padding: 9.35px;"><span class="MuiIconButton-label"><svg
                          stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                          stroke-linejoin="round" color="red" size="12.75" height="12.75" width="12.75"
                          xmlns="http://www.w3.org/2000/svg" style="color: red;">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                          </path>
                        </svg></span><span class="MuiTouchRipple-root"></span></button>
                  </div>
                </div>
              </div>
              <div class="sc-bxivhb gNBDcN" style="margin-bottom: 6.8px; width: 100%;">
                <div class="sc-bxivhb lffwST" style="width: 100%;">
                  <div
                    style="color: rgb(105, 106, 109); font-size: 11.9px; font-weight: 500; margin: 7.65px 0px; padding-right: 23.8px; width: 100%; word-break: break-all;">
                    food fee</div>
                  <div class="sc-bxivhb iVSKTp" style="width: 100%;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC">
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="services[5].price"
                            inputmode="numeric" class="sc-brqgnP sc-iQNlJl ejOlfv" type="text" value=""
                            style="text-align: end;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 8.5px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                        </div>
                      </div>
                    </div><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"
                      style="margin-right: -9.35px; padding: 9.35px;"><span class="MuiIconButton-label"><svg
                          stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                          stroke-linejoin="round" color="red" size="12.75" height="12.75" width="12.75"
                          xmlns="http://www.w3.org/2000/svg" style="color: red;">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                          </path>
                        </svg></span><span class="MuiTouchRipple-root"></span></button>
                  </div>
                </div>
              </div>
              <div class="sc-bxivhb gNBDcN" style="margin-bottom: 6.8px; width: 100%;">
                <div class="sc-bxivhb lffwST" style="width: 100%;">
                  <div
                    style="color: rgb(105, 106, 109); font-size: 11.9px; font-weight: 500; margin: 7.65px 0px; padding-right: 23.8px; width: 100%; word-break: break-all;">
                    room drinks cabinet fee</div>
                  <div class="sc-bxivhb iVSKTp" style="width: 100%;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC">
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="services[6].price"
                            inputmode="numeric" class="sc-brqgnP sc-iQNlJl ejOlfv" type="text" value=""
                            style="text-align: end;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 8.5px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                        </div>
                      </div>
                    </div><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"
                      style="margin-right: -9.35px; padding: 9.35px;"><span class="MuiIconButton-label"><svg
                          stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                          stroke-linejoin="round" color="red" size="12.75" height="12.75" width="12.75"
                          xmlns="http://www.w3.org/2000/svg" style="color: red;">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                          </path>
                        </svg></span><span class="MuiTouchRipple-root"></span></button>
                  </div>
                </div>
              </div>
              <div class="sc-bxivhb gNBDcN" style="margin-bottom: 6.8px; width: 100%;">
                <div class="sc-bxivhb lffwST" style="width: 100%;">
                  <div
                    style="color: rgb(105, 106, 109); font-size: 11.9px; font-weight: 500; margin: 7.65px 0px; padding-right: 23.8px; width: 100%; word-break: break-all;">
                    transfer to/from airport fee</div>
                  <div class="sc-bxivhb iVSKTp" style="width: 100%;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC">
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="services[7].price"
                            inputmode="numeric" class="sc-brqgnP sc-iQNlJl ejOlfv" type="text" value=""
                            style="text-align: end;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 8.5px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                        </div>
                      </div>
                    </div><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"
                      style="margin-right: -9.35px; padding: 9.35px;"><span class="MuiIconButton-label"><svg
                          stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                          stroke-linejoin="round" color="red" size="12.75" height="12.75" width="12.75"
                          xmlns="http://www.w3.org/2000/svg" style="color: red;">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                          </path>
                        </svg></span><span class="MuiTouchRipple-root"></span></button>
                  </div>
                </div>
              </div>
              <div class="sc-bxivhb gNBDcN" style="margin-bottom: 6.8px; width: 100%;">
                <div class="sc-bxivhb lffwST" style="width: 100%;">
                  <div
                    style="color: rgb(105, 106, 109); font-size: 11.9px; font-weight: 500; margin: 7.65px 0px; padding-right: 23.8px; width: 100%; word-break: break-all;">
                    transfer to/from railway station fee</div>
                  <div class="sc-bxivhb iVSKTp" style="width: 100%;">
                    <div class="sc-bxivhb sc-cMljjf dAbKeC">
                      <div class="sc-bxivhb gLWEzJ">
                        <div class="sc-bxivhb eQsgCV" style="position: relative;"><input name="services[8].price"
                            inputmode="numeric" class="sc-brqgnP sc-iQNlJl ejOlfv" type="text" value=""
                            style="text-align: end;">
                          <div class="sc-bxivhb exZuWt" style="position: absolute; right: 8.5px; top: 9.35px;">
                            <div class="sc-hXRMBi dGBcTC">EUR</div>
                          </div>
                        </div>
                      </div>
                    </div><button class="MuiButtonBase-root MuiIconButton-root" tabindex="0" type="button"
                      style="margin-right: -9.35px; padding: 9.35px;"><span class="MuiIconButton-label"><svg
                          stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                          stroke-linejoin="round" color="red" size="12.75" height="12.75" width="12.75"
                          xmlns="http://www.w3.org/2000/svg" style="color: red;">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                          </path>
                        </svg></span><span class="MuiTouchRipple-root"></span></button>
                  </div>
                </div>
              </div>
              <hr class="MuiDivider-root" style="margin-top: 1.7px;">
              <div class="sc-bxivhb fPJBgQ" style="margin-right: 23.8px; margin-top: 8.5px;">
                <div style="color: rgb(105, 106, 109); font-size: 11.05px;">Sum</div>
                <div style="color: rgb(105, 106, 109); font-size: 11.05px; margin-right: 23.8px;"><span>0,00</span> EUR
                </div>
              </div>
            </div>
          </div>
        </div>
  `;
 })
 let detailsArea = document.querySelector('.detailsArea');
 detailsArea.addEventListener('click', () => {
  let mainBody = document.querySelector('.bodyModal_container');
  mainBody.innerHTML = `
    <div class="bodymodal">
          <strong class="sc-hEsumM text" style="font-size: 18px;">Others</strong>
          <div class="sc-bxivhb lffwST" style="flex-grow: 1; width: 100%;">
            <div class="sc-bxivhb lffwST" style="margin-top: 4.25px; width: 100%;">
              
              <div class="sc-bxivhb sc-tilXH jdenrG">
                <div class="sc-bxivhb lffwST">
                  <div class="sc-bxivhb sc-cMljjf egDFpl" style="max-width: 100%; width: 100%;"><label for="note"
                      class="sc-cvbbAY eZIKiR">Notes</label>
                    <div class="sc-bxivhb gLWEzJ">
                      <div class="sc-bxivhb lffwST" style="height: auto;"><textarea name="note"
                          class="sc-csuQGl sc-Rmtcm hyAqES" style="height:75px;overflow-y:hidden;"></textarea></div>
                    </div>
                  </div>
                </div>
                <div class="sc-bxivhb lffwST">
                  <div class="sc-bxivhb sc-cMljjf egDFpl" style="max-width: 100%; width: 100%;"><label for="provenances"
                      class="sc-cvbbAY eZIKiR">Booking origin</label>
                    <div class="sc-bxivhb gLWEzJ">
                      <div class="sc-bxivhb ccvFeF" style="position: relative;">
                        <div class=" css-8atqhb">
                          <div class=" css-wi0uvx-control">
                            <div class=" css-bdvd70">
                              <div class=" css-1wa3eu0-placeholder">Select</div>
                              <div class="css-muqt0h">
                                <div class="" style="display: inline-block;"><input autocapitalize="none"
                                    autocomplete="off" autocorrect="off" id="react-select-155-input" spellcheck="false"
                                    tabindex="0" type="text" aria-autocomplete="list" value=""
                                    style="box-sizing: content-box; width: 2px; background: 0px center; border: 0px; font-size: inherit; opacity: 0; outline: 0px; padding: 0px; color: inherit;">
                                  <div
                                    style="position: absolute; top: 0px; left: 0px; visibility: hidden; height: 0px; overflow: scroll; white-space: pre; font-size: 11.05px; font-family: Montserrat, sans-serif; font-weight: 400; font-style: normal; letter-spacing: normal; text-transform: none;">
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class=" css-1wy0on6"><span class=" css-1hyfx7x"></span>
                              <div aria-hidden="true" class=" css-13g24dj"><svg stroke="currentColor"
                                  fill="currentColor" stroke-width="0" viewBox="0 0 24 24" size="20.4" height="20.4"
                                  width="20.4" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7 10l5 5 5-5z"></path>
                                </svg></div>
                            </div>
                          </div><input name="provenances" type="hidden" value="">
                        </div>
                        <div class="sc-bxivhb exZuWt" style="cursor: pointer; position: absolute; right: 8.5px;"><svg
                            stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                            stroke-linecap="round" stroke-linejoin="round" size="13.6" height="13.6" width="13.6"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path
                              d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                            </path>
                          </svg></div>
                      </div>
                    </div>
                  </div>
                </div>
               
                <div class="sc-bxivhb lffwST">
                  <div class="sc-bxivhb sc-cMljjf egDFpl" style="max-width: 100%; width: 100%;"><label for="feeding"
                      class="sc-cvbbAY eZIKiR">Board</label>
                    <div class="sc-bxivhb gLWEzJ">
                      <div class=" css-2b097c-container">
                        <div class=" css-wi0uvx-control">
                          <div class=" css-bdvd70">
                            <div class=" css-1uccc91-singleValue">
                              <div class="sc-bxivhb iVSKTp" style="font-weight: 500;">
                                <div>OV - no board</div>
                              </div>
                            </div><input id="react-select-325-input" readonly="" tabindex="0"
                              class="css-62g3xt-dummyInput" value="" style="border: none;">
                          </div>
                          <div class=" css-1wy0on6"><span class=" css-1hyfx7x"></span>
                            <div aria-hidden="true" class=" css-b4g0mn"><svg stroke="currentColor" fill="currentColor"
                                stroke-width="0" viewBox="0 0 24 24" size="20.4" height="20.4" width="20.4"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 10l5 5 5-5z"></path>
                              </svg></div>
                          </div>
                        </div><input name="feeding" type="hidden" value="OV">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="sc-bxivhb lffwST">
                  <div class="sc-bxivhb sc-cMljjf egDFpl" style="max-width: 100%; width: 100%;"><label for="doorCode"
                      class="sc-cvbbAY eZIKiR">Entrance code</label>
                    <div class="sc-bxivhb gLWEzJ">
                      <div class="sc-bxivhb eQsgCV" style="position: relative;"><input id="text-input" name="doorCode"
                          type="text" class="sc-brqgnP fWAkok" value=""></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="bodymodal">
          <strong class="sc-hEsumM text" style="font-size: 18px;">Number of Guests</strong>

        </div>

   `;
 })

  let inVoice = document.querySelector('.invoiceArea');
  inVoice.addEventListener('click', (e) => {
    let mainBody = document.querySelector('.bodyModal_container');
    mainBody.innerHTML = `
     <div class="bodymodal">
        
          <div class = "divInvoice">
            <div> Invoice</div>
            <div class= "addBtn">+</div>

          </div>
          
          
    </div>
    `;

    
    mainBody.querySelector('.addBtn').addEventListener('click', () => {
      let div = document.createElement('div');

      div.classList.add('contentDivInvoice');
      div.innerHTML = `
        <div class = "inner-contentDivInvoice">
                <div class="contentDiv-inner">Number</div>
                <div class="contentDiv-inner box-2">1</div>
              </div>
              <div class = "inner-contentDivInvoice">
                <div class="contentDiv-inner">Net Value</div>
                <div class="contentDiv-inner box-2">0,00 EUR</div>
              </div>
              <div class = "inner-contentDivInvoice">
                <div class="contentDiv-inner">Gross value</div>
                <div class="contentDiv-inner box-2">0,00 EUR</div>
              </div>
              <div class = "inner-contentDivInvoice">
                <div class="contentDiv-inner">Client</div>
                <div class="contentDiv-inner box-2">No name</div>
              </div>
              <div class = "inner-contentDivInvoice">
                <div class="contentDiv-inner">Data of issue</div>
                <div class="contentDiv-inner box-2">2021-11-30</div>
              </div>
      `;

      document.querySelector('.bodymodal').appendChild(div);
    });
  })

})


let addRoomBox = document.querySelector('.addRoomBox');
addRoomBox.addEventListener('click', (e) => {
  let div = document.createElement('div');
  div.classList.add('modal');
  div.innerHTML = ``;
  document.body.appendChild(div)
  let faTimes = div.querySelector('.fa-times');
  faTimes.addEventListener('click', (e) => {
    div.remove()
  })
})
