let sidebar = document.querySelector('.sidebar');
let button = document.querySelector('button');

sidebar.addEventListener('mouseenter', () => {
  sidebar.classList.toggle('active');
  let icon = document.querySelector('.logo_name>img');
  icon.src = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAAAeCAYAAAAVWU11AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ1Q0FENTVBQTQ5NzExRTg5Q0M0QzlEODA4NTM4RDdGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ1Q0FENTVCQTQ5NzExRTg5Q0M0QzlEODA4NTM4RDdGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVDQUQ1NThBNDk3MTFFODlDQzRDOUQ4MDg1MzhEN0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDVDQUQ1NTlBNDk3MTFFODlDQzRDOUQ4MDg1MzhEN0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5jlMimAAAFVElEQVR42uxawZXiSAx17+v70BGMiWDZCNqOoOHch+6OAIhgIALoCICDz7AR4IlgPRHgjWC9EbAql4opyyq7wIY180rveWiMVSNLv6Qv2Q/H49Fz4uQS+c25wIkDj5Oby0OXjev3+zP4+KadCg+HQ3z3Xo/CAP7da2fm3ut+Zqkr9ILT99f9/xbDRwjQO3y+VVyTwfEDjh0ELulQAKztBgcnLk9cATxw+AUk8zIUGQCAJnb9CECUdcB2a7sBaLndAKLMhbxd8JwjeboFEIUdAdBZdgOIwrsH0Os+7DJhngpuoR1TLAFKBnBMOujWe7X7l8o8CSGlMWSahBC85w7eSwK7smA3ZJp7sPvXLlsCTAAgm+6oh7v7BXe6kDQPJHQUsE5q0BPcZKxxmAQzR9MULwB0LgEPCgD0vA2ss76arl0zkME6I/xtofm2WMai8Fjq4KJwhmv5mInj3Lev+7SiExwjX1SxEGvt6PpW4EFQ1F0zwF3eY4itcMYQuVJC9ATYFkRHrdWsS4rCnuU1WwP5DvIjCsd5KaR8qYlutT0L4scR8U1gudZfBaDJNYdo1x8lAEnQrphYbOG3uQ3n4YBDg7thruGA4xHD9zoQ4e+AWZsa3gQ4lXajbC2CMSDlrw1dk6yIH5f5rj9fxhX+K/smCgcMcHT5ZgOeBQR1rw74/g9mDiVryB40FdOdIq55EAcpPz2y1pisI9Z9Qr0RIbx1ssgHaOpg7C6VELnTggJvAkzj4K1PMt8Ar2+uawb8UCsXP0vGZdJD3z+hTSEzxvDqYqHpZjbgGZxSbnlXxYab0Q1JIfgfGl9aIu9R8qJlK10vE3pqBACfO7wBW7nE7pdSx6ZSufwcVTi4ia5tpvxoMFqIQXd50pfNRMxkGyXvBY4l70fX/Ty7bDF1/IBTab309EigqKRkDa4kcan53xbnPAdm9xdAT7o1BYLYUEab6FJ5xpLhEzC2PRlPmOykSDIFXi1oOfCEquRg+ejnO6CYtlYAGt+w5jv8dtQPS4L3d0PHhHmKVYfBbnCUye7U6nzZ0U11FbiHZOywvEJ3bbsZf1w6JKRteoocZ2pIw/6FN+J71xSx8yXH4e226cRMoG6ia+sbM8jva86DIFpDFlkxaThl+MV3iyXTm9yhAFAUlu0WadluBvQ7+Z410jXxE/nbUCsnK4bk3id4bGY9GvGdXWDL16vcYXWWyDS+5ltlyJ88pIkule95Sy6B7Z9KWRROrlS+WonFOYR5wpEvfJSh76ghDgwrAWjQo4H+0oIjJhWkcUdKRcBwlIHh+ia6XIbMkKMVZyu3KF+U7IsMWN50X2wyzxt2ULQboOf+1P7+JEOkLawx10qTj2sIMt3XHlPstBZRDRHnCKo30j7WyRtDSOvs3pD/Q0xSp2i3z7TOny3pmoMYhUsN8LcsX2saC7wfRegnNuCxCdiSPDxdesXnWb5nnlaK9WendlTW+Z7GR7YX3ryV3YVdZg4W79y2dKtljj65dfmaM7HYt1W2FMkVg7wpIdMZ7o7YQj9h9FLDtW3tuBQHblNmt0+9+imuAN1Hq7rnl6/BVaEj51JTA6nPuNg+WgT8pFz1GqoCApa8F1LvBSFMcGpM9RJJh/In60rndC2WMa5Ds7a7dtgmnz6rtP1M7F4bn0BfrpsS0MVM+foghNvHjbep6GbnNd1sXNnxys40JveSYMl9JxQg6/QL8E46JPJVEJ33hA48TnSAyFEBfYovz9O3Jp4encecFDpWkV3kADTWGoEBw+MyBx4nuuggCQzXnF4TceBxosumAjiS5GvvRDnO48TEf4JCtmFe0fhPgAEAyfxnw7ihbAQAAAAASUVORK5CYII=`;
  document.querySelector('.hambergerBox').style.backgroundColor = '#008a36'
});

sidebar.addEventListener('mouseleave', () => {
  sidebar.classList.toggle('active');
  let icon = document.querySelector('.logo_name>img');
  icon.src = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABDCAYAAABjoACgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjdkYWY2YzM3LTkwZTgtNzg0Ny05NTM2LTUyNzY5NDgxMjUyZSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4OUFDQ0FERkE1RDIxMUU4QUI4OEU5NkNEMERFQTcwNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4OUFDQ0FERUE1RDIxMUU4QUI4OEU5NkNEMERFQTcwNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBJbGx1c3RyYXRvciBDQyAyMi4wIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ1dWlkOjAwNWE3MTA1LWExMTktNGMxYy1iOTk4LTkyMThjOGFmMjg1NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpmNTM3YTdkNS03N2Q2LTI3NDctYTViMi04YjMzYmVjMWJmZTkiLz4gPGRjOnRpdGxlPiA8cmRmOkFsdD4gPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5iZWRib29raW5nX3ZlY3Rvcl9sb2dvPC9yZGY6bGk+IDwvcmRmOkFsdD4gPC9kYzp0aXRsZT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7OKheiAAAEFklEQVR42uydWUgVURjHz9WrmZJSkRnRYgskRkFERQulUND2kBb4UG+VD0WFQQtFZYslFUUPRbQSCC1QUb2UYbZQT9JCVIRUGLQQpbZZpt7+X3OEafI2c8+9x5m5fn/44b3jmevc7z9n++bMGBAVeUKqDBSAnuAFOAROCZZWBeXPO2CSaXsmmABywHoOkz4lgG2W4Ju1DozlMOk1YIlNmaUcJr0GpNmU6cVh0mtAs02ZZg6TXgNCNmVCHCa9BrDYADaAxQawASwXFOykv9MbpIJP4BuHvXNqQH+wAzwAdeCV/FkNloEAh19fDVgBykFKB7PqqZKVoBjccPB540A+yAKJGuYmdDK0gu/gPXgOHoI3fjRgO9jgoNxwUAWmg+thylBq/AgodOHk/AXuggvgtDTG803QLIfBN6tSntlWpYP7LgWflCRr6n5hXB/ZBwZ73YDjivuVd7DtEhjkkaaaBhCrZNNU4lUDZoK+ivsuAhmm95Pl2ec1Ua3YC66A7l4zYE6UnWC+6f1Cjw9eZoNHYICXDMiOcv8hptcDfTCCHAZq5ByHZ8IuqQ+46RUDXke5f53pdauPTMgF57xgwLUo96/2cU2YL/sFVw04Dz4q7ktn0AefN0cn3DaA0gPLFfddGyf9QbHbnTBN2Q9GuE8ReBknnfLmMNu7CWN5zx6wEYzWOQqiTGepg3KfwTxwJo5GRf3AeMu2UXIGfRisFsZCOMoQr9E5DN0ijBV1lEirBW1y+w85dqaDGAouxuHQtMCSwrgVZl5D6ZcCnRdkasTfq+oComsscTHP6GnVYcZ/ypYFFZuYXOFsTRGN5+kK2Bf5Ohn0EEYepb32vQO7hZGLjweNlN+vCYyxKZsVqQE7hbFgN9aaAaaYmio/Xy1Lkc3rYwcTypZI+4AiTQc9UXZg7Qr6vBZkOpzRt0VqQKPGg04yvW7wuQEpuuYBunI0IctnV4ouogTN5Z0qYPnsCvDVx3EN6QpousaDNtcAmi/M5Rrwr65qOo6n4K1lW7Uwroz58f4Ex31ApKMNSrbR8owRDucBTpoemgfsCtO/UFN0GywGeXKkpGNdUKyb03pdBtA4vbSTvxBdqNnUlZugRsFSVX0sasA0YaRRWWoz/KgNyJGwPDAKYrEBbACLDWADWGwAG8CKgZzMAy4L46YEvqkuMlG+ip5CtiBaAyj5VsvxVJLtTX5OmqBUjqOy0mJhAIs7YTaAxQawASw2gA1gsQHxZ4BdioFTEOqyjS0ZkGRTKJnjqCy72AXJgCabQg0cR2XZLUv5c3/ASZtCxziOyrKL7VkygP4/QE2YAgfAPY6jsuiBU+VhfvcElCSKwmzKWx8VxuPBiBbwDGwVxuPHWNGJHsdGz9Ggda2U/qe1sHQ/Nd1N+fO3AAMANEGkMZmtVuoAAAAASUVORK5CYII=`;
  document.querySelector('.hambergerBox').style.backgroundColor = '';
   let check_priceList_li = document.querySelectorAll('.priceList-Div li');
   if (check_priceList_li) {
     check_priceList_li.forEach((e) => {
       e.remove();
     });
   }

   let check_booking_li = document.querySelectorAll('.booking-Div li');
   if (check_booking_li) {
     check_booking_li.forEach((e) => {
       e.remove();
     });
   }
});

