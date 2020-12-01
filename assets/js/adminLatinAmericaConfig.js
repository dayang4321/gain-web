let instance;
// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.

var data = [
    // ['br', 0],
    // ['ec', 1],
    // ['ve', 2],
    // ['cl', 3],
    // ['ar', 4],
    ['pe', 5], //Peru
    // ['uy', 6],
    // ['py', 7],
    // ['bo', 8],
    // ['sr', 9],
    // ['gy', 10],
    // ['gb', 11],
    // ['co', 12]
];


var tippyWidth = 'max(23.43vw, 321px)';

if ($(window).width() < 768) {
  tippyWidth = 'min(77vw, 321px)'
}

// Create the chart
var chart = Highcharts.mapChart("container", {
  chart: {
    type: 'map',
    map: "custom/south-america",
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
          maxWidth: tippyWidth,
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
                // console.log(data, 'untriggered')
                data.forEach((point,index) => {
                  if (point.selected === true) {
                    point.select()
                  }
                })
              },
              popperOptions: {
                strategy: 'fixed',
                modifiers: [
                  {
                    name: 'flip',
                    options: {
                      fallbackPlacements: ['bottom', 'right'],
                    },
                  },
                  {
                    name: 'preventOverflow',
                    options: {
                      mainAxis: true,
                      altAxis: true,
                      tether: false,
                      boundary:document.querySelector('#container'),
                    },
                  },
                ],
              },
              getReferenceClientRect: () => ({
                width: 10,
                height: 10,
                left: 100,
                top: 100,
              }),
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
            // country = this;
            // console.log(country);
            instance.forEach((ins) =>
              ins.setContent(
                `<div class="popover-content">
                <button type="button" class="close">
                <span aria-hidden="true">&times;</span
                ><span class="sr-only">Close</span>
                </button>
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
            $('.popover-content .close').click(function(){
              //  instance.hide()
                instance.forEach((ins) => {
                  ins.hide()
                })
                }
              )
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



