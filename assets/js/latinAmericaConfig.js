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

var country = "";
// Create the chart
var chart = Highcharts.mapChart("container", {
  chart: {
    map: "custom/south-america",
    events: {
      load: () => {
            instance = tippy('.highcharts-point[fill="#007E3B"]', {
                // arrow: `<svg width="53" height="60" viewBox="0 0 53 60" transform="rotate(0)"  fill="none" xmlns="http://www.w3.org/2000/svg">
                // <path d="M0.861279 59.9631L0.861275 0.240383L52.5827 30.1018L0.861279 59.9631Z" fill="black" fill-opacity="0.76"/>
                // </svg>`,
              arrow: false,
          allowHTML: true,
          content: ``,
          trigger: "click",
          maxWidth: tippyWidth,
          followCursor: "initial",
          interactive: true,
          appendTo:  document.querySelector('#container'),
          placement: "auto",
          hideOnClick: true,        
              offset: [20, 50],
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
          onTrigger(instance, event) {
            //  console.log(event.target)
              },
              onHide(instance) {
                // ...
                const data = chart.series[0].data;
                data.forEach((point,index) => {
                  if (point.selected === true) {
                    point.select()
                  }
                })
              },
        });
      },
    },
  },

  colors: ["#007E3B"],

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

  plotOptions: { 
    series: {
      allowPointSelect: true,
      point: {
        events: {
          click: function (e) {
            country = this.name;
            console.log(country);
            instance.forEach((ins) =>
            ins.setContent(
              `<div class="popover-content">
              <button type="button" class="close">
              <span aria-hidden="true">&times;</span
              ><span class="sr-only">Close</span>
              </button>
                  <h1 class="country-title">${this.name}</h1>
                  <a href="../../assistance" class="pop-btn">REQUEST ASSISTANCE</a>
                  <div class="pop-scrollable">
                    <img class="pop-img" src='../../assets/img/popImg.jpg' />
                    <div class="pop-box">
                     <h6 class="pop-info-title">Fortification</h6>
                      <p>Baby food, Puree, Formula and Milk</p>
                      <p>Lagos</p>
                    </div>
                    <div class="pop-box">
                    <h6 class="pop-info-title">Fortification</h6>
                      <p>Baby food, Puree, Formula and Milk</p>
                      <p>Lagos</p>
                    </div>
                    <div class="pop-box">
                    <h6 class="pop-info-title">Fortification</h6>
                      <p>Baby food, Puree, Formula and Milk</p>
                      <p>Lagos</p>
                    </div>
                    <div class="pop-box">
                    <h6 class="pop-info-title">Fortification</h6>
                      <p>Baby food, Puree, Formula and Milk</p>
                      <p>Lagos</p>
                    </div>
                    <div class="pop-box">
                    <h6 class="pop-info-title">Fortification</h6>
                      <p>Baby food, Puree, Formula and Milk</p>
                      <p>Lagos</p>
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

