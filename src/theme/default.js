/**
 * @fileOverview G2 1.2.0 开始使用的默认主题
 */

const DEFAULT_COLOR = '#4E7CCC';
const FONT_FAMILY = '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", SimSun, "sans-serif"';

const Theme = {
  defaultColor: DEFAULT_COLOR, // 默认主题色
  plotCfg: {
    margin: [ 20, 80, 60, 80 ]
  },
  fontFamily: FONT_FAMILY,
  colors: [ '#4E7CCC', '#36B3C3', '#4ECDA5', '#94E08A', '#E2F194', '#EDCC72', '#F8AB60', '#F9815C', '#EB4456', '#C82B3D' ],
  shapes: {
    point: [ 'hollowCircle', 'hollowSquare', 'hollowDiamond', 'hollowBowtie', 'hollowTriangle',
      'hollowHexagon', 'cross', 'tick', 'plus', 'hyphen', 'line' ],
    line: [ 'line', 'dash', 'dot' ],
    area: [ 'area' ]
  },
  sizes: [ 1, 10 ],
  opacities: [ 0.1, 0.9 ],
  axis: {
    top: {
      position: 'top',
      titleOffset: 30,
      title: {
        fontSize: 12,
        fill: '#999',
        textBaseline: 'middle'
      },
      labels: {
        label: {
          fill: '#404040',
          fontSize: 12,
          textBaseline: 'middle'
        }
      },
      tickLine: {
        lineWidth: 1,
        stroke: '#ccc',
        value: 5
      }
    },
    bottom: {
      position: 'bottom',
      titleOffset: 45,
      labelOffset: 20,
      title: {
        fontSize: 12,
        textAlign: 'center',
        fill: '#999',
        textBaseline: 'middle'
      },
      labels: {
        label: {
          fill: '#404040',
          fontSize: 12,
          textBaseline: 'middle'
        }
      },
      line: {
        lineWidth: 1,
        stroke: '#ccc'
      },
      tickLine: {
        lineWidth: 1,
        stroke: '#ccc',
        value: 5
      }
    },
    left: {
      position: 'left',
      titleOffset: 60,
      labelOffset: 13,
      title: {
        fontSize: 12,
        fill: '#999',
        textBaseline: 'middle'
      },
      labels: {
        label: {
          fill: '#404040',
          fontSize: 12,
          textBaseline: 'middle'
        }
      },
      line: {
        lineWidth: 1,
        stroke: '#ccc'
      },
      tickLine: {
        lineWidth: 1,
        stroke: '#ccc',
        value: 5
      },
      grid: {
        line: {
          stroke: '#d9d9d9',
          lineWidth: 1,
          lineDash: [ 2, 2 ]
        }
      }
    },
    right: {
      position: 'right',
      titleOffset: 60,
      labelOffset: 13,
      title: {
        fontSize: 12,
        fill: '#999',
        textBaseline: 'middle'
      },
      labels: {
        label: {
          fill: '#404040',
          fontSize: 12,
          textBaseline: 'middle'
        }
      },
      line: {
        lineWidth: 1,
        stroke: '#ccc'
      },
      tickLine: {
        lineWidth: 1,
        stroke: '#ccc',
        value: 5
      }
    },
    circle: {
      labelOffset: 5,
      line: {
        lineWidth: 1,
        stroke: '#ccc'
      },
      grid: {
        line: {
          stroke: '#d9d9d9',
          lineWidth: 1,
          lineDash: [ 1, 3 ]
        }
      },
      labels: {
        label: {
          fill: '#404040',
          fontSize: 12,
          textBaseline: 'middle'
        }
      }
    },
    gauge: {
      grid: null,
      labelOffset: 5,
      tickLine: {
        lineWidth: 1,
        value: -20,
        stroke: '#ccc'
      },
      subTick: 5,
      labels: {
        label: {
          fill: '#404040',
          fontSize: 12,
          textBaseline: 'middle'
        }
      }
    },
    clock: {
      grid: null,
      labelOffset: 5,
      tickLine: {
        lineWidth: 1,
        value: -20,
        stroke: '#C0D0E0'
      },
      subTick: 5,
      labels: {
        label: {
          fill: '#404040',
          fontSize: 12,
          textBaseline: 'middle'
        }
      }
    },
    radius: {
      titleOffset: 45,
      labels: {
        label: {
          fill: '#404040',
          fontSize: 12,
          textBaseline: 'middle'
        }
      },
      line: {
        lineWidth: 1,
        stroke: '#ccc'
      },
      grid: {
        line: {
          stroke: '#d9d9d9',
          lineWidth: 1,
          lineDash: [ 2, 2 ]
        },
        type: 'circle'
      }
    },
    helix: {
      grid: null,
      labels: {
        label: null
      },
      line: {
        lineWidth: 1,
        stroke: '#ccc'
      },
      tickLine: {
        lineWidth: 1,
        value: 5,
        stroke: '#ccc'
      }
    }
  },
  labels: {
    offset: 14,
    label: {
      fill: '#666',
      fontSize: 12,
      textBaseline: 'middle'
    }
  },
  treemapLabels: {
    offset: 10,
    label: {
      fill: '#fff',
      fontSize: 14,
      textBaseline: 'top',
      fontStyle: 'bold'
    }
  },
  innerLabels: {
    label: {
      fill: '#fff',
      fontSize: 12,
      textBaseline: 'middle'
    }
  }, // 在theta坐标系下的饼图文本内部的样式
  thetaLabels: {
    labelLine: {
      lineWidth: 1
    },
    labelHeight: 14,
    offset: 30
  }, // 在theta坐标系下的饼图文本的样式
  legend: {
    right: {
      position: 'right',
      back: null,
      spacingX: 10,
      spacingY: 12,
      markerAlign: 'center',
      width: 20,
      height: 156,
      title: {
        text: ' ',
        fill: '#333',
        textBaseline: 'middle'
      }
    },
    left: {
      position: 'left',
      back: null,
      spacingX: 10,
      spacingY: 12,
      markerAlign: 'center',
      width: 20,
      height: 156,
      title: {
        text: ' ',
        fill: '#333',
        textBaseline: 'middle'
      }
    },
    top: {
      position: 'top',
      title: null,
      back: null,
      spacingX: 16,
      spacingY: 10,
      markerAlign: 'center',
      width: 156,
      height: 20
    },
    bottom: {
      position: 'bottom',
      title: null,
      back: null,
      spacingX: 16,
      spacingY: 10,
      markerAlign: 'center',
      width: 156,
      height: 20
    }
  },
  tooltip: {
    crosshairs: false,
    offset: 15,
    crossLine: {
      stroke: '#666'
    },
    wordSpaceing: 6,
    markerCfg: {
      symbol: 'circle',
      radius: 3
    }
  },
  activeShape: {
    point: {
      fillOpacity: 0.7
    },
    hollowPoint: {
      lineWidth: 2
    },
    interval: {
      fillOpacity: 0.7
    },
    hollowInterval: {
      lineWidth: 2
    },
    area: {
      fillOpacity: 0.85
    },
    hollowArea: {
      lineWidth: 2
    },
    line: {
      lineWidth: 2
    },
    polygon: {
      fillOpacity: 0.75
    }
  }, // 图形激活时，鼠标移动到上面
  shape: {
    point: {
      lineWidth: 1,
      fill: DEFAULT_COLOR,
      radius: 4
    },
    hollowPoint: {
      fill: '#fff',
      lineWidth: 1,
      stroke: DEFAULT_COLOR,
      radius: 3
    },
    interval: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
      fillOpacity: 0.85
    },
    pie: {
      lineWidth: 1,
      stroke: '#fff'
    },
    hollowInterval: {
      fill: '#fff',
      stroke: DEFAULT_COLOR,
      fillOpacity: 0,
      lineWidth: 1
    },
    area: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
      fillOpacity: 0.6
    },
    polygon: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
      fillOpacity: 1
    },
    hollowPolygon: {
      fill: '#fff',
      stroke: DEFAULT_COLOR,
      fillOpacity: 0,
      lineWidth: 1
    },
    hollowArea: {
      fill: '#fff',
      stroke: DEFAULT_COLOR,
      fillOpacity: 0,
      lineWidth: 1
    },
    line: {
      stroke: DEFAULT_COLOR,
      lineWidth: 1,
      fill: null
    }
  },
  guide: {
    text: {
      fill: '#666',
      fontSize: 12
    },
    line: {
      stroke: DEFAULT_COLOR,
      lineDash: [ 0, 2, 2 ]
    },
    rect: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
      fillOpacity: 0.1
    },
    tag: {
      line: {
        stroke: DEFAULT_COLOR,
        lineDash: [ 0, 2, 2 ]
      },
      text: {
        fill: '#666',
        fontSize: 12,
        textAlign: 'center'
      },
      rect: {
        lineWidth: 0,
        fill: DEFAULT_COLOR,
        fillOpacity: 0.1
      }
    },
    html: {
      align: 'cc'
    }
  },
  tooltipMarker: {
    fill: '#fff',
    symbol: 'circle',
    lineWidth: 2,
    stroke: DEFAULT_COLOR,
    radius: 4
  }, // 提示信息在折线图、区域图上形成点的样式
  pixelRatio: null
};

module.exports = Theme;