let priceList = document.querySelector('.priceList');
let priceListStatus = false;
priceList.addEventListener('click', (e) => {
  priceListStatus ? (priceListStatus = false) : (priceListStatus = true);
  if (priceListStatus) {
    let div = document.querySelector('.priceList-Div');
    let li_1 = document.createElement('li');
    li_1.innerHTML = `<span class="links_name">Set price</span>`;
    div.append(li_1);
    let li_2 = document.createElement('li');

    li_2.innerHTML = `<span class="links_name">Configuration</span>`;
    div.append(li_2);

    let svg = document.querySelector('.priceList b');
    // console.log();
    svg.setAttribute('transform', 'rotate(45)');
  } else if (!priceListStatus) {
    let li = document.querySelectorAll('.priceList-Div li');
    li.forEach((e) => {
      e.remove();
    });
  }
});

let booking = document.querySelector('.booking');
let bookingStatus = false;
booking.addEventListener('click', (e) => {
  bookingStatus ? (bookingStatus = false) : (bookingStatus = true);
  if (bookingStatus) {
    let div = document.querySelector('.booking-Div');
    let li_1 = document.createElement('li');
    li_1.innerHTML = `<span class="links_name">Calendar</span>`;
    div.append(li_1);
    let li_2 = document.createElement('li');

    li_2.innerHTML = `<span class="links_name">Reservation list</span>`;
    div.append(li_2);

    let svg = document.querySelector('.booking b');

    svg.setAttribute('transform', 'rotate(45)');
  } else if (!bookingStatus) {
    let li = document.querySelectorAll('.booking-Div li');
    li.forEach((e) => {
      e.remove();
    });
  }
});


