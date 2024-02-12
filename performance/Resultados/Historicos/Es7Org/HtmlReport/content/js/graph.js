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
        data: {"result": {"minY": 426.0, "minX": 0.0, "maxY": 1540.0, "series": [{"data": [[0.0, 426.0], [0.1, 426.0], [0.2, 426.0], [0.3, 426.0], [0.4, 426.0], [0.5, 426.0], [0.6, 426.0], [0.7, 429.0], [0.8, 429.0], [0.9, 429.0], [1.0, 429.0], [1.1, 429.0], [1.2, 429.0], [1.3, 429.0], [1.4, 434.0], [1.5, 434.0], [1.6, 434.0], [1.7, 434.0], [1.8, 434.0], [1.9, 434.0], [2.0, 437.0], [2.1, 437.0], [2.2, 437.0], [2.3, 437.0], [2.4, 437.0], [2.5, 437.0], [2.6, 437.0], [2.7, 442.0], [2.8, 442.0], [2.9, 442.0], [3.0, 442.0], [3.1, 442.0], [3.2, 442.0], [3.3, 442.0], [3.4, 450.0], [3.5, 450.0], [3.6, 450.0], [3.7, 450.0], [3.8, 450.0], [3.9, 450.0], [4.0, 455.0], [4.1, 455.0], [4.2, 455.0], [4.3, 455.0], [4.4, 455.0], [4.5, 455.0], [4.6, 455.0], [4.7, 456.0], [4.8, 456.0], [4.9, 456.0], [5.0, 456.0], [5.1, 456.0], [5.2, 456.0], [5.3, 456.0], [5.4, 457.0], [5.5, 457.0], [5.6, 457.0], [5.7, 457.0], [5.8, 457.0], [5.9, 457.0], [6.0, 457.0], [6.1, 457.0], [6.2, 457.0], [6.3, 457.0], [6.4, 457.0], [6.5, 457.0], [6.6, 457.0], [6.7, 460.0], [6.8, 460.0], [6.9, 460.0], [7.0, 460.0], [7.1, 460.0], [7.2, 460.0], [7.3, 460.0], [7.4, 468.0], [7.5, 468.0], [7.6, 468.0], [7.7, 468.0], [7.8, 468.0], [7.9, 468.0], [8.0, 470.0], [8.1, 470.0], [8.2, 470.0], [8.3, 470.0], [8.4, 470.0], [8.5, 470.0], [8.6, 470.0], [8.7, 470.0], [8.8, 470.0], [8.9, 470.0], [9.0, 470.0], [9.1, 470.0], [9.2, 470.0], [9.3, 470.0], [9.4, 473.0], [9.5, 473.0], [9.6, 473.0], [9.7, 473.0], [9.8, 473.0], [9.9, 473.0], [10.0, 475.0], [10.1, 475.0], [10.2, 475.0], [10.3, 475.0], [10.4, 475.0], [10.5, 475.0], [10.6, 475.0], [10.7, 482.0], [10.8, 482.0], [10.9, 482.0], [11.0, 482.0], [11.1, 482.0], [11.2, 482.0], [11.3, 482.0], [11.4, 483.0], [11.5, 483.0], [11.6, 483.0], [11.7, 483.0], [11.8, 483.0], [11.9, 483.0], [12.0, 483.0], [12.1, 483.0], [12.2, 483.0], [12.3, 483.0], [12.4, 483.0], [12.5, 483.0], [12.6, 483.0], [12.7, 485.0], [12.8, 485.0], [12.9, 485.0], [13.0, 485.0], [13.1, 485.0], [13.2, 485.0], [13.3, 485.0], [13.4, 486.0], [13.5, 486.0], [13.6, 486.0], [13.7, 486.0], [13.8, 486.0], [13.9, 486.0], [14.0, 486.0], [14.1, 486.0], [14.2, 486.0], [14.3, 486.0], [14.4, 486.0], [14.5, 486.0], [14.6, 486.0], [14.7, 486.0], [14.8, 486.0], [14.9, 486.0], [15.0, 486.0], [15.1, 486.0], [15.2, 486.0], [15.3, 486.0], [15.4, 486.0], [15.5, 486.0], [15.6, 486.0], [15.7, 486.0], [15.8, 486.0], [15.9, 486.0], [16.0, 487.0], [16.1, 487.0], [16.2, 487.0], [16.3, 487.0], [16.4, 487.0], [16.5, 487.0], [16.6, 487.0], [16.7, 488.0], [16.8, 488.0], [16.9, 488.0], [17.0, 488.0], [17.1, 488.0], [17.2, 488.0], [17.3, 488.0], [17.4, 488.0], [17.5, 488.0], [17.6, 488.0], [17.7, 488.0], [17.8, 488.0], [17.9, 488.0], [18.0, 489.0], [18.1, 489.0], [18.2, 489.0], [18.3, 489.0], [18.4, 489.0], [18.5, 489.0], [18.6, 489.0], [18.7, 490.0], [18.8, 490.0], [18.9, 490.0], [19.0, 490.0], [19.1, 490.0], [19.2, 490.0], [19.3, 490.0], [19.4, 490.0], [19.5, 490.0], [19.6, 490.0], [19.7, 490.0], [19.8, 490.0], [19.9, 490.0], [20.0, 490.0], [20.1, 490.0], [20.2, 490.0], [20.3, 490.0], [20.4, 490.0], [20.5, 490.0], [20.6, 490.0], [20.7, 490.0], [20.8, 490.0], [20.9, 490.0], [21.0, 490.0], [21.1, 490.0], [21.2, 490.0], [21.3, 490.0], [21.4, 492.0], [21.5, 492.0], [21.6, 492.0], [21.7, 492.0], [21.8, 492.0], [21.9, 492.0], [22.0, 493.0], [22.1, 493.0], [22.2, 493.0], [22.3, 493.0], [22.4, 493.0], [22.5, 493.0], [22.6, 493.0], [22.7, 493.0], [22.8, 493.0], [22.9, 493.0], [23.0, 493.0], [23.1, 493.0], [23.2, 493.0], [23.3, 493.0], [23.4, 494.0], [23.5, 494.0], [23.6, 494.0], [23.7, 494.0], [23.8, 494.0], [23.9, 494.0], [24.0, 494.0], [24.1, 494.0], [24.2, 494.0], [24.3, 494.0], [24.4, 494.0], [24.5, 494.0], [24.6, 494.0], [24.7, 496.0], [24.8, 496.0], [24.9, 496.0], [25.0, 496.0], [25.1, 496.0], [25.2, 496.0], [25.3, 496.0], [25.4, 496.0], [25.5, 496.0], [25.6, 496.0], [25.7, 496.0], [25.8, 496.0], [25.9, 496.0], [26.0, 498.0], [26.1, 498.0], [26.2, 498.0], [26.3, 498.0], [26.4, 498.0], [26.5, 498.0], [26.6, 498.0], [26.7, 499.0], [26.8, 499.0], [26.9, 499.0], [27.0, 499.0], [27.1, 499.0], [27.2, 499.0], [27.3, 499.0], [27.4, 500.0], [27.5, 500.0], [27.6, 500.0], [27.7, 500.0], [27.8, 500.0], [27.9, 500.0], [28.0, 503.0], [28.1, 503.0], [28.2, 503.0], [28.3, 503.0], [28.4, 503.0], [28.5, 503.0], [28.6, 503.0], [28.7, 503.0], [28.8, 503.0], [28.9, 503.0], [29.0, 503.0], [29.1, 503.0], [29.2, 503.0], [29.3, 503.0], [29.4, 503.0], [29.5, 503.0], [29.6, 503.0], [29.7, 503.0], [29.8, 503.0], [29.9, 503.0], [30.0, 504.0], [30.1, 504.0], [30.2, 504.0], [30.3, 504.0], [30.4, 504.0], [30.5, 504.0], [30.6, 504.0], [30.7, 507.0], [30.8, 507.0], [30.9, 507.0], [31.0, 507.0], [31.1, 507.0], [31.2, 507.0], [31.3, 507.0], [31.4, 507.0], [31.5, 507.0], [31.6, 507.0], [31.7, 507.0], [31.8, 507.0], [31.9, 507.0], [32.0, 507.0], [32.1, 507.0], [32.2, 507.0], [32.3, 507.0], [32.4, 507.0], [32.5, 507.0], [32.6, 507.0], [32.7, 508.0], [32.8, 508.0], [32.9, 508.0], [33.0, 508.0], [33.1, 508.0], [33.2, 508.0], [33.3, 508.0], [33.4, 510.0], [33.5, 510.0], [33.6, 510.0], [33.7, 510.0], [33.8, 510.0], [33.9, 510.0], [34.0, 511.0], [34.1, 511.0], [34.2, 511.0], [34.3, 511.0], [34.4, 511.0], [34.5, 511.0], [34.6, 511.0], [34.7, 512.0], [34.8, 512.0], [34.9, 512.0], [35.0, 512.0], [35.1, 512.0], [35.2, 512.0], [35.3, 512.0], [35.4, 512.0], [35.5, 512.0], [35.6, 512.0], [35.7, 512.0], [35.8, 512.0], [35.9, 512.0], [36.0, 512.0], [36.1, 512.0], [36.2, 512.0], [36.3, 512.0], [36.4, 512.0], [36.5, 512.0], [36.6, 512.0], [36.7, 513.0], [36.8, 513.0], [36.9, 513.0], [37.0, 513.0], [37.1, 513.0], [37.2, 513.0], [37.3, 513.0], [37.4, 514.0], [37.5, 514.0], [37.6, 514.0], [37.7, 514.0], [37.8, 514.0], [37.9, 514.0], [38.0, 516.0], [38.1, 516.0], [38.2, 516.0], [38.3, 516.0], [38.4, 516.0], [38.5, 516.0], [38.6, 516.0], [38.7, 516.0], [38.8, 516.0], [38.9, 516.0], [39.0, 516.0], [39.1, 516.0], [39.2, 516.0], [39.3, 516.0], [39.4, 516.0], [39.5, 516.0], [39.6, 516.0], [39.7, 516.0], [39.8, 516.0], [39.9, 516.0], [40.0, 517.0], [40.1, 517.0], [40.2, 517.0], [40.3, 517.0], [40.4, 517.0], [40.5, 517.0], [40.6, 517.0], [40.7, 518.0], [40.8, 518.0], [40.9, 518.0], [41.0, 518.0], [41.1, 518.0], [41.2, 518.0], [41.3, 518.0], [41.4, 518.0], [41.5, 518.0], [41.6, 518.0], [41.7, 518.0], [41.8, 518.0], [41.9, 518.0], [42.0, 519.0], [42.1, 519.0], [42.2, 519.0], [42.3, 519.0], [42.4, 519.0], [42.5, 519.0], [42.6, 519.0], [42.7, 519.0], [42.8, 519.0], [42.9, 519.0], [43.0, 519.0], [43.1, 519.0], [43.2, 519.0], [43.3, 519.0], [43.4, 521.0], [43.5, 521.0], [43.6, 521.0], [43.7, 521.0], [43.8, 521.0], [43.9, 521.0], [44.0, 522.0], [44.1, 522.0], [44.2, 522.0], [44.3, 522.0], [44.4, 522.0], [44.5, 522.0], [44.6, 522.0], [44.7, 522.0], [44.8, 522.0], [44.9, 522.0], [45.0, 522.0], [45.1, 522.0], [45.2, 522.0], [45.3, 522.0], [45.4, 523.0], [45.5, 523.0], [45.6, 523.0], [45.7, 523.0], [45.8, 523.0], [45.9, 523.0], [46.0, 524.0], [46.1, 524.0], [46.2, 524.0], [46.3, 524.0], [46.4, 524.0], [46.5, 524.0], [46.6, 524.0], [46.7, 524.0], [46.8, 524.0], [46.9, 524.0], [47.0, 524.0], [47.1, 524.0], [47.2, 524.0], [47.3, 524.0], [47.4, 525.0], [47.5, 525.0], [47.6, 525.0], [47.7, 525.0], [47.8, 525.0], [47.9, 525.0], [48.0, 525.0], [48.1, 525.0], [48.2, 525.0], [48.3, 525.0], [48.4, 525.0], [48.5, 525.0], [48.6, 525.0], [48.7, 525.0], [48.8, 525.0], [48.9, 525.0], [49.0, 525.0], [49.1, 525.0], [49.2, 525.0], [49.3, 525.0], [49.4, 525.0], [49.5, 525.0], [49.6, 525.0], [49.7, 525.0], [49.8, 525.0], [49.9, 525.0], [50.0, 526.0], [50.1, 526.0], [50.2, 526.0], [50.3, 526.0], [50.4, 526.0], [50.5, 526.0], [50.6, 526.0], [50.7, 527.0], [50.8, 527.0], [50.9, 527.0], [51.0, 527.0], [51.1, 527.0], [51.2, 527.0], [51.3, 527.0], [51.4, 527.0], [51.5, 527.0], [51.6, 527.0], [51.7, 527.0], [51.8, 527.0], [51.9, 527.0], [52.0, 527.0], [52.1, 527.0], [52.2, 527.0], [52.3, 527.0], [52.4, 527.0], [52.5, 527.0], [52.6, 527.0], [52.7, 529.0], [52.8, 529.0], [52.9, 529.0], [53.0, 529.0], [53.1, 529.0], [53.2, 529.0], [53.3, 529.0], [53.4, 529.0], [53.5, 529.0], [53.6, 529.0], [53.7, 529.0], [53.8, 529.0], [53.9, 529.0], [54.0, 530.0], [54.1, 530.0], [54.2, 530.0], [54.3, 530.0], [54.4, 530.0], [54.5, 530.0], [54.6, 530.0], [54.7, 531.0], [54.8, 531.0], [54.9, 531.0], [55.0, 531.0], [55.1, 531.0], [55.2, 531.0], [55.3, 531.0], [55.4, 531.0], [55.5, 531.0], [55.6, 531.0], [55.7, 531.0], [55.8, 531.0], [55.9, 531.0], [56.0, 531.0], [56.1, 531.0], [56.2, 531.0], [56.3, 531.0], [56.4, 531.0], [56.5, 531.0], [56.6, 531.0], [56.7, 532.0], [56.8, 532.0], [56.9, 532.0], [57.0, 532.0], [57.1, 532.0], [57.2, 532.0], [57.3, 532.0], [57.4, 533.0], [57.5, 533.0], [57.6, 533.0], [57.7, 533.0], [57.8, 533.0], [57.9, 533.0], [58.0, 535.0], [58.1, 535.0], [58.2, 535.0], [58.3, 535.0], [58.4, 535.0], [58.5, 535.0], [58.6, 535.0], [58.7, 536.0], [58.8, 536.0], [58.9, 536.0], [59.0, 536.0], [59.1, 536.0], [59.2, 536.0], [59.3, 536.0], [59.4, 536.0], [59.5, 536.0], [59.6, 536.0], [59.7, 536.0], [59.8, 536.0], [59.9, 536.0], [60.0, 539.0], [60.1, 539.0], [60.2, 539.0], [60.3, 539.0], [60.4, 539.0], [60.5, 539.0], [60.6, 539.0], [60.7, 539.0], [60.8, 539.0], [60.9, 539.0], [61.0, 539.0], [61.1, 539.0], [61.2, 539.0], [61.3, 539.0], [61.4, 539.0], [61.5, 539.0], [61.6, 539.0], [61.7, 539.0], [61.8, 539.0], [61.9, 539.0], [62.0, 541.0], [62.1, 541.0], [62.2, 541.0], [62.3, 541.0], [62.4, 541.0], [62.5, 541.0], [62.6, 541.0], [62.7, 545.0], [62.8, 545.0], [62.9, 545.0], [63.0, 545.0], [63.1, 545.0], [63.2, 545.0], [63.3, 545.0], [63.4, 545.0], [63.5, 545.0], [63.6, 545.0], [63.7, 545.0], [63.8, 545.0], [63.9, 545.0], [64.0, 548.0], [64.1, 548.0], [64.2, 548.0], [64.3, 548.0], [64.4, 548.0], [64.5, 548.0], [64.6, 548.0], [64.7, 549.0], [64.8, 549.0], [64.9, 549.0], [65.0, 549.0], [65.1, 549.0], [65.2, 549.0], [65.3, 549.0], [65.4, 550.0], [65.5, 550.0], [65.6, 550.0], [65.7, 550.0], [65.8, 550.0], [65.9, 550.0], [66.0, 551.0], [66.1, 551.0], [66.2, 551.0], [66.3, 551.0], [66.4, 551.0], [66.5, 551.0], [66.6, 551.0], [66.7, 551.0], [66.8, 551.0], [66.9, 551.0], [67.0, 551.0], [67.1, 551.0], [67.2, 551.0], [67.3, 551.0], [67.4, 552.0], [67.5, 552.0], [67.6, 552.0], [67.7, 552.0], [67.8, 552.0], [67.9, 552.0], [68.0, 553.0], [68.1, 553.0], [68.2, 553.0], [68.3, 553.0], [68.4, 553.0], [68.5, 553.0], [68.6, 553.0], [68.7, 556.0], [68.8, 556.0], [68.9, 556.0], [69.0, 556.0], [69.1, 556.0], [69.2, 556.0], [69.3, 556.0], [69.4, 558.0], [69.5, 558.0], [69.6, 558.0], [69.7, 558.0], [69.8, 558.0], [69.9, 558.0], [70.0, 558.0], [70.1, 565.0], [70.2, 565.0], [70.3, 565.0], [70.4, 565.0], [70.5, 565.0], [70.6, 565.0], [70.7, 570.0], [70.8, 570.0], [70.9, 570.0], [71.0, 570.0], [71.1, 570.0], [71.2, 570.0], [71.3, 570.0], [71.4, 570.0], [71.5, 570.0], [71.6, 570.0], [71.7, 570.0], [71.8, 570.0], [71.9, 570.0], [72.0, 570.0], [72.1, 572.0], [72.2, 572.0], [72.3, 572.0], [72.4, 572.0], [72.5, 572.0], [72.6, 572.0], [72.7, 573.0], [72.8, 573.0], [72.9, 573.0], [73.0, 573.0], [73.1, 573.0], [73.2, 573.0], [73.3, 573.0], [73.4, 574.0], [73.5, 574.0], [73.6, 574.0], [73.7, 574.0], [73.8, 574.0], [73.9, 574.0], [74.0, 574.0], [74.1, 575.0], [74.2, 575.0], [74.3, 575.0], [74.4, 575.0], [74.5, 575.0], [74.6, 575.0], [74.7, 580.0], [74.8, 580.0], [74.9, 580.0], [75.0, 580.0], [75.1, 580.0], [75.2, 580.0], [75.3, 580.0], [75.4, 583.0], [75.5, 583.0], [75.6, 583.0], [75.7, 583.0], [75.8, 583.0], [75.9, 583.0], [76.0, 583.0], [76.1, 586.0], [76.2, 586.0], [76.3, 586.0], [76.4, 586.0], [76.5, 586.0], [76.6, 586.0], [76.7, 592.0], [76.8, 592.0], [76.9, 592.0], [77.0, 592.0], [77.1, 592.0], [77.2, 592.0], [77.3, 592.0], [77.4, 597.0], [77.5, 597.0], [77.6, 597.0], [77.7, 597.0], [77.8, 597.0], [77.9, 597.0], [78.0, 597.0], [78.1, 601.0], [78.2, 601.0], [78.3, 601.0], [78.4, 601.0], [78.5, 601.0], [78.6, 601.0], [78.7, 603.0], [78.8, 603.0], [78.9, 603.0], [79.0, 603.0], [79.1, 603.0], [79.2, 603.0], [79.3, 603.0], [79.4, 603.0], [79.5, 603.0], [79.6, 603.0], [79.7, 603.0], [79.8, 603.0], [79.9, 603.0], [80.0, 603.0], [80.1, 605.0], [80.2, 605.0], [80.3, 605.0], [80.4, 605.0], [80.5, 605.0], [80.6, 605.0], [80.7, 608.0], [80.8, 608.0], [80.9, 608.0], [81.0, 608.0], [81.1, 608.0], [81.2, 608.0], [81.3, 608.0], [81.4, 608.0], [81.5, 608.0], [81.6, 608.0], [81.7, 608.0], [81.8, 608.0], [81.9, 608.0], [82.0, 608.0], [82.1, 609.0], [82.2, 609.0], [82.3, 609.0], [82.4, 609.0], [82.5, 609.0], [82.6, 609.0], [82.7, 611.0], [82.8, 611.0], [82.9, 611.0], [83.0, 611.0], [83.1, 611.0], [83.2, 611.0], [83.3, 611.0], [83.4, 612.0], [83.5, 612.0], [83.6, 612.0], [83.7, 612.0], [83.8, 612.0], [83.9, 612.0], [84.0, 612.0], [84.1, 623.0], [84.2, 623.0], [84.3, 623.0], [84.4, 623.0], [84.5, 623.0], [84.6, 623.0], [84.7, 630.0], [84.8, 630.0], [84.9, 630.0], [85.0, 630.0], [85.1, 630.0], [85.2, 630.0], [85.3, 630.0], [85.4, 631.0], [85.5, 631.0], [85.6, 631.0], [85.7, 631.0], [85.8, 631.0], [85.9, 631.0], [86.0, 631.0], [86.1, 639.0], [86.2, 639.0], [86.3, 639.0], [86.4, 639.0], [86.5, 639.0], [86.6, 639.0], [86.7, 651.0], [86.8, 651.0], [86.9, 651.0], [87.0, 651.0], [87.1, 651.0], [87.2, 651.0], [87.3, 651.0], [87.4, 661.0], [87.5, 661.0], [87.6, 661.0], [87.7, 661.0], [87.8, 661.0], [87.9, 661.0], [88.0, 661.0], [88.1, 690.0], [88.2, 690.0], [88.3, 690.0], [88.4, 690.0], [88.5, 690.0], [88.6, 690.0], [88.7, 690.0], [88.8, 690.0], [88.9, 690.0], [89.0, 690.0], [89.1, 690.0], [89.2, 690.0], [89.3, 690.0], [89.4, 694.0], [89.5, 694.0], [89.6, 694.0], [89.7, 694.0], [89.8, 694.0], [89.9, 694.0], [90.0, 694.0], [90.1, 719.0], [90.2, 719.0], [90.3, 719.0], [90.4, 719.0], [90.5, 719.0], [90.6, 719.0], [90.7, 771.0], [90.8, 771.0], [90.9, 771.0], [91.0, 771.0], [91.1, 771.0], [91.2, 771.0], [91.3, 771.0], [91.4, 792.0], [91.5, 792.0], [91.6, 792.0], [91.7, 792.0], [91.8, 792.0], [91.9, 792.0], [92.0, 792.0], [92.1, 826.0], [92.2, 826.0], [92.3, 826.0], [92.4, 826.0], [92.5, 826.0], [92.6, 826.0], [92.7, 844.0], [92.8, 844.0], [92.9, 844.0], [93.0, 844.0], [93.1, 844.0], [93.2, 844.0], [93.3, 844.0], [93.4, 885.0], [93.5, 885.0], [93.6, 885.0], [93.7, 885.0], [93.8, 885.0], [93.9, 885.0], [94.0, 885.0], [94.1, 994.0], [94.2, 994.0], [94.3, 994.0], [94.4, 994.0], [94.5, 994.0], [94.6, 994.0], [94.7, 1008.0], [94.8, 1008.0], [94.9, 1008.0], [95.0, 1008.0], [95.1, 1008.0], [95.2, 1008.0], [95.3, 1008.0], [95.4, 1009.0], [95.5, 1009.0], [95.6, 1009.0], [95.7, 1009.0], [95.8, 1009.0], [95.9, 1009.0], [96.0, 1009.0], [96.1, 1027.0], [96.2, 1027.0], [96.3, 1027.0], [96.4, 1027.0], [96.5, 1027.0], [96.6, 1027.0], [96.7, 1067.0], [96.8, 1067.0], [96.9, 1067.0], [97.0, 1067.0], [97.1, 1067.0], [97.2, 1067.0], [97.3, 1067.0], [97.4, 1077.0], [97.5, 1077.0], [97.6, 1077.0], [97.7, 1077.0], [97.8, 1077.0], [97.9, 1077.0], [98.0, 1077.0], [98.1, 1078.0], [98.2, 1078.0], [98.3, 1078.0], [98.4, 1078.0], [98.5, 1078.0], [98.6, 1078.0], [98.7, 1194.0], [98.8, 1194.0], [98.9, 1194.0], [99.0, 1194.0], [99.1, 1194.0], [99.2, 1194.0], [99.3, 1194.0], [99.4, 1540.0], [99.5, 1540.0], [99.6, 1540.0], [99.7, 1540.0], [99.8, 1540.0], [99.9, 1540.0], [100.0, 1540.0]], "isOverall": false, "label": "createUser", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 76.0, "series": [{"data": [[1100.0, 1.0], [600.0, 18.0], [700.0, 3.0], [1500.0, 1.0], [800.0, 3.0], [400.0, 41.0], [900.0, 1.0], [1000.0, 6.0], [500.0, 76.0]], "isOverall": false, "label": "createUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 89.0, "series": [{"data": [[0.0, 23.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 89.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 37.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.90666666666667, "minX": 1.70767458E12, "maxY": 8.90666666666667, "series": [{"data": [[1.70767458E12, 8.90666666666667]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70767458E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 446.09999999999997, "minX": 1.0, "maxY": 952.0, "series": [{"data": [[8.0, 524.5999999999999], [2.0, 522.0], [9.0, 567.5178571428572], [10.0, 636.2173913043479], [11.0, 609.0], [12.0, 627.6666666666666], [3.0, 541.0], [13.0, 686.0], [14.0, 864.0], [15.0, 952.0], [16.0, 885.0], [4.0, 608.0], [1.0, 844.0], [5.0, 651.0], [6.0, 475.0], [7.0, 446.09999999999997]], "isOverall": false, "label": "createUser", "isController": false}, {"data": [[8.90666666666667, 575.4466666666668]], "isOverall": false, "label": "createUser-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 16.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1344.7166666666667, "minX": 1.70767458E12, "maxY": 2924.9666666666667, "series": [{"data": [[1.70767458E12, 2924.9666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70767458E12, 1344.7166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70767458E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 575.4466666666668, "minX": 1.70767458E12, "maxY": 575.4466666666668, "series": [{"data": [[1.70767458E12, 575.4466666666668]], "isOverall": false, "label": "createUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70767458E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 575.4466666666668, "minX": 1.70767458E12, "maxY": 575.4466666666668, "series": [{"data": [[1.70767458E12, 575.4466666666668]], "isOverall": false, "label": "createUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70767458E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 136.82666666666665, "minX": 1.70767458E12, "maxY": 136.82666666666665, "series": [{"data": [[1.70767458E12, 136.82666666666665]], "isOverall": false, "label": "createUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70767458E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 470.0, "minX": 1.70767458E12, "maxY": 1540.0, "series": [{"data": [[1.70767458E12, 1540.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70767458E12, 470.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70767458E12, 836.8000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70767458E12, 1491.56]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70767458E12, 531.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.70767458E12, 1039.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70767458E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 487.0, "minX": 5.0, "maxY": 844.0, "series": [{"data": [[17.0, 548.0], [19.0, 519.0], [5.0, 844.0], [12.0, 531.0], [7.0, 826.0], [14.0, 525.0], [15.0, 524.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[17.0, 487.0], [5.0, 574.5], [12.0, 507.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 487.0, "minX": 5.0, "maxY": 844.0, "series": [{"data": [[17.0, 548.0], [19.0, 519.0], [5.0, 844.0], [12.0, 531.0], [7.0, 826.0], [14.0, 525.0], [15.0, 524.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[17.0, 487.0], [5.0, 574.5], [12.0, 507.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 19.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.5, "minX": 1.70767458E12, "maxY": 2.5, "series": [{"data": [[1.70767458E12, 2.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70767458E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.70767458E12, "maxY": 1.8833333333333333, "series": [{"data": [[1.70767458E12, 1.8833333333333333]], "isOverall": false, "label": "201", "isController": false}, {"data": [[1.70767458E12, 0.6166666666666667]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70767458E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.70767458E12, "maxY": 1.8833333333333333, "series": [{"data": [[1.70767458E12, 1.8833333333333333]], "isOverall": false, "label": "createUser-success", "isController": false}, {"data": [[1.70767458E12, 0.6166666666666667]], "isOverall": false, "label": "createUser-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70767458E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.70767458E12, "maxY": 1.8833333333333333, "series": [{"data": [[1.70767458E12, 1.8833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.70767458E12, 0.6166666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70767458E12, "title": "Total Transactions Per Second"}},
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

