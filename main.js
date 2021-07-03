// Vega Lite Specification
const spec = {
  "data": {
    "values": [
      { "a": "A", "b": 28 }, { "a": "B", "b": 55 }, { "a": "C", "b": 43 },
      { "a": "D", "b": 91 }, { "a": "E", "b": 81 }, { "a": "F", "b": 53 },
      { "a": "G", "b": 19 }, { "a": "H", "b": 87 }, { "a": "I", "b": 52 }
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": { "field": "a", "type": "nominal", "axis": { "labelAngle": 0 } },
    "y": { "field": "b", "type": "quantitative" }
  }
}

const sample = {
  "data": { "url": "sample.csv" },
  "padding": 0,
  "width": 225,
  "height": 225,
  "autosize": "fit",
  "params": [{
    "name": "paintbrush",
    "select": {
      "type": "point",
      "on": "mouseover",
      "nearest": true
    }
  }],
  "mark": "circle",
  "encoding": {
    "x": { "field": "sales", "type": "quantitative" },
    "y": { "field": "profit", "type": "quantitative" },
    "size": { "value": 400 },
    "color": {
      "value": "grey",
      "condition": {
        "param": "paintbrush",
        "field": "area",
        "type": "nominal",
        "legend": null
      }
    }
  }
}

// Embed the spec at a particular id
vegaEmbed('#vis-inline', spec);
vegaEmbed('#vis-csv', sample);
