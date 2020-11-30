let instance;
// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.

var data = [
  // ['ir', 0],
     ['ph', 1], //Pakistan
  // ['sa', 2],
  // ['jp', 3],
  // ['th', 4],
  // ['om', 5],
     ['ye', 6], //Yemen
  // ['in', 7],
  // ['kr', 8],
     ['bd', 9], //Bangladesh
  // ['sp', 10],
  // ['cn', 11],
  // ['bh', 12],
     ['mm', 13], //Myanmar
     ['id', 14], //Indonesia
  // ['sg', 15],
  // ['ru', 16],
  // ['sh', 17],
  // ['my', 18],
  // ['az', 19],
  // ['am', 20],
  // ['vn', 21],  //Vietnam
     ['tj', 22], //Tajikistan
  // ['uz', 23],
  // ['tl', 24],
     ['kh', 25], //Cambodia
  // ['bt', 26],
  // ['ge', 27],
  // ['kz', 28],
  // ['il', 29],
  // ['sy', 30],
  // ['jo', 31],
  // ['tm', 32],
  // ['cnm', 33],
  // ['mn', 34],
  // ['kw', 35],
  // ['iq', 36],
  // ['ae', 37],
     ['la', 38], //Laos
     ['pk', 39], //Pakistan
  // ['jk', 40],
  // ['qa', 41],
  // ['tr', 42],
  // ['bn', 43],
     ['af', 44], //Afghanistan
  // ['kp', 45],
  // ['lb', 46],
  // ['nc', 47],
  // ['cy', 48],
  // ['tw', 49],
     ['np', 50], //Nepal
     ['lk', 51], //Sri Lanka
     ['kg', 52] //Kyrgyzstan
];