let checkBox_priceList = document.querySelectorAll('#flexSwitchCheckChecked');
console.log(checkBox_priceList)
checkBox_priceList.forEach((Element) => {

  if (Element.getAttribute('state') == "weekend") {

    let value = false;
      Element.addEventListener('click', () => {
        value ? value = false : value = true;
        let innerMianContent = document.querySelector('.inner-main-content'); 
        if (value) {
          innerMianContent.innerHTML = `
            <div class="col-xl-9 col-md-12" >
                          <div class="row"> <label style="font-size: 13px;
                            display: flex;justify-content: center;
                            align-items: center;font-weight:500; color: #696a6d;">Standard</label>
                          </div>
                          <div class="row my-4">
                                <div class="input-group mb-3">
                                  <div  class="col-2  ps-4">
                                     <label style="font-size: 13px;
                            display: flex;justify-content: center;
                            align-items: center;font-weight:500; color: #696a6d;">price</label>
                                  </div>
                                  <input  type="text" value="60,000" style="background-color: white;"  class="form-control ms-2" aria-label="Text input with checkbox" readonly>
                                </div>
                          </div>
              </div> 
            `;

        } else if (!value) {
          innerMianContent.innerHTML = `
            <div
                      style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                      "
                      class="row mt-3 inner-main-content"
                    >
                      <div class="col-xl-3 col-md-12">
                        <label
                          style="
                            font-size: 13px;
                            font-weight: 500;
                            color: #696a6d;
                          "
                          >Price</label
                        >
                      </div>
                      <div class="col-xl-9 col-md-12">
                        <div class="row">
                          <div class="col-md-6">
                            <label
                              style="
                                font-size: 13px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                font-weight: 500;
                                color: #696a6d;

                              "
                              >Standard</label
                            >
                          </div>
                          <div class="col-sm-6">
                            <label
                              style="
                                font-size: 13px;
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                font-weight: 500;
                                color: #696a6d;
                                
                              "
                              >Standard</label
                            >
                          </div>
                        </div>
                        <div class="row my-4">
                          <div class="col-6">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="60,00"
                              aria-label="60,00"
                              readonly
                            />
                          </div>
                          <div class="col-6">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="60,00"
                              aria-label="60,00"
                               readonly
                            />
                          </div>
                        </div>
                      </div>`;
        }
      });
  }
})