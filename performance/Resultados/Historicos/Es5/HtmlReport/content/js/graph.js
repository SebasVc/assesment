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
        data: {"result": {"minY": 473.0, "minX": 0.0, "maxY": 1133.0, "series": [{"data": [[0.0, 473.0], [0.1, 473.0], [0.2, 473.0], [0.3, 473.0], [0.4, 473.0], [0.5, 473.0], [0.6, 473.0], [0.7, 473.0], [0.8, 473.0], [0.9, 473.0], [1.0, 473.0], [1.1, 473.0], [1.2, 473.0], [1.3, 473.0], [1.4, 473.0], [1.5, 473.0], [1.6, 473.0], [1.7, 473.0], [1.8, 473.0], [1.9, 473.0], [2.0, 478.0], [2.1, 478.0], [2.2, 478.0], [2.3, 478.0], [2.4, 478.0], [2.5, 478.0], [2.6, 478.0], [2.7, 478.0], [2.8, 478.0], [2.9, 478.0], [3.0, 479.0], [3.1, 479.0], [3.2, 479.0], [3.3, 479.0], [3.4, 479.0], [3.5, 479.0], [3.6, 479.0], [3.7, 479.0], [3.8, 479.0], [3.9, 479.0], [4.0, 480.0], [4.1, 480.0], [4.2, 480.0], [4.3, 480.0], [4.4, 480.0], [4.5, 480.0], [4.6, 480.0], [4.7, 480.0], [4.8, 480.0], [4.9, 480.0], [5.0, 480.0], [5.1, 480.0], [5.2, 480.0], [5.3, 480.0], [5.4, 480.0], [5.5, 480.0], [5.6, 480.0], [5.7, 480.0], [5.8, 480.0], [5.9, 480.0], [6.0, 481.0], [6.1, 481.0], [6.2, 481.0], [6.3, 481.0], [6.4, 481.0], [6.5, 481.0], [6.6, 481.0], [6.7, 481.0], [6.8, 481.0], [6.9, 481.0], [7.0, 482.0], [7.1, 482.0], [7.2, 482.0], [7.3, 482.0], [7.4, 482.0], [7.5, 482.0], [7.6, 482.0], [7.7, 482.0], [7.8, 482.0], [7.9, 482.0], [8.0, 486.0], [8.1, 486.0], [8.2, 486.0], [8.3, 486.0], [8.4, 486.0], [8.5, 486.0], [8.6, 486.0], [8.7, 486.0], [8.8, 486.0], [8.9, 486.0], [9.0, 486.0], [9.1, 486.0], [9.2, 486.0], [9.3, 486.0], [9.4, 486.0], [9.5, 486.0], [9.6, 486.0], [9.7, 486.0], [9.8, 486.0], [9.9, 486.0], [10.0, 488.0], [10.1, 488.0], [10.2, 488.0], [10.3, 488.0], [10.4, 488.0], [10.5, 488.0], [10.6, 488.0], [10.7, 488.0], [10.8, 488.0], [10.9, 488.0], [11.0, 488.0], [11.1, 488.0], [11.2, 488.0], [11.3, 488.0], [11.4, 488.0], [11.5, 488.0], [11.6, 488.0], [11.7, 488.0], [11.8, 488.0], [11.9, 488.0], [12.0, 489.0], [12.1, 489.0], [12.2, 489.0], [12.3, 489.0], [12.4, 489.0], [12.5, 489.0], [12.6, 489.0], [12.7, 489.0], [12.8, 489.0], [12.9, 489.0], [13.0, 491.0], [13.1, 491.0], [13.2, 491.0], [13.3, 491.0], [13.4, 491.0], [13.5, 491.0], [13.6, 491.0], [13.7, 491.0], [13.8, 491.0], [13.9, 491.0], [14.0, 491.0], [14.1, 491.0], [14.2, 491.0], [14.3, 491.0], [14.4, 491.0], [14.5, 491.0], [14.6, 491.0], [14.7, 491.0], [14.8, 491.0], [14.9, 491.0], [15.0, 492.0], [15.1, 492.0], [15.2, 492.0], [15.3, 492.0], [15.4, 492.0], [15.5, 492.0], [15.6, 492.0], [15.7, 492.0], [15.8, 492.0], [15.9, 492.0], [16.0, 492.0], [16.1, 492.0], [16.2, 492.0], [16.3, 492.0], [16.4, 492.0], [16.5, 492.0], [16.6, 492.0], [16.7, 492.0], [16.8, 492.0], [16.9, 492.0], [17.0, 493.0], [17.1, 493.0], [17.2, 493.0], [17.3, 493.0], [17.4, 493.0], [17.5, 493.0], [17.6, 493.0], [17.7, 493.0], [17.8, 493.0], [17.9, 493.0], [18.0, 493.0], [18.1, 493.0], [18.2, 493.0], [18.3, 493.0], [18.4, 493.0], [18.5, 493.0], [18.6, 493.0], [18.7, 493.0], [18.8, 493.0], [18.9, 493.0], [19.0, 494.0], [19.1, 494.0], [19.2, 494.0], [19.3, 494.0], [19.4, 494.0], [19.5, 494.0], [19.6, 494.0], [19.7, 494.0], [19.8, 494.0], [19.9, 494.0], [20.0, 494.0], [20.1, 494.0], [20.2, 494.0], [20.3, 494.0], [20.4, 494.0], [20.5, 494.0], [20.6, 494.0], [20.7, 494.0], [20.8, 494.0], [20.9, 494.0], [21.0, 495.0], [21.1, 495.0], [21.2, 495.0], [21.3, 495.0], [21.4, 495.0], [21.5, 495.0], [21.6, 495.0], [21.7, 495.0], [21.8, 495.0], [21.9, 495.0], [22.0, 496.0], [22.1, 496.0], [22.2, 496.0], [22.3, 496.0], [22.4, 496.0], [22.5, 496.0], [22.6, 496.0], [22.7, 496.0], [22.8, 496.0], [22.9, 496.0], [23.0, 500.0], [23.1, 500.0], [23.2, 500.0], [23.3, 500.0], [23.4, 500.0], [23.5, 500.0], [23.6, 500.0], [23.7, 500.0], [23.8, 500.0], [23.9, 500.0], [24.0, 503.0], [24.1, 503.0], [24.2, 503.0], [24.3, 503.0], [24.4, 503.0], [24.5, 503.0], [24.6, 503.0], [24.7, 503.0], [24.8, 503.0], [24.9, 503.0], [25.0, 503.0], [25.1, 503.0], [25.2, 503.0], [25.3, 503.0], [25.4, 503.0], [25.5, 503.0], [25.6, 503.0], [25.7, 503.0], [25.8, 503.0], [25.9, 503.0], [26.0, 503.0], [26.1, 503.0], [26.2, 503.0], [26.3, 503.0], [26.4, 503.0], [26.5, 503.0], [26.6, 503.0], [26.7, 503.0], [26.8, 503.0], [26.9, 503.0], [27.0, 505.0], [27.1, 505.0], [27.2, 505.0], [27.3, 505.0], [27.4, 505.0], [27.5, 505.0], [27.6, 505.0], [27.7, 505.0], [27.8, 505.0], [27.9, 505.0], [28.0, 506.0], [28.1, 506.0], [28.2, 506.0], [28.3, 506.0], [28.4, 506.0], [28.5, 506.0], [28.6, 506.0], [28.7, 506.0], [28.8, 506.0], [28.9, 506.0], [29.0, 507.0], [29.1, 507.0], [29.2, 507.0], [29.3, 507.0], [29.4, 507.0], [29.5, 507.0], [29.6, 507.0], [29.7, 507.0], [29.8, 507.0], [29.9, 507.0], [30.0, 508.0], [30.1, 508.0], [30.2, 508.0], [30.3, 508.0], [30.4, 508.0], [30.5, 508.0], [30.6, 508.0], [30.7, 508.0], [30.8, 508.0], [30.9, 508.0], [31.0, 511.0], [31.1, 511.0], [31.2, 511.0], [31.3, 511.0], [31.4, 511.0], [31.5, 511.0], [31.6, 511.0], [31.7, 511.0], [31.8, 511.0], [31.9, 511.0], [32.0, 511.0], [32.1, 511.0], [32.2, 511.0], [32.3, 511.0], [32.4, 511.0], [32.5, 511.0], [32.6, 511.0], [32.7, 511.0], [32.8, 511.0], [32.9, 511.0], [33.0, 512.0], [33.1, 512.0], [33.2, 512.0], [33.3, 512.0], [33.4, 512.0], [33.5, 512.0], [33.6, 512.0], [33.7, 512.0], [33.8, 512.0], [33.9, 512.0], [34.0, 513.0], [34.1, 513.0], [34.2, 513.0], [34.3, 513.0], [34.4, 513.0], [34.5, 513.0], [34.6, 513.0], [34.7, 513.0], [34.8, 513.0], [34.9, 513.0], [35.0, 514.0], [35.1, 514.0], [35.2, 514.0], [35.3, 514.0], [35.4, 514.0], [35.5, 514.0], [35.6, 514.0], [35.7, 514.0], [35.8, 514.0], [35.9, 514.0], [36.0, 515.0], [36.1, 515.0], [36.2, 515.0], [36.3, 515.0], [36.4, 515.0], [36.5, 515.0], [36.6, 515.0], [36.7, 515.0], [36.8, 515.0], [36.9, 515.0], [37.0, 516.0], [37.1, 516.0], [37.2, 516.0], [37.3, 516.0], [37.4, 516.0], [37.5, 516.0], [37.6, 516.0], [37.7, 516.0], [37.8, 516.0], [37.9, 516.0], [38.0, 516.0], [38.1, 516.0], [38.2, 516.0], [38.3, 516.0], [38.4, 516.0], [38.5, 516.0], [38.6, 516.0], [38.7, 516.0], [38.8, 516.0], [38.9, 516.0], [39.0, 516.0], [39.1, 516.0], [39.2, 516.0], [39.3, 516.0], [39.4, 516.0], [39.5, 516.0], [39.6, 516.0], [39.7, 516.0], [39.8, 516.0], [39.9, 516.0], [40.0, 517.0], [40.1, 517.0], [40.2, 517.0], [40.3, 517.0], [40.4, 517.0], [40.5, 517.0], [40.6, 517.0], [40.7, 517.0], [40.8, 517.0], [40.9, 517.0], [41.0, 518.0], [41.1, 518.0], [41.2, 518.0], [41.3, 518.0], [41.4, 518.0], [41.5, 518.0], [41.6, 518.0], [41.7, 518.0], [41.8, 518.0], [41.9, 518.0], [42.0, 520.0], [42.1, 520.0], [42.2, 520.0], [42.3, 520.0], [42.4, 520.0], [42.5, 520.0], [42.6, 520.0], [42.7, 520.0], [42.8, 520.0], [42.9, 520.0], [43.0, 521.0], [43.1, 521.0], [43.2, 521.0], [43.3, 521.0], [43.4, 521.0], [43.5, 521.0], [43.6, 521.0], [43.7, 521.0], [43.8, 521.0], [43.9, 521.0], [44.0, 522.0], [44.1, 522.0], [44.2, 522.0], [44.3, 522.0], [44.4, 522.0], [44.5, 522.0], [44.6, 522.0], [44.7, 522.0], [44.8, 522.0], [44.9, 522.0], [45.0, 524.0], [45.1, 524.0], [45.2, 524.0], [45.3, 524.0], [45.4, 524.0], [45.5, 524.0], [45.6, 524.0], [45.7, 524.0], [45.8, 524.0], [45.9, 524.0], [46.0, 526.0], [46.1, 526.0], [46.2, 526.0], [46.3, 526.0], [46.4, 526.0], [46.5, 526.0], [46.6, 526.0], [46.7, 526.0], [46.8, 526.0], [46.9, 526.0], [47.0, 528.0], [47.1, 528.0], [47.2, 528.0], [47.3, 528.0], [47.4, 528.0], [47.5, 528.0], [47.6, 528.0], [47.7, 528.0], [47.8, 528.0], [47.9, 528.0], [48.0, 529.0], [48.1, 529.0], [48.2, 529.0], [48.3, 529.0], [48.4, 529.0], [48.5, 529.0], [48.6, 529.0], [48.7, 529.0], [48.8, 529.0], [48.9, 529.0], [49.0, 531.0], [49.1, 531.0], [49.2, 531.0], [49.3, 531.0], [49.4, 531.0], [49.5, 531.0], [49.6, 531.0], [49.7, 531.0], [49.8, 531.0], [49.9, 531.0], [50.0, 531.0], [50.1, 531.0], [50.2, 531.0], [50.3, 531.0], [50.4, 531.0], [50.5, 531.0], [50.6, 531.0], [50.7, 531.0], [50.8, 531.0], [50.9, 531.0], [51.0, 536.0], [51.1, 536.0], [51.2, 536.0], [51.3, 536.0], [51.4, 536.0], [51.5, 536.0], [51.6, 536.0], [51.7, 536.0], [51.8, 536.0], [51.9, 536.0], [52.0, 536.0], [52.1, 536.0], [52.2, 536.0], [52.3, 536.0], [52.4, 536.0], [52.5, 536.0], [52.6, 536.0], [52.7, 536.0], [52.8, 536.0], [52.9, 536.0], [53.0, 541.0], [53.1, 541.0], [53.2, 541.0], [53.3, 541.0], [53.4, 541.0], [53.5, 541.0], [53.6, 541.0], [53.7, 541.0], [53.8, 541.0], [53.9, 541.0], [54.0, 541.0], [54.1, 541.0], [54.2, 541.0], [54.3, 541.0], [54.4, 541.0], [54.5, 541.0], [54.6, 541.0], [54.7, 541.0], [54.8, 541.0], [54.9, 541.0], [55.0, 542.0], [55.1, 542.0], [55.2, 542.0], [55.3, 542.0], [55.4, 542.0], [55.5, 542.0], [55.6, 542.0], [55.7, 542.0], [55.8, 542.0], [55.9, 542.0], [56.0, 543.0], [56.1, 543.0], [56.2, 543.0], [56.3, 543.0], [56.4, 543.0], [56.5, 543.0], [56.6, 543.0], [56.7, 543.0], [56.8, 543.0], [56.9, 543.0], [57.0, 543.0], [57.1, 543.0], [57.2, 543.0], [57.3, 543.0], [57.4, 543.0], [57.5, 543.0], [57.6, 543.0], [57.7, 543.0], [57.8, 543.0], [57.9, 543.0], [58.0, 544.0], [58.1, 544.0], [58.2, 544.0], [58.3, 544.0], [58.4, 544.0], [58.5, 544.0], [58.6, 544.0], [58.7, 544.0], [58.8, 544.0], [58.9, 544.0], [59.0, 547.0], [59.1, 547.0], [59.2, 547.0], [59.3, 547.0], [59.4, 547.0], [59.5, 547.0], [59.6, 547.0], [59.7, 547.0], [59.8, 547.0], [59.9, 547.0], [60.0, 550.0], [60.1, 550.0], [60.2, 550.0], [60.3, 550.0], [60.4, 550.0], [60.5, 550.0], [60.6, 550.0], [60.7, 550.0], [60.8, 550.0], [60.9, 550.0], [61.0, 552.0], [61.1, 552.0], [61.2, 552.0], [61.3, 552.0], [61.4, 552.0], [61.5, 552.0], [61.6, 552.0], [61.7, 552.0], [61.8, 552.0], [61.9, 552.0], [62.0, 552.0], [62.1, 552.0], [62.2, 552.0], [62.3, 552.0], [62.4, 552.0], [62.5, 552.0], [62.6, 552.0], [62.7, 552.0], [62.8, 552.0], [62.9, 552.0], [63.0, 553.0], [63.1, 553.0], [63.2, 553.0], [63.3, 553.0], [63.4, 553.0], [63.5, 553.0], [63.6, 553.0], [63.7, 553.0], [63.8, 553.0], [63.9, 553.0], [64.0, 555.0], [64.1, 555.0], [64.2, 555.0], [64.3, 555.0], [64.4, 555.0], [64.5, 555.0], [64.6, 555.0], [64.7, 555.0], [64.8, 555.0], [64.9, 555.0], [65.0, 557.0], [65.1, 557.0], [65.2, 557.0], [65.3, 557.0], [65.4, 557.0], [65.5, 557.0], [65.6, 557.0], [65.7, 557.0], [65.8, 557.0], [65.9, 557.0], [66.0, 557.0], [66.1, 557.0], [66.2, 557.0], [66.3, 557.0], [66.4, 557.0], [66.5, 557.0], [66.6, 557.0], [66.7, 557.0], [66.8, 557.0], [66.9, 557.0], [67.0, 559.0], [67.1, 559.0], [67.2, 559.0], [67.3, 559.0], [67.4, 559.0], [67.5, 559.0], [67.6, 559.0], [67.7, 559.0], [67.8, 559.0], [67.9, 559.0], [68.0, 560.0], [68.1, 560.0], [68.2, 560.0], [68.3, 560.0], [68.4, 560.0], [68.5, 560.0], [68.6, 560.0], [68.7, 560.0], [68.8, 560.0], [68.9, 560.0], [69.0, 561.0], [69.1, 561.0], [69.2, 561.0], [69.3, 561.0], [69.4, 561.0], [69.5, 561.0], [69.6, 561.0], [69.7, 561.0], [69.8, 561.0], [69.9, 561.0], [70.0, 567.0], [70.1, 567.0], [70.2, 567.0], [70.3, 567.0], [70.4, 567.0], [70.5, 567.0], [70.6, 567.0], [70.7, 567.0], [70.8, 567.0], [70.9, 567.0], [71.0, 568.0], [71.1, 568.0], [71.2, 568.0], [71.3, 568.0], [71.4, 568.0], [71.5, 568.0], [71.6, 568.0], [71.7, 568.0], [71.8, 568.0], [71.9, 568.0], [72.0, 570.0], [72.1, 570.0], [72.2, 570.0], [72.3, 570.0], [72.4, 570.0], [72.5, 570.0], [72.6, 570.0], [72.7, 570.0], [72.8, 570.0], [72.9, 570.0], [73.0, 575.0], [73.1, 575.0], [73.2, 575.0], [73.3, 575.0], [73.4, 575.0], [73.5, 575.0], [73.6, 575.0], [73.7, 575.0], [73.8, 575.0], [73.9, 575.0], [74.0, 580.0], [74.1, 580.0], [74.2, 580.0], [74.3, 580.0], [74.4, 580.0], [74.5, 580.0], [74.6, 580.0], [74.7, 580.0], [74.8, 580.0], [74.9, 580.0], [75.0, 581.0], [75.1, 581.0], [75.2, 581.0], [75.3, 581.0], [75.4, 581.0], [75.5, 581.0], [75.6, 581.0], [75.7, 581.0], [75.8, 581.0], [75.9, 581.0], [76.0, 589.0], [76.1, 589.0], [76.2, 589.0], [76.3, 589.0], [76.4, 589.0], [76.5, 589.0], [76.6, 589.0], [76.7, 589.0], [76.8, 589.0], [76.9, 589.0], [77.0, 589.0], [77.1, 589.0], [77.2, 589.0], [77.3, 589.0], [77.4, 589.0], [77.5, 589.0], [77.6, 589.0], [77.7, 589.0], [77.8, 589.0], [77.9, 589.0], [78.0, 594.0], [78.1, 594.0], [78.2, 594.0], [78.3, 594.0], [78.4, 594.0], [78.5, 594.0], [78.6, 594.0], [78.7, 594.0], [78.8, 594.0], [78.9, 594.0], [79.0, 596.0], [79.1, 596.0], [79.2, 596.0], [79.3, 596.0], [79.4, 596.0], [79.5, 596.0], [79.6, 596.0], [79.7, 596.0], [79.8, 596.0], [79.9, 596.0], [80.0, 597.0], [80.1, 597.0], [80.2, 597.0], [80.3, 597.0], [80.4, 597.0], [80.5, 597.0], [80.6, 597.0], [80.7, 597.0], [80.8, 597.0], [80.9, 597.0], [81.0, 603.0], [81.1, 603.0], [81.2, 603.0], [81.3, 603.0], [81.4, 603.0], [81.5, 603.0], [81.6, 603.0], [81.7, 603.0], [81.8, 603.0], [81.9, 603.0], [82.0, 603.0], [82.1, 603.0], [82.2, 603.0], [82.3, 603.0], [82.4, 603.0], [82.5, 603.0], [82.6, 603.0], [82.7, 603.0], [82.8, 603.0], [82.9, 603.0], [83.0, 608.0], [83.1, 608.0], [83.2, 608.0], [83.3, 608.0], [83.4, 608.0], [83.5, 608.0], [83.6, 608.0], [83.7, 608.0], [83.8, 608.0], [83.9, 608.0], [84.0, 611.0], [84.1, 611.0], [84.2, 611.0], [84.3, 611.0], [84.4, 611.0], [84.5, 611.0], [84.6, 611.0], [84.7, 611.0], [84.8, 611.0], [84.9, 611.0], [85.0, 626.0], [85.1, 626.0], [85.2, 626.0], [85.3, 626.0], [85.4, 626.0], [85.5, 626.0], [85.6, 626.0], [85.7, 626.0], [85.8, 626.0], [85.9, 626.0], [86.0, 644.0], [86.1, 644.0], [86.2, 644.0], [86.3, 644.0], [86.4, 644.0], [86.5, 644.0], [86.6, 644.0], [86.7, 644.0], [86.8, 644.0], [86.9, 644.0], [87.0, 649.0], [87.1, 649.0], [87.2, 649.0], [87.3, 649.0], [87.4, 649.0], [87.5, 649.0], [87.6, 649.0], [87.7, 649.0], [87.8, 649.0], [87.9, 649.0], [88.0, 703.0], [88.1, 703.0], [88.2, 703.0], [88.3, 703.0], [88.4, 703.0], [88.5, 703.0], [88.6, 703.0], [88.7, 703.0], [88.8, 703.0], [88.9, 703.0], [89.0, 718.0], [89.1, 718.0], [89.2, 718.0], [89.3, 718.0], [89.4, 718.0], [89.5, 718.0], [89.6, 718.0], [89.7, 718.0], [89.8, 718.0], [89.9, 718.0], [90.0, 980.0], [90.1, 980.0], [90.2, 980.0], [90.3, 980.0], [90.4, 980.0], [90.5, 980.0], [90.6, 980.0], [90.7, 980.0], [90.8, 980.0], [90.9, 980.0], [91.0, 1002.0], [91.1, 1002.0], [91.2, 1002.0], [91.3, 1002.0], [91.4, 1002.0], [91.5, 1002.0], [91.6, 1002.0], [91.7, 1002.0], [91.8, 1002.0], [91.9, 1002.0], [92.0, 1034.0], [92.1, 1034.0], [92.2, 1034.0], [92.3, 1034.0], [92.4, 1034.0], [92.5, 1034.0], [92.6, 1034.0], [92.7, 1034.0], [92.8, 1034.0], [92.9, 1034.0], [93.0, 1041.0], [93.1, 1041.0], [93.2, 1041.0], [93.3, 1041.0], [93.4, 1041.0], [93.5, 1041.0], [93.6, 1041.0], [93.7, 1041.0], [93.8, 1041.0], [93.9, 1041.0], [94.0, 1051.0], [94.1, 1051.0], [94.2, 1051.0], [94.3, 1051.0], [94.4, 1051.0], [94.5, 1051.0], [94.6, 1051.0], [94.7, 1051.0], [94.8, 1051.0], [94.9, 1051.0], [95.0, 1062.0], [95.1, 1062.0], [95.2, 1062.0], [95.3, 1062.0], [95.4, 1062.0], [95.5, 1062.0], [95.6, 1062.0], [95.7, 1062.0], [95.8, 1062.0], [95.9, 1062.0], [96.0, 1086.0], [96.1, 1086.0], [96.2, 1086.0], [96.3, 1086.0], [96.4, 1086.0], [96.5, 1086.0], [96.6, 1086.0], [96.7, 1086.0], [96.8, 1086.0], [96.9, 1086.0], [97.0, 1098.0], [97.1, 1098.0], [97.2, 1098.0], [97.3, 1098.0], [97.4, 1098.0], [97.5, 1098.0], [97.6, 1098.0], [97.7, 1098.0], [97.8, 1098.0], [97.9, 1098.0], [98.0, 1113.0], [98.1, 1113.0], [98.2, 1113.0], [98.3, 1113.0], [98.4, 1113.0], [98.5, 1113.0], [98.6, 1113.0], [98.7, 1113.0], [98.8, 1113.0], [98.9, 1113.0], [99.0, 1133.0], [99.1, 1133.0], [99.2, 1133.0], [99.3, 1133.0], [99.4, 1133.0], [99.5, 1133.0], [99.6, 1133.0], [99.7, 1133.0], [99.8, 1133.0], [99.9, 1133.0]], "isOverall": false, "label": "createUser", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 58.0, "series": [{"data": [[1100.0, 2.0], [600.0, 7.0], [700.0, 2.0], [400.0, 23.0], [900.0, 1.0], [500.0, 58.0], [1000.0, 7.0]], "isOverall": false, "label": "createUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 24.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 76.0, "series": [{"data": [[0.0, 24.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 76.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 6.310000000000002, "minX": 1.70767434E12, "maxY": 6.310000000000002, "series": [{"data": [[1.70767434E12, 6.310000000000002]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70767434E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 473.0, "minX": 1.0, "maxY": 728.8181818181818, "series": [{"data": [[8.0, 728.8181818181818], [4.0, 516.0], [2.0, 495.0], [1.0, 473.0], [9.0, 580.5], [5.0, 485.5333333333334], [6.0, 578.4250000000001], [3.0, 496.0], [7.0, 618.5]], "isOverall": false, "label": "createUser", "isController": false}, {"data": [[6.310000000000002, 588.2000000000003]], "isOverall": false, "label": "createUser-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 9.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 896.6833333333333, "minX": 1.70767434E12, "maxY": 2037.8333333333333, "series": [{"data": [[1.70767434E12, 2037.8333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70767434E12, 896.6833333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70767434E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 588.2000000000003, "minX": 1.70767434E12, "maxY": 588.2000000000003, "series": [{"data": [[1.70767434E12, 588.2000000000003]], "isOverall": false, "label": "createUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70767434E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 588.1299999999998, "minX": 1.70767434E12, "maxY": 588.1299999999998, "series": [{"data": [[1.70767434E12, 588.1299999999998]], "isOverall": false, "label": "createUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70767434E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 117.97000000000001, "minX": 1.70767434E12, "maxY": 117.97000000000001, "series": [{"data": [[1.70767434E12, 117.97000000000001]], "isOverall": false, "label": "createUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70767434E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 473.0, "minX": 1.70767434E12, "maxY": 1133.0, "series": [{"data": [[1.70767434E12, 1133.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70767434E12, 473.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70767434E12, 953.8000000000015]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70767434E12, 1132.8]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70767434E12, 531.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.70767434E12, 1061.4499999999998]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70767434E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 484.0, "minX": 2.0, "maxY": 550.0, "series": [{"data": [[8.0, 516.0], [2.0, 484.0], [9.0, 550.0], [10.0, 541.5], [11.0, 524.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 484.0, "minX": 2.0, "maxY": 550.0, "series": [{"data": [[8.0, 516.0], [2.0, 484.0], [9.0, 550.0], [10.0, 541.5], [11.0, 524.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.70767434E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.70767434E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70767434E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.70767434E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.70767434E12, 1.6666666666666667]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70767434E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.70767434E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.70767434E12, 1.6666666666666667]], "isOverall": false, "label": "createUser-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70767434E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.70767434E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.70767434E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70767434E12, "title": "Total Transactions Per Second"}},
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