// Create the chart
var chart = Highcharts.mapChart("container", {
  chart: {
    type: 'map',
    map: "custom/asia",
    animation: true,
    events: {
      load: () => {
            instance = tippy('.highcharts-point[fill="#007E3B"]', {
                // arrow: `<svg width="53" height="60" viewBox="0 0 53 60" transform="rotate(0)"  fill="none" xmlns="http://www.w3.org/2000/svg">
                // <path d="M0.861279 59.9631L0.861275 0.240383L52.5827 30.1018L0.861279 59.9631Z" fill="black" fill-opacity="0.76"/>
                // </svg>`,
              arrow: false,
          allowHTML: true,
              content: ``,
              trigger:'click',
              hideOnClick: 'toggle',
          maxWidth: "23.43vw",
          followCursor: "initial",
          interactive: true,
          appendTo: document.querySelector('#container'),
          placement: "auto",
                offset: [20, 50],
          onTrigger(instance, event) {
            //  console.log(event.target)
            // ...
        
              },
              onClickOutside(instance, event) {
                // ...
                if ( !($('#requestModal').is(':visible')) ) {
                  instance.hide();
                } else  return          
              },
              onHide(instance) {
                // ...
                const data = chart.series[0].data;
                console.log(data, 'untriggered')
                data.forEach((point,index) => {
                  if (point.selected === true) {
                    point.select()
                  }
                })
              },
          onUntrigger(instance, event) {
       
          },
        });
      },
    },
  },

  //colors: ["#007E3B","#CAD023" ],

  title: {
    text: "",
  },

  subtitle: {
    // text:
    //   'Source map: <a href="http://code.highcharts.com/mapdata/custom/africa.js">Africa</a>',
  },

  tooltip: {
    enabled: false,
  },
  
  // mapNavigation: {
  //   enabled: true,
  //   buttonOptions: {
  //       verticalAlign: 'bottom'
  //   }
  // },

  plotOptions: {
    series: {
      allowPointSelect: true,
      stickyTracking: false,
      point: {
        events: {
          click: function (e) {
            country = this;
            console.log(country);
            instance.forEach((ins) =>
              ins.setContent(
                `<div class="popover-content">
                    <h1 class="country-title">${this.name}</h1>
                    <input class="pop-search" type="text" />
                    <div class="pop-scrollable admin">
                        <div class="pop-info">
                            <img class="pop-svg" src='../../../assets/img/svg/popImg1.svg' />
                            <div>
                                <div class="pop-info-title" data-status=1 ><span>Fortification</span> <span>Ongoing (SBN)</span> </div>
                                <p class="pop-summary">Lorem ipsum dolor sit amet, consect-
                                etuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ....
                                </p>
                                <p class="pop-summary-location">Lagos, Nigeria</p>
                                <button class="pop-info-btn"  data-toggle="modal" data-target="#requestModal"></button>
                            </div>
                        </div>
                        <div class="pop-info">
                            <img class="pop-svg" src='../../../assets/img/svg/popImg1.svg' />
                            <div>
                                <div class="pop-info-title" data-status=2 ><span>Finacial Inclusion</span> <span>Completed</span> </div>
                                <p class="pop-summary">Lorem ipsum dolor sit amet, consect-
                                etuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ....
                                </p>
                                <p class="pop-summary-location">Port Harcourt, Nigeria</p>
                                <button class="pop-info-btn" data-toggle="modal" data-target="#requestModal"></button>
                            </div>
                        </div>
                        <div class="pop-info">
                            <img class="pop-svg" src='../../../assets/img/svg/popImg1.svg' />
                            <div>
                                <div class="pop-info-title" data-status=1><span>Product Reformation</span> <span >Ongoing (GAIN)</span> </div>
                                <p class="pop-summary">Lorem ipsum dolor sit amet, consect-
                                etuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ....
                                </p>
                                <p class="pop-summary-location">Benin, Nigeria</p>
                                <button class="pop-info-btn" data-toggle="modal" data-target="#requestModal"></button>
                            </div>
                        </div>
                        <div class="pop-info">
                            <img class="pop-svg" src='../../../assets/img/svg/popImg1.svg' />
                            <div>
                                <div class="pop-info-title" data-status=2 ><span>Tax Consultancy</span> <span>Completed</span> </div>
                                <p class="pop-summary">Lorem ipsum dolor sit amet, consect-
                                etuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ....
                                </p>
                                <p class="pop-summary-location">Abuja, Nigeria</p>
                                <button class="pop-info-btn"></button>
                            </div>
                        </div>
                        <div class="pop-info">
                            <img class="pop-svg" src='../../../assets/img/svg/popImg1.svg' />
                            <div>
                                <div class="pop-info-title" data-status=3 ><span>Tax Consultancy</span> <span>Requested</span> </div>
                                <p class="pop-summary">Lorem ipsum dolor sit amet, consect-
                                etuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ....
                                </p>
                                <p class="pop-summary-location">Abuja, Nigeria</p>
                                <button class="pop-info-btn"></button>
                            </div>
                        </div>
                        <div class="pop-info">
                            <img class="pop-svg" src='../../../assets/img/svg/popImg1.svg' />
                            <div>
                                <div class="pop-info-title" data-status=3 ><span>Tax Consultancy</span> <span>Requested</span> </div>
                                <p class="pop-summary">Lorem ipsum dolor sit amet, consect-
                                etuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ....
                                </p>
                                <p class="pop-summary-location">Abuja, Nigeria</p>
                                <button class="pop-info-btn"></button>
                            </div>
                        </div>
                    </div>
                    <div class="pop-footer">Scroll to see more</div>
                </div>`
              )
            );
          },
        },
      },
    },
  },

  series: [{
      data: data,
    name: "Random data",
    borderColor: '#6D6E71',
    nullColor: '#F1F2F2',
      borderWidth: '0.04375vw',
     color: "#007E3B",
    states: {
      hover: {
          color: '#CAD023'
      },
      select: {
        color: '#F48220'
      }
  },
      dataLabels: {
        enabled: false,
        format: "{point.name}",
      },
    },
  ],

  legend: {
    enabled: false,
  },
});



