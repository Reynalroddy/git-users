
// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 2 - Chart Data


// STEP 3 - Creating the JSON object to store the chart configurations


const chartComponent = ({category,data1,data2})=>{
const chartConfigs = {
  type: "mssplinearea", // The chart type
  width: "100%", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    
    "chart": {
        "caption": "Number of Footfalls Last Week",
        "subCaption": "Garden Groove harbour vs Crompton-Rancho Dom",
        "xAxisName": "Day",
        "yAxisName": "No. of Footfalls",
        "theme": "fusion"
    },
    "categories": [
        {
            "category": category
        }
    ],
    "dataset": [
        {
            "seriesname": "forks",
            "data":data1
        },
        {
            "seriesname": "stars",
            "data": data2
        }
    ]
}
   
};


  return <ReactFC {...chartConfigs} />
}

export default chartComponent;
