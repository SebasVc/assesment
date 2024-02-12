/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 450.0, "minX": 0.0, "maxY": 1423.0, "series": [{"data": [[0.0, 450.0], [0.1, 450.0], [0.2, 450.0], [0.3, 450.0], [0.4, 450.0], [0.5, 450.0], [0.6, 450.0], [0.7, 450.0], [0.8, 451.0], [0.9, 451.0], [1.0, 451.0], [1.1, 451.0], [1.2, 451.0], [1.3, 451.0], [1.4, 451.0], [1.5, 453.0], [1.6, 453.0], [1.7, 453.0], [1.8, 453.0], [1.9, 453.0], [2.0, 453.0], [2.1, 453.0], [2.2, 454.0], [2.3, 454.0], [2.4, 454.0], [2.5, 454.0], [2.6, 454.0], [2.7, 454.0], [2.8, 454.0], [2.9, 456.0], [3.0, 456.0], [3.1, 456.0], [3.2, 456.0], [3.3, 456.0], [3.4, 456.0], [3.5, 456.0], [3.6, 457.0], [3.7, 457.0], [3.8, 457.0], [3.9, 457.0], [4.0, 457.0], [4.1, 457.0], [4.2, 457.0], [4.3, 462.0], [4.4, 462.0], [4.5, 462.0], [4.6, 462.0], [4.7, 462.0], [4.8, 462.0], [4.9, 462.0], [5.0, 462.0], [5.1, 462.0], [5.2, 462.0], [5.3, 462.0], [5.4, 462.0], [5.5, 462.0], [5.6, 462.0], [5.7, 462.0], [5.8, 463.0], [5.9, 463.0], [6.0, 463.0], [6.1, 463.0], [6.2, 463.0], [6.3, 463.0], [6.4, 463.0], [6.5, 464.0], [6.6, 464.0], [6.7, 464.0], [6.8, 464.0], [6.9, 464.0], [7.0, 464.0], [7.1, 464.0], [7.2, 467.0], [7.3, 467.0], [7.4, 467.0], [7.5, 467.0], [7.6, 467.0], [7.7, 467.0], [7.8, 467.0], [7.9, 468.0], [8.0, 468.0], [8.1, 468.0], [8.2, 468.0], [8.3, 468.0], [8.4, 468.0], [8.5, 468.0], [8.6, 469.0], [8.7, 469.0], [8.8, 469.0], [8.9, 469.0], [9.0, 469.0], [9.1, 469.0], [9.2, 469.0], [9.3, 469.0], [9.4, 469.0], [9.5, 469.0], [9.6, 469.0], [9.7, 469.0], [9.8, 469.0], [9.9, 469.0], [10.0, 470.0], [10.1, 470.0], [10.2, 470.0], [10.3, 470.0], [10.4, 470.0], [10.5, 470.0], [10.6, 470.0], [10.7, 470.0], [10.8, 476.0], [10.9, 476.0], [11.0, 476.0], [11.1, 476.0], [11.2, 476.0], [11.3, 476.0], [11.4, 476.0], [11.5, 477.0], [11.6, 477.0], [11.7, 477.0], [11.8, 477.0], [11.9, 477.0], [12.0, 477.0], [12.1, 477.0], [12.2, 478.0], [12.3, 478.0], [12.4, 478.0], [12.5, 478.0], [12.6, 478.0], [12.7, 478.0], [12.8, 478.0], [12.9, 485.0], [13.0, 485.0], [13.1, 485.0], [13.2, 485.0], [13.3, 485.0], [13.4, 485.0], [13.5, 485.0], [13.6, 485.0], [13.7, 485.0], [13.8, 485.0], [13.9, 485.0], [14.0, 485.0], [14.1, 485.0], [14.2, 485.0], [14.3, 487.0], [14.4, 487.0], [14.5, 487.0], [14.6, 487.0], [14.7, 487.0], [14.8, 487.0], [14.9, 487.0], [15.0, 491.0], [15.1, 491.0], [15.2, 491.0], [15.3, 491.0], [15.4, 491.0], [15.5, 491.0], [15.6, 491.0], [15.7, 491.0], [15.8, 491.0], [15.9, 491.0], [16.0, 491.0], [16.1, 491.0], [16.2, 491.0], [16.3, 491.0], [16.4, 491.0], [16.5, 492.0], [16.6, 492.0], [16.7, 492.0], [16.8, 492.0], [16.9, 492.0], [17.0, 492.0], [17.1, 492.0], [17.2, 493.0], [17.3, 493.0], [17.4, 493.0], [17.5, 493.0], [17.6, 493.0], [17.7, 493.0], [17.8, 493.0], [17.9, 497.0], [18.0, 497.0], [18.1, 497.0], [18.2, 497.0], [18.3, 497.0], [18.4, 497.0], [18.5, 497.0], [18.6, 498.0], [18.7, 498.0], [18.8, 498.0], [18.9, 498.0], [19.0, 498.0], [19.1, 498.0], [19.2, 498.0], [19.3, 499.0], [19.4, 499.0], [19.5, 499.0], [19.6, 499.0], [19.7, 499.0], [19.8, 499.0], [19.9, 499.0], [20.0, 499.0], [20.1, 499.0], [20.2, 499.0], [20.3, 499.0], [20.4, 499.0], [20.5, 499.0], [20.6, 499.0], [20.7, 499.0], [20.8, 502.0], [20.9, 502.0], [21.0, 502.0], [21.1, 502.0], [21.2, 502.0], [21.3, 502.0], [21.4, 502.0], [21.5, 503.0], [21.6, 503.0], [21.7, 503.0], [21.8, 503.0], [21.9, 503.0], [22.0, 503.0], [22.1, 503.0], [22.2, 503.0], [22.3, 503.0], [22.4, 503.0], [22.5, 503.0], [22.6, 503.0], [22.7, 503.0], [22.8, 503.0], [22.9, 505.0], [23.0, 505.0], [23.1, 505.0], [23.2, 505.0], [23.3, 505.0], [23.4, 505.0], [23.5, 505.0], [23.6, 507.0], [23.7, 507.0], [23.8, 507.0], [23.9, 507.0], [24.0, 507.0], [24.1, 507.0], [24.2, 507.0], [24.3, 510.0], [24.4, 510.0], [24.5, 510.0], [24.6, 510.0], [24.7, 510.0], [24.8, 510.0], [24.9, 510.0], [25.0, 511.0], [25.1, 511.0], [25.2, 511.0], [25.3, 511.0], [25.4, 511.0], [25.5, 511.0], [25.6, 511.0], [25.7, 511.0], [25.8, 512.0], [25.9, 512.0], [26.0, 512.0], [26.1, 512.0], [26.2, 512.0], [26.3, 512.0], [26.4, 512.0], [26.5, 512.0], [26.6, 512.0], [26.7, 512.0], [26.8, 512.0], [26.9, 512.0], [27.0, 512.0], [27.1, 512.0], [27.2, 514.0], [27.3, 514.0], [27.4, 514.0], [27.5, 514.0], [27.6, 514.0], [27.7, 514.0], [27.8, 514.0], [27.9, 516.0], [28.0, 516.0], [28.1, 516.0], [28.2, 516.0], [28.3, 516.0], [28.4, 516.0], [28.5, 516.0], [28.6, 517.0], [28.7, 517.0], [28.8, 517.0], [28.9, 517.0], [29.0, 517.0], [29.1, 517.0], [29.2, 517.0], [29.3, 524.0], [29.4, 524.0], [29.5, 524.0], [29.6, 524.0], [29.7, 524.0], [29.8, 524.0], [29.9, 524.0], [30.0, 524.0], [30.1, 524.0], [30.2, 524.0], [30.3, 524.0], [30.4, 524.0], [30.5, 524.0], [30.6, 524.0], [30.7, 524.0], [30.8, 524.0], [30.9, 524.0], [31.0, 524.0], [31.1, 524.0], [31.2, 524.0], [31.3, 524.0], [31.4, 524.0], [31.5, 526.0], [31.6, 526.0], [31.7, 526.0], [31.8, 526.0], [31.9, 526.0], [32.0, 526.0], [32.1, 526.0], [32.2, 526.0], [32.3, 526.0], [32.4, 526.0], [32.5, 526.0], [32.6, 526.0], [32.7, 526.0], [32.8, 526.0], [32.9, 527.0], [33.0, 527.0], [33.1, 527.0], [33.2, 527.0], [33.3, 527.0], [33.4, 527.0], [33.5, 527.0], [33.6, 529.0], [33.7, 529.0], [33.8, 529.0], [33.9, 529.0], [34.0, 529.0], [34.1, 529.0], [34.2, 529.0], [34.3, 529.0], [34.4, 529.0], [34.5, 529.0], [34.6, 529.0], [34.7, 529.0], [34.8, 529.0], [34.9, 529.0], [35.0, 529.0], [35.1, 530.0], [35.2, 530.0], [35.3, 530.0], [35.4, 530.0], [35.5, 530.0], [35.6, 530.0], [35.7, 530.0], [35.8, 537.0], [35.9, 537.0], [36.0, 537.0], [36.1, 537.0], [36.2, 537.0], [36.3, 537.0], [36.4, 537.0], [36.5, 538.0], [36.6, 538.0], [36.7, 538.0], [36.8, 538.0], [36.9, 538.0], [37.0, 538.0], [37.1, 538.0], [37.2, 538.0], [37.3, 538.0], [37.4, 538.0], [37.5, 538.0], [37.6, 538.0], [37.7, 538.0], [37.8, 538.0], [37.9, 540.0], [38.0, 540.0], [38.1, 540.0], [38.2, 540.0], [38.3, 540.0], [38.4, 540.0], [38.5, 540.0], [38.6, 542.0], [38.7, 542.0], [38.8, 542.0], [38.9, 542.0], [39.0, 542.0], [39.1, 542.0], [39.2, 542.0], [39.3, 545.0], [39.4, 545.0], [39.5, 545.0], [39.6, 545.0], [39.7, 545.0], [39.8, 545.0], [39.9, 545.0], [40.0, 545.0], [40.1, 545.0], [40.2, 545.0], [40.3, 545.0], [40.4, 545.0], [40.5, 545.0], [40.6, 545.0], [40.7, 545.0], [40.8, 546.0], [40.9, 546.0], [41.0, 546.0], [41.1, 546.0], [41.2, 546.0], [41.3, 546.0], [41.4, 546.0], [41.5, 547.0], [41.6, 547.0], [41.7, 547.0], [41.8, 547.0], [41.9, 547.0], [42.0, 547.0], [42.1, 547.0], [42.2, 547.0], [42.3, 547.0], [42.4, 547.0], [42.5, 547.0], [42.6, 547.0], [42.7, 547.0], [42.8, 547.0], [42.9, 547.0], [43.0, 547.0], [43.1, 547.0], [43.2, 547.0], [43.3, 547.0], [43.4, 547.0], [43.5, 547.0], [43.6, 547.0], [43.7, 547.0], [43.8, 547.0], [43.9, 547.0], [44.0, 547.0], [44.1, 547.0], [44.2, 547.0], [44.3, 548.0], [44.4, 548.0], [44.5, 548.0], [44.6, 548.0], [44.7, 548.0], [44.8, 548.0], [44.9, 548.0], [45.0, 548.0], [45.1, 548.0], [45.2, 548.0], [45.3, 548.0], [45.4, 548.0], [45.5, 548.0], [45.6, 548.0], [45.7, 548.0], [45.8, 550.0], [45.9, 550.0], [46.0, 550.0], [46.1, 550.0], [46.2, 550.0], [46.3, 550.0], [46.4, 550.0], [46.5, 553.0], [46.6, 553.0], [46.7, 553.0], [46.8, 553.0], [46.9, 553.0], [47.0, 553.0], [47.1, 553.0], [47.2, 555.0], [47.3, 555.0], [47.4, 555.0], [47.5, 555.0], [47.6, 555.0], [47.7, 555.0], [47.8, 555.0], [47.9, 555.0], [48.0, 555.0], [48.1, 555.0], [48.2, 555.0], [48.3, 555.0], [48.4, 555.0], [48.5, 555.0], [48.6, 562.0], [48.7, 562.0], [48.8, 562.0], [48.9, 562.0], [49.0, 562.0], [49.1, 562.0], [49.2, 562.0], [49.3, 563.0], [49.4, 563.0], [49.5, 563.0], [49.6, 563.0], [49.7, 563.0], [49.8, 563.0], [49.9, 563.0], [50.0, 563.0], [50.1, 564.0], [50.2, 564.0], [50.3, 564.0], [50.4, 564.0], [50.5, 564.0], [50.6, 564.0], [50.7, 564.0], [50.8, 565.0], [50.9, 565.0], [51.0, 565.0], [51.1, 565.0], [51.2, 565.0], [51.3, 565.0], [51.4, 565.0], [51.5, 569.0], [51.6, 569.0], [51.7, 569.0], [51.8, 569.0], [51.9, 569.0], [52.0, 569.0], [52.1, 569.0], [52.2, 571.0], [52.3, 571.0], [52.4, 571.0], [52.5, 571.0], [52.6, 571.0], [52.7, 571.0], [52.8, 571.0], [52.9, 574.0], [53.0, 574.0], [53.1, 574.0], [53.2, 574.0], [53.3, 574.0], [53.4, 574.0], [53.5, 574.0], [53.6, 585.0], [53.7, 585.0], [53.8, 585.0], [53.9, 585.0], [54.0, 585.0], [54.1, 585.0], [54.2, 585.0], [54.3, 590.0], [54.4, 590.0], [54.5, 590.0], [54.6, 590.0], [54.7, 590.0], [54.8, 590.0], [54.9, 590.0], [55.0, 590.0], [55.1, 593.0], [55.2, 593.0], [55.3, 593.0], [55.4, 593.0], [55.5, 593.0], [55.6, 593.0], [55.7, 593.0], [55.8, 602.0], [55.9, 602.0], [56.0, 602.0], [56.1, 602.0], [56.2, 602.0], [56.3, 602.0], [56.4, 602.0], [56.5, 613.0], [56.6, 613.0], [56.7, 613.0], [56.8, 613.0], [56.9, 613.0], [57.0, 613.0], [57.1, 613.0], [57.2, 615.0], [57.3, 615.0], [57.4, 615.0], [57.5, 615.0], [57.6, 615.0], [57.7, 615.0], [57.8, 615.0], [57.9, 623.0], [58.0, 623.0], [58.1, 623.0], [58.2, 623.0], [58.3, 623.0], [58.4, 623.0], [58.5, 623.0], [58.6, 630.0], [58.7, 630.0], [58.8, 630.0], [58.9, 630.0], [59.0, 630.0], [59.1, 630.0], [59.2, 630.0], [59.3, 640.0], [59.4, 640.0], [59.5, 640.0], [59.6, 640.0], [59.7, 640.0], [59.8, 640.0], [59.9, 640.0], [60.0, 640.0], [60.1, 648.0], [60.2, 648.0], [60.3, 648.0], [60.4, 648.0], [60.5, 648.0], [60.6, 648.0], [60.7, 648.0], [60.8, 649.0], [60.9, 649.0], [61.0, 649.0], [61.1, 649.0], [61.2, 649.0], [61.3, 649.0], [61.4, 649.0], [61.5, 667.0], [61.6, 667.0], [61.7, 667.0], [61.8, 667.0], [61.9, 667.0], [62.0, 667.0], [62.1, 667.0], [62.2, 980.0], [62.3, 980.0], [62.4, 980.0], [62.5, 980.0], [62.6, 980.0], [62.7, 980.0], [62.8, 980.0], [62.9, 988.0], [63.0, 988.0], [63.1, 988.0], [63.2, 988.0], [63.3, 988.0], [63.4, 988.0], [63.5, 988.0], [63.6, 1001.0], [63.7, 1001.0], [63.8, 1001.0], [63.9, 1001.0], [64.0, 1001.0], [64.1, 1001.0], [64.2, 1001.0], [64.3, 1005.0], [64.4, 1005.0], [64.5, 1005.0], [64.6, 1005.0], [64.7, 1005.0], [64.8, 1005.0], [64.9, 1005.0], [65.0, 1005.0], [65.1, 1007.0], [65.2, 1007.0], [65.3, 1007.0], [65.4, 1007.0], [65.5, 1007.0], [65.6, 1007.0], [65.7, 1007.0], [65.8, 1008.0], [65.9, 1008.0], [66.0, 1008.0], [66.1, 1008.0], [66.2, 1008.0], [66.3, 1008.0], [66.4, 1008.0], [66.5, 1010.0], [66.6, 1010.0], [66.7, 1010.0], [66.8, 1010.0], [66.9, 1010.0], [67.0, 1010.0], [67.1, 1010.0], [67.2, 1012.0], [67.3, 1012.0], [67.4, 1012.0], [67.5, 1012.0], [67.6, 1012.0], [67.7, 1012.0], [67.8, 1012.0], [67.9, 1012.0], [68.0, 1012.0], [68.1, 1012.0], [68.2, 1012.0], [68.3, 1012.0], [68.4, 1012.0], [68.5, 1012.0], [68.6, 1013.0], [68.7, 1013.0], [68.8, 1013.0], [68.9, 1013.0], [69.0, 1013.0], [69.1, 1013.0], [69.2, 1013.0], [69.3, 1015.0], [69.4, 1015.0], [69.5, 1015.0], [69.6, 1015.0], [69.7, 1015.0], [69.8, 1015.0], [69.9, 1015.0], [70.0, 1019.0], [70.1, 1019.0], [70.2, 1019.0], [70.3, 1019.0], [70.4, 1019.0], [70.5, 1019.0], [70.6, 1019.0], [70.7, 1019.0], [70.8, 1020.0], [70.9, 1020.0], [71.0, 1020.0], [71.1, 1020.0], [71.2, 1020.0], [71.3, 1020.0], [71.4, 1020.0], [71.5, 1021.0], [71.6, 1021.0], [71.7, 1021.0], [71.8, 1021.0], [71.9, 1021.0], [72.0, 1021.0], [72.1, 1021.0], [72.2, 1025.0], [72.3, 1025.0], [72.4, 1025.0], [72.5, 1025.0], [72.6, 1025.0], [72.7, 1025.0], [72.8, 1025.0], [72.9, 1029.0], [73.0, 1029.0], [73.1, 1029.0], [73.2, 1029.0], [73.3, 1029.0], [73.4, 1029.0], [73.5, 1029.0], [73.6, 1031.0], [73.7, 1031.0], [73.8, 1031.0], [73.9, 1031.0], [74.0, 1031.0], [74.1, 1031.0], [74.2, 1031.0], [74.3, 1033.0], [74.4, 1033.0], [74.5, 1033.0], [74.6, 1033.0], [74.7, 1033.0], [74.8, 1033.0], [74.9, 1033.0], [75.0, 1035.0], [75.1, 1035.0], [75.2, 1035.0], [75.3, 1035.0], [75.4, 1035.0], [75.5, 1035.0], [75.6, 1035.0], [75.7, 1035.0], [75.8, 1038.0], [75.9, 1038.0], [76.0, 1038.0], [76.1, 1038.0], [76.2, 1038.0], [76.3, 1038.0], [76.4, 1038.0], [76.5, 1047.0], [76.6, 1047.0], [76.7, 1047.0], [76.8, 1047.0], [76.9, 1047.0], [77.0, 1047.0], [77.1, 1047.0], [77.2, 1048.0], [77.3, 1048.0], [77.4, 1048.0], [77.5, 1048.0], [77.6, 1048.0], [77.7, 1048.0], [77.8, 1048.0], [77.9, 1054.0], [78.0, 1054.0], [78.1, 1054.0], [78.2, 1054.0], [78.3, 1054.0], [78.4, 1054.0], [78.5, 1054.0], [78.6, 1055.0], [78.7, 1055.0], [78.8, 1055.0], [78.9, 1055.0], [79.0, 1055.0], [79.1, 1055.0], [79.2, 1055.0], [79.3, 1062.0], [79.4, 1062.0], [79.5, 1062.0], [79.6, 1062.0], [79.7, 1062.0], [79.8, 1062.0], [79.9, 1062.0], [80.0, 1066.0], [80.1, 1066.0], [80.2, 1066.0], [80.3, 1066.0], [80.4, 1066.0], [80.5, 1066.0], [80.6, 1066.0], [80.7, 1066.0], [80.8, 1070.0], [80.9, 1070.0], [81.0, 1070.0], [81.1, 1070.0], [81.2, 1070.0], [81.3, 1070.0], [81.4, 1070.0], [81.5, 1078.0], [81.6, 1078.0], [81.7, 1078.0], [81.8, 1078.0], [81.9, 1078.0], [82.0, 1078.0], [82.1, 1078.0], [82.2, 1090.0], [82.3, 1090.0], [82.4, 1090.0], [82.5, 1090.0], [82.6, 1090.0], [82.7, 1090.0], [82.8, 1090.0], [82.9, 1097.0], [83.0, 1097.0], [83.1, 1097.0], [83.2, 1097.0], [83.3, 1097.0], [83.4, 1097.0], [83.5, 1097.0], [83.6, 1112.0], [83.7, 1112.0], [83.8, 1112.0], [83.9, 1112.0], [84.0, 1112.0], [84.1, 1112.0], [84.2, 1112.0], [84.3, 1119.0], [84.4, 1119.0], [84.5, 1119.0], [84.6, 1119.0], [84.7, 1119.0], [84.8, 1119.0], [84.9, 1119.0], [85.0, 1126.0], [85.1, 1126.0], [85.2, 1126.0], [85.3, 1126.0], [85.4, 1126.0], [85.5, 1126.0], [85.6, 1126.0], [85.7, 1126.0], [85.8, 1139.0], [85.9, 1139.0], [86.0, 1139.0], [86.1, 1139.0], [86.2, 1139.0], [86.3, 1139.0], [86.4, 1139.0], [86.5, 1154.0], [86.6, 1154.0], [86.7, 1154.0], [86.8, 1154.0], [86.9, 1154.0], [87.0, 1154.0], [87.1, 1154.0], [87.2, 1158.0], [87.3, 1158.0], [87.4, 1158.0], [87.5, 1158.0], [87.6, 1158.0], [87.7, 1158.0], [87.8, 1158.0], [87.9, 1164.0], [88.0, 1164.0], [88.1, 1164.0], [88.2, 1164.0], [88.3, 1164.0], [88.4, 1164.0], [88.5, 1164.0], [88.6, 1165.0], [88.7, 1165.0], [88.8, 1165.0], [88.9, 1165.0], [89.0, 1165.0], [89.1, 1165.0], [89.2, 1165.0], [89.3, 1173.0], [89.4, 1173.0], [89.5, 1173.0], [89.6, 1173.0], [89.7, 1173.0], [89.8, 1173.0], [89.9, 1173.0], [90.0, 1175.0], [90.1, 1175.0], [90.2, 1175.0], [90.3, 1175.0], [90.4, 1175.0], [90.5, 1175.0], [90.6, 1175.0], [90.7, 1175.0], [90.8, 1178.0], [90.9, 1178.0], [91.0, 1178.0], [91.1, 1178.0], [91.2, 1178.0], [91.3, 1178.0], [91.4, 1178.0], [91.5, 1180.0], [91.6, 1180.0], [91.7, 1180.0], [91.8, 1180.0], [91.9, 1180.0], [92.0, 1180.0], [92.1, 1180.0], [92.2, 1183.0], [92.3, 1183.0], [92.4, 1183.0], [92.5, 1183.0], [92.6, 1183.0], [92.7, 1183.0], [92.8, 1183.0], [92.9, 1187.0], [93.0, 1187.0], [93.1, 1187.0], [93.2, 1187.0], [93.3, 1187.0], [93.4, 1187.0], [93.5, 1187.0], [93.6, 1197.0], [93.7, 1197.0], [93.8, 1197.0], [93.9, 1197.0], [94.0, 1197.0], [94.1, 1197.0], [94.2, 1197.0], [94.3, 1203.0], [94.4, 1203.0], [94.5, 1203.0], [94.6, 1203.0], [94.7, 1203.0], [94.8, 1203.0], [94.9, 1203.0], [95.0, 1210.0], [95.1, 1210.0], [95.2, 1210.0], [95.3, 1210.0], [95.4, 1210.0], [95.5, 1210.0], [95.6, 1210.0], [95.7, 1210.0], [95.8, 1231.0], [95.9, 1231.0], [96.0, 1231.0], [96.1, 1231.0], [96.2, 1231.0], [96.3, 1231.0], [96.4, 1231.0], [96.5, 1234.0], [96.6, 1234.0], [96.7, 1234.0], [96.8, 1234.0], [96.9, 1234.0], [97.0, 1234.0], [97.1, 1234.0], [97.2, 1238.0], [97.3, 1238.0], [97.4, 1238.0], [97.5, 1238.0], [97.6, 1238.0], [97.7, 1238.0], [97.8, 1238.0], [97.9, 1305.0], [98.0, 1305.0], [98.1, 1305.0], [98.2, 1305.0], [98.3, 1305.0], [98.4, 1305.0], [98.5, 1305.0], [98.6, 1331.0], [98.7, 1331.0], [98.8, 1331.0], [98.9, 1331.0], [99.0, 1331.0], [99.1, 1331.0], [99.2, 1331.0], [99.3, 1423.0], [99.4, 1423.0], [99.5, 1423.0], [99.6, 1423.0], [99.7, 1423.0], [99.8, 1423.0], [99.9, 1423.0]], "isOverall": false, "label": "createUser", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 49.0, "series": [{"data": [[1100.0, 15.0], [1200.0, 5.0], [600.0, 9.0], [1300.0, 2.0], [1400.0, 1.0], [400.0, 29.0], [900.0, 2.0], [500.0, 49.0], [1000.0, 28.0]], "isOverall": false, "label": "createUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 12.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 111.0, "series": [{"data": [[0.0, 12.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 111.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 17.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 10.92857142857143, "minX": 1.70767584E12, "maxY": 10.92857142857143, "series": [{"data": [[1.70767584E12, 10.92857142857143]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70767584E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 457.0, "minX": 1.0, "maxY": 1331.0, "series": [{"data": [[8.0, 548.1176470588234], [2.0, 457.0], [9.0, 613.9500000000003], [10.0, 671.1999999999999], [11.0, 727.4], [12.0, 918.75], [3.0, 467.0], [13.0, 914.0909090909092], [14.0, 978.2222222222222], [15.0, 961.8000000000001], [16.0, 764.2], [4.0, 469.0], [1.0, 478.0], [17.0, 1169.0], [18.0, 1331.0], [19.0, 1201.0], [5.0, 463.0], [6.0, 470.0], [7.0, 483.6]], "isOverall": false, "label": "createUser", "isController": false}, {"data": [[10.92857142857143, 745.8499999999999]], "isOverall": false, "label": "createUser-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 19.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1255.4166666666667, "minX": 1.70767584E12, "maxY": 2790.55, "series": [{"data": [[1.70767584E12, 2790.55]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70767584E12, 1255.4166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70767584E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 745.8499999999999, "minX": 1.70767584E12, "maxY": 745.8499999999999, "series": [{"data": [[1.70767584E12, 745.8499999999999]], "isOverall": false, "label": "createUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70767584E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 745.8428571428573, "minX": 1.70767584E12, "maxY": 745.8428571428573, "series": [{"data": [[1.70767584E12, 745.8428571428573]], "isOverall": false, "label": "createUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70767584E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 119.85714285714285, "minX": 1.70767584E12, "maxY": 119.85714285714285, "series": [{"data": [[1.70767584E12, 119.85714285714285]], "isOverall": false, "label": "createUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70767584E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 476.0, "minX": 1.70767584E12, "maxY": 1423.0, "series": [{"data": [[1.70767584E12, 1423.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70767584E12, 476.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70767584E12, 1179.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70767584E12, 1400.9200000000005]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70767584E12, 602.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.70767584E12, 1226.8]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70767584E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 462.0, "minX": 9.0, "maxY": 1164.0, "series": [{"data": [[16.0, 649.0], [17.0, 555.0], [18.0, 823.5], [9.0, 547.0], [11.0, 1164.0], [12.0, 537.5], [13.0, 559.0], [15.0, 1126.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 462.0], [9.0, 465.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 462.0, "minX": 9.0, "maxY": 1164.0, "series": [{"data": [[16.0, 649.0], [17.0, 555.0], [18.0, 823.5], [9.0, 547.0], [11.0, 1164.0], [12.0, 537.5], [13.0, 559.0], [15.0, 1126.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 462.0], [9.0, 465.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 18.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.3333333333333335, "minX": 1.70767584E12, "maxY": 2.3333333333333335, "series": [{"data": [[1.70767584E12, 2.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70767584E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.2833333333333333, "minX": 1.70767584E12, "maxY": 2.05, "series": [{"data": [[1.70767584E12, 2.05]], "isOverall": false, "label": "201", "isController": false}, {"data": [[1.70767584E12, 0.2833333333333333]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70767584E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.2833333333333333, "minX": 1.70767584E12, "maxY": 2.05, "series": [{"data": [[1.70767584E12, 2.05]], "isOverall": false, "label": "createUser-success", "isController": false}, {"data": [[1.70767584E12, 0.2833333333333333]], "isOverall": false, "label": "createUser-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70767584E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.2833333333333333, "minX": 1.70767584E12, "maxY": 2.05, "series": [{"data": [[1.70767584E12, 2.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.70767584E12, 0.2833333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70767584E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

