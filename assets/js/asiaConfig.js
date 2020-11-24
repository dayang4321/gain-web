let instance;
// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    // ['ir', 0],
    // ['ph', 1],
    // ['sa', 2],
    // ['jp', 3],
    // ['th', 4],
    // ['om', 5],
    // ['ye', 6],
    // ['in', 7],
    // ['kr', 8],
    // ['bd', 9],
    // ['sp', 10],
    // ['cn', 11],
    // ['bh', 12],
    // ['mm', 13],
    // ['id', 14],
    // ['sg', 15],
    // ['ru', 16],
    // ['sh', 17],
    // ['my', 18],
    // ['az', 19],
    // ['am', 20],
    // ['vn', 21],
    // ['tj', 22],
    // ['uz', 23],
    // ['tl', 24],
    // ['kh', 25],
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
    // ['la', 38],
    ['pk', 39],
    // ['jk', 40],
    // ['qa', 41],
    // ['tr', 42],
    // ['bn', 43],
    // ['af', 44],
    // ['kp', 45],
    // ['lb', 46],
    // ['nc', 47],
    // ['cy', 48],
    // ['tw', 49],
    // ['np', 50],
    // ['lk', 51],
    // ['kg', 52]
];
var country = "";
// Create the chart
Highcharts.mapChart("container", {
  chart: {
    map: "custom/asia",
    events: {
      load: () => {
            instance = tippy('.highcharts-point[fill="#007E3B"]', {
                arrow: `<svg width="53" height="60" viewBox="0 0 53 60" transform="rotate(0)"  fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.861279 59.9631L0.861275 0.240383L52.5827 30.1018L0.861279 59.9631Z" fill="black" fill-opacity="0.76"/>
                </svg>`,
          allowHTML: true,
          content: ``,
          trigger: "click",
          maxWidth: "440px",
          followCursor: "initial",
          interactive: true,
          appendTo: () => document.body,
          placement: "auto",
                hideOnClick: true,
        
                offset: [20, 50],
          onTrigger(instance, event) {
            //  console.log(event.target)
            // ...
            console.log(country);
          },
          onUntrigger(instance, event) {
            country = "destroyed";
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
      point: {
        events: {
          click: function (e) {
            country = this.name;
            console.log(country);
            instance.forEach((ins) =>
              ins.setContent(
                `<div class="popover-content">
                    <h1 class="country-title">${this.name}</h1>
                    <button class="pop-btn">REQUEST ASSISTANCE</button>
                    <div class="pop-scrollable">
                    <img class="pop-img" src='../../assets/img/OIP (2) 1.jpg' />
                    <p class="pop-article">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                     nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi 
                     enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
                     nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
                    hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
                     nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit 
                     praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    </p>
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

  series: [
    {
      data: data,
      name: "Random data",
      states: {
        hover: {
          color: "#007E3B",
        },
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

function hideOnClickOutside(selector) {
  const outsideClickListener = (event) => {
    const $target = $(event.target);
    if (!$target.closest(selector).length && $(selector).is(":visible")) {
      console.log("shown");
      $(selector).hide();
      removeClickListener();
    }
  };

  const removeClickListener = () => {
    document.removeEventListener("click", outsideClickListener);
    console.log("removed");
  };

  document.addEventListener("click", outsideClickListener);
  console.log("added");
}

console.log(instance);

// hideOnClickOutside(".popover");
