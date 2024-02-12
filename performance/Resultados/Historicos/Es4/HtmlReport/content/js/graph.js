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
        data: {"result": {"minY": 488.0, "minX": 0.0, "maxY": 1384.0, "series": [{"data": [[0.0, 488.0], [0.1, 488.0], [0.2, 488.0], [0.3, 488.0], [0.4, 488.0], [0.5, 488.0], [0.6, 488.0], [0.7, 488.0], [0.8, 488.0], [0.9, 488.0], [1.0, 488.0], [1.1, 488.0], [1.2, 490.0], [1.3, 490.0], [1.4, 490.0], [1.5, 490.0], [1.6, 490.0], [1.7, 490.0], [1.8, 490.0], [1.9, 490.0], [2.0, 490.0], [2.1, 490.0], [2.2, 490.0], [2.3, 495.0], [2.4, 495.0], [2.5, 495.0], [2.6, 495.0], [2.7, 495.0], [2.8, 495.0], [2.9, 495.0], [3.0, 495.0], [3.1, 495.0], [3.2, 495.0], [3.3, 495.0], [3.4, 497.0], [3.5, 497.0], [3.6, 497.0], [3.7, 497.0], [3.8, 497.0], [3.9, 497.0], [4.0, 497.0], [4.1, 497.0], [4.2, 497.0], [4.3, 497.0], [4.4, 497.0], [4.5, 499.0], [4.6, 499.0], [4.7, 499.0], [4.8, 499.0], [4.9, 499.0], [5.0, 499.0], [5.1, 499.0], [5.2, 499.0], [5.3, 499.0], [5.4, 499.0], [5.5, 499.0], [5.6, 504.0], [5.7, 504.0], [5.8, 504.0], [5.9, 504.0], [6.0, 504.0], [6.1, 504.0], [6.2, 504.0], [6.3, 504.0], [6.4, 504.0], [6.5, 504.0], [6.6, 504.0], [6.7, 506.0], [6.8, 506.0], [6.9, 506.0], [7.0, 506.0], [7.1, 506.0], [7.2, 506.0], [7.3, 506.0], [7.4, 506.0], [7.5, 506.0], [7.6, 506.0], [7.7, 506.0], [7.8, 509.0], [7.9, 509.0], [8.0, 509.0], [8.1, 509.0], [8.2, 509.0], [8.3, 509.0], [8.4, 509.0], [8.5, 509.0], [8.6, 509.0], [8.7, 509.0], [8.8, 509.0], [8.9, 513.0], [9.0, 513.0], [9.1, 513.0], [9.2, 513.0], [9.3, 513.0], [9.4, 513.0], [9.5, 513.0], [9.6, 513.0], [9.7, 513.0], [9.8, 513.0], [9.9, 513.0], [10.0, 514.0], [10.1, 514.0], [10.2, 514.0], [10.3, 514.0], [10.4, 514.0], [10.5, 514.0], [10.6, 514.0], [10.7, 514.0], [10.8, 514.0], [10.9, 514.0], [11.0, 514.0], [11.1, 514.0], [11.2, 514.0], [11.3, 514.0], [11.4, 514.0], [11.5, 514.0], [11.6, 514.0], [11.7, 514.0], [11.8, 514.0], [11.9, 514.0], [12.0, 514.0], [12.1, 514.0], [12.2, 514.0], [12.3, 515.0], [12.4, 515.0], [12.5, 515.0], [12.6, 515.0], [12.7, 515.0], [12.8, 515.0], [12.9, 515.0], [13.0, 515.0], [13.1, 515.0], [13.2, 515.0], [13.3, 515.0], [13.4, 516.0], [13.5, 516.0], [13.6, 516.0], [13.7, 516.0], [13.8, 516.0], [13.9, 516.0], [14.0, 516.0], [14.1, 516.0], [14.2, 516.0], [14.3, 516.0], [14.4, 516.0], [14.5, 516.0], [14.6, 516.0], [14.7, 516.0], [14.8, 516.0], [14.9, 516.0], [15.0, 516.0], [15.1, 516.0], [15.2, 516.0], [15.3, 516.0], [15.4, 516.0], [15.5, 516.0], [15.6, 521.0], [15.7, 521.0], [15.8, 521.0], [15.9, 521.0], [16.0, 521.0], [16.1, 521.0], [16.2, 521.0], [16.3, 521.0], [16.4, 521.0], [16.5, 521.0], [16.6, 521.0], [16.7, 523.0], [16.8, 523.0], [16.9, 523.0], [17.0, 523.0], [17.1, 523.0], [17.2, 523.0], [17.3, 523.0], [17.4, 523.0], [17.5, 523.0], [17.6, 523.0], [17.7, 523.0], [17.8, 523.0], [17.9, 523.0], [18.0, 523.0], [18.1, 523.0], [18.2, 523.0], [18.3, 523.0], [18.4, 523.0], [18.5, 523.0], [18.6, 523.0], [18.7, 523.0], [18.8, 523.0], [18.9, 527.0], [19.0, 527.0], [19.1, 527.0], [19.2, 527.0], [19.3, 527.0], [19.4, 527.0], [19.5, 527.0], [19.6, 527.0], [19.7, 527.0], [19.8, 527.0], [19.9, 527.0], [20.0, 527.0], [20.1, 527.0], [20.2, 527.0], [20.3, 527.0], [20.4, 527.0], [20.5, 527.0], [20.6, 527.0], [20.7, 527.0], [20.8, 527.0], [20.9, 527.0], [21.0, 527.0], [21.1, 527.0], [21.2, 540.0], [21.3, 540.0], [21.4, 540.0], [21.5, 540.0], [21.6, 540.0], [21.7, 540.0], [21.8, 540.0], [21.9, 540.0], [22.0, 540.0], [22.1, 540.0], [22.2, 540.0], [22.3, 541.0], [22.4, 541.0], [22.5, 541.0], [22.6, 541.0], [22.7, 541.0], [22.8, 541.0], [22.9, 541.0], [23.0, 541.0], [23.1, 541.0], [23.2, 541.0], [23.3, 541.0], [23.4, 548.0], [23.5, 548.0], [23.6, 548.0], [23.7, 548.0], [23.8, 548.0], [23.9, 548.0], [24.0, 548.0], [24.1, 548.0], [24.2, 548.0], [24.3, 548.0], [24.4, 548.0], [24.5, 553.0], [24.6, 553.0], [24.7, 553.0], [24.8, 553.0], [24.9, 553.0], [25.0, 553.0], [25.1, 553.0], [25.2, 553.0], [25.3, 553.0], [25.4, 553.0], [25.5, 553.0], [25.6, 562.0], [25.7, 562.0], [25.8, 562.0], [25.9, 562.0], [26.0, 562.0], [26.1, 562.0], [26.2, 562.0], [26.3, 562.0], [26.4, 562.0], [26.5, 562.0], [26.6, 562.0], [26.7, 568.0], [26.8, 568.0], [26.9, 568.0], [27.0, 568.0], [27.1, 568.0], [27.2, 568.0], [27.3, 568.0], [27.4, 568.0], [27.5, 568.0], [27.6, 568.0], [27.7, 568.0], [27.8, 569.0], [27.9, 569.0], [28.0, 569.0], [28.1, 569.0], [28.2, 569.0], [28.3, 569.0], [28.4, 569.0], [28.5, 569.0], [28.6, 569.0], [28.7, 569.0], [28.8, 569.0], [28.9, 569.0], [29.0, 569.0], [29.1, 569.0], [29.2, 569.0], [29.3, 569.0], [29.4, 569.0], [29.5, 569.0], [29.6, 569.0], [29.7, 569.0], [29.8, 569.0], [29.9, 569.0], [30.0, 569.0], [30.1, 569.0], [30.2, 569.0], [30.3, 569.0], [30.4, 569.0], [30.5, 569.0], [30.6, 569.0], [30.7, 569.0], [30.8, 569.0], [30.9, 569.0], [31.0, 569.0], [31.1, 569.0], [31.2, 570.0], [31.3, 570.0], [31.4, 570.0], [31.5, 570.0], [31.6, 570.0], [31.7, 570.0], [31.8, 570.0], [31.9, 570.0], [32.0, 570.0], [32.1, 570.0], [32.2, 570.0], [32.3, 572.0], [32.4, 572.0], [32.5, 572.0], [32.6, 572.0], [32.7, 572.0], [32.8, 572.0], [32.9, 572.0], [33.0, 572.0], [33.1, 572.0], [33.2, 572.0], [33.3, 572.0], [33.4, 576.0], [33.5, 576.0], [33.6, 576.0], [33.7, 576.0], [33.8, 576.0], [33.9, 576.0], [34.0, 576.0], [34.1, 576.0], [34.2, 576.0], [34.3, 576.0], [34.4, 576.0], [34.5, 582.0], [34.6, 582.0], [34.7, 582.0], [34.8, 582.0], [34.9, 582.0], [35.0, 582.0], [35.1, 582.0], [35.2, 582.0], [35.3, 582.0], [35.4, 582.0], [35.5, 582.0], [35.6, 583.0], [35.7, 583.0], [35.8, 583.0], [35.9, 583.0], [36.0, 583.0], [36.1, 583.0], [36.2, 583.0], [36.3, 583.0], [36.4, 583.0], [36.5, 583.0], [36.6, 583.0], [36.7, 584.0], [36.8, 584.0], [36.9, 584.0], [37.0, 584.0], [37.1, 584.0], [37.2, 584.0], [37.3, 584.0], [37.4, 584.0], [37.5, 584.0], [37.6, 584.0], [37.7, 584.0], [37.8, 586.0], [37.9, 586.0], [38.0, 586.0], [38.1, 586.0], [38.2, 586.0], [38.3, 586.0], [38.4, 586.0], [38.5, 586.0], [38.6, 586.0], [38.7, 586.0], [38.8, 586.0], [38.9, 593.0], [39.0, 593.0], [39.1, 593.0], [39.2, 593.0], [39.3, 593.0], [39.4, 593.0], [39.5, 593.0], [39.6, 593.0], [39.7, 593.0], [39.8, 593.0], [39.9, 593.0], [40.0, 593.0], [40.1, 596.0], [40.2, 596.0], [40.3, 596.0], [40.4, 596.0], [40.5, 596.0], [40.6, 596.0], [40.7, 596.0], [40.8, 596.0], [40.9, 596.0], [41.0, 596.0], [41.1, 596.0], [41.2, 600.0], [41.3, 600.0], [41.4, 600.0], [41.5, 600.0], [41.6, 600.0], [41.7, 600.0], [41.8, 600.0], [41.9, 600.0], [42.0, 600.0], [42.1, 600.0], [42.2, 600.0], [42.3, 605.0], [42.4, 605.0], [42.5, 605.0], [42.6, 605.0], [42.7, 605.0], [42.8, 605.0], [42.9, 605.0], [43.0, 605.0], [43.1, 605.0], [43.2, 605.0], [43.3, 605.0], [43.4, 607.0], [43.5, 607.0], [43.6, 607.0], [43.7, 607.0], [43.8, 607.0], [43.9, 607.0], [44.0, 607.0], [44.1, 607.0], [44.2, 607.0], [44.3, 607.0], [44.4, 607.0], [44.5, 609.0], [44.6, 609.0], [44.7, 609.0], [44.8, 609.0], [44.9, 609.0], [45.0, 609.0], [45.1, 609.0], [45.2, 609.0], [45.3, 609.0], [45.4, 609.0], [45.5, 609.0], [45.6, 624.0], [45.7, 624.0], [45.8, 624.0], [45.9, 624.0], [46.0, 624.0], [46.1, 624.0], [46.2, 624.0], [46.3, 624.0], [46.4, 624.0], [46.5, 624.0], [46.6, 624.0], [46.7, 655.0], [46.8, 655.0], [46.9, 655.0], [47.0, 655.0], [47.1, 655.0], [47.2, 655.0], [47.3, 655.0], [47.4, 655.0], [47.5, 655.0], [47.6, 655.0], [47.7, 655.0], [47.8, 669.0], [47.9, 669.0], [48.0, 669.0], [48.1, 669.0], [48.2, 669.0], [48.3, 669.0], [48.4, 669.0], [48.5, 669.0], [48.6, 669.0], [48.7, 669.0], [48.8, 669.0], [48.9, 689.0], [49.0, 689.0], [49.1, 689.0], [49.2, 689.0], [49.3, 689.0], [49.4, 689.0], [49.5, 689.0], [49.6, 689.0], [49.7, 689.0], [49.8, 689.0], [49.9, 689.0], [50.0, 689.0], [50.1, 979.0], [50.2, 979.0], [50.3, 979.0], [50.4, 979.0], [50.5, 979.0], [50.6, 979.0], [50.7, 979.0], [50.8, 979.0], [50.9, 979.0], [51.0, 979.0], [51.1, 979.0], [51.2, 980.0], [51.3, 980.0], [51.4, 980.0], [51.5, 980.0], [51.6, 980.0], [51.7, 980.0], [51.8, 980.0], [51.9, 980.0], [52.0, 980.0], [52.1, 980.0], [52.2, 980.0], [52.3, 1002.0], [52.4, 1002.0], [52.5, 1002.0], [52.6, 1002.0], [52.7, 1002.0], [52.8, 1002.0], [52.9, 1002.0], [53.0, 1002.0], [53.1, 1002.0], [53.2, 1002.0], [53.3, 1002.0], [53.4, 1008.0], [53.5, 1008.0], [53.6, 1008.0], [53.7, 1008.0], [53.8, 1008.0], [53.9, 1008.0], [54.0, 1008.0], [54.1, 1008.0], [54.2, 1008.0], [54.3, 1008.0], [54.4, 1008.0], [54.5, 1009.0], [54.6, 1009.0], [54.7, 1009.0], [54.8, 1009.0], [54.9, 1009.0], [55.0, 1009.0], [55.1, 1009.0], [55.2, 1009.0], [55.3, 1009.0], [55.4, 1009.0], [55.5, 1009.0], [55.6, 1013.0], [55.7, 1013.0], [55.8, 1013.0], [55.9, 1013.0], [56.0, 1013.0], [56.1, 1013.0], [56.2, 1013.0], [56.3, 1013.0], [56.4, 1013.0], [56.5, 1013.0], [56.6, 1013.0], [56.7, 1016.0], [56.8, 1016.0], [56.9, 1016.0], [57.0, 1016.0], [57.1, 1016.0], [57.2, 1016.0], [57.3, 1016.0], [57.4, 1016.0], [57.5, 1016.0], [57.6, 1016.0], [57.7, 1016.0], [57.8, 1023.0], [57.9, 1023.0], [58.0, 1023.0], [58.1, 1023.0], [58.2, 1023.0], [58.3, 1023.0], [58.4, 1023.0], [58.5, 1023.0], [58.6, 1023.0], [58.7, 1023.0], [58.8, 1023.0], [58.9, 1026.0], [59.0, 1026.0], [59.1, 1026.0], [59.2, 1026.0], [59.3, 1026.0], [59.4, 1026.0], [59.5, 1026.0], [59.6, 1026.0], [59.7, 1026.0], [59.8, 1026.0], [59.9, 1026.0], [60.0, 1026.0], [60.1, 1030.0], [60.2, 1030.0], [60.3, 1030.0], [60.4, 1030.0], [60.5, 1030.0], [60.6, 1030.0], [60.7, 1030.0], [60.8, 1030.0], [60.9, 1030.0], [61.0, 1030.0], [61.1, 1030.0], [61.2, 1031.0], [61.3, 1031.0], [61.4, 1031.0], [61.5, 1031.0], [61.6, 1031.0], [61.7, 1031.0], [61.8, 1031.0], [61.9, 1031.0], [62.0, 1031.0], [62.1, 1031.0], [62.2, 1031.0], [62.3, 1033.0], [62.4, 1033.0], [62.5, 1033.0], [62.6, 1033.0], [62.7, 1033.0], [62.8, 1033.0], [62.9, 1033.0], [63.0, 1033.0], [63.1, 1033.0], [63.2, 1033.0], [63.3, 1033.0], [63.4, 1033.0], [63.5, 1033.0], [63.6, 1033.0], [63.7, 1033.0], [63.8, 1033.0], [63.9, 1033.0], [64.0, 1033.0], [64.1, 1033.0], [64.2, 1033.0], [64.3, 1033.0], [64.4, 1033.0], [64.5, 1035.0], [64.6, 1035.0], [64.7, 1035.0], [64.8, 1035.0], [64.9, 1035.0], [65.0, 1035.0], [65.1, 1035.0], [65.2, 1035.0], [65.3, 1035.0], [65.4, 1035.0], [65.5, 1035.0], [65.6, 1039.0], [65.7, 1039.0], [65.8, 1039.0], [65.9, 1039.0], [66.0, 1039.0], [66.1, 1039.0], [66.2, 1039.0], [66.3, 1039.0], [66.4, 1039.0], [66.5, 1039.0], [66.6, 1039.0], [66.7, 1040.0], [66.8, 1040.0], [66.9, 1040.0], [67.0, 1040.0], [67.1, 1040.0], [67.2, 1040.0], [67.3, 1040.0], [67.4, 1040.0], [67.5, 1040.0], [67.6, 1040.0], [67.7, 1040.0], [67.8, 1041.0], [67.9, 1041.0], [68.0, 1041.0], [68.1, 1041.0], [68.2, 1041.0], [68.3, 1041.0], [68.4, 1041.0], [68.5, 1041.0], [68.6, 1041.0], [68.7, 1041.0], [68.8, 1041.0], [68.9, 1042.0], [69.0, 1042.0], [69.1, 1042.0], [69.2, 1042.0], [69.3, 1042.0], [69.4, 1042.0], [69.5, 1042.0], [69.6, 1042.0], [69.7, 1042.0], [69.8, 1042.0], [69.9, 1042.0], [70.0, 1042.0], [70.1, 1042.0], [70.2, 1042.0], [70.3, 1042.0], [70.4, 1042.0], [70.5, 1042.0], [70.6, 1042.0], [70.7, 1042.0], [70.8, 1042.0], [70.9, 1042.0], [71.0, 1042.0], [71.1, 1042.0], [71.2, 1046.0], [71.3, 1046.0], [71.4, 1046.0], [71.5, 1046.0], [71.6, 1046.0], [71.7, 1046.0], [71.8, 1046.0], [71.9, 1046.0], [72.0, 1046.0], [72.1, 1046.0], [72.2, 1046.0], [72.3, 1047.0], [72.4, 1047.0], [72.5, 1047.0], [72.6, 1047.0], [72.7, 1047.0], [72.8, 1047.0], [72.9, 1047.0], [73.0, 1047.0], [73.1, 1047.0], [73.2, 1047.0], [73.3, 1047.0], [73.4, 1047.0], [73.5, 1047.0], [73.6, 1047.0], [73.7, 1047.0], [73.8, 1047.0], [73.9, 1047.0], [74.0, 1047.0], [74.1, 1047.0], [74.2, 1047.0], [74.3, 1047.0], [74.4, 1047.0], [74.5, 1050.0], [74.6, 1050.0], [74.7, 1050.0], [74.8, 1050.0], [74.9, 1050.0], [75.0, 1050.0], [75.1, 1050.0], [75.2, 1050.0], [75.3, 1050.0], [75.4, 1050.0], [75.5, 1050.0], [75.6, 1057.0], [75.7, 1057.0], [75.8, 1057.0], [75.9, 1057.0], [76.0, 1057.0], [76.1, 1057.0], [76.2, 1057.0], [76.3, 1057.0], [76.4, 1057.0], [76.5, 1057.0], [76.6, 1057.0], [76.7, 1061.0], [76.8, 1061.0], [76.9, 1061.0], [77.0, 1061.0], [77.1, 1061.0], [77.2, 1061.0], [77.3, 1061.0], [77.4, 1061.0], [77.5, 1061.0], [77.6, 1061.0], [77.7, 1061.0], [77.8, 1062.0], [77.9, 1062.0], [78.0, 1062.0], [78.1, 1062.0], [78.2, 1062.0], [78.3, 1062.0], [78.4, 1062.0], [78.5, 1062.0], [78.6, 1062.0], [78.7, 1062.0], [78.8, 1062.0], [78.9, 1062.0], [79.0, 1062.0], [79.1, 1062.0], [79.2, 1062.0], [79.3, 1062.0], [79.4, 1062.0], [79.5, 1062.0], [79.6, 1062.0], [79.7, 1062.0], [79.8, 1062.0], [79.9, 1062.0], [80.0, 1062.0], [80.1, 1069.0], [80.2, 1069.0], [80.3, 1069.0], [80.4, 1069.0], [80.5, 1069.0], [80.6, 1069.0], [80.7, 1069.0], [80.8, 1069.0], [80.9, 1069.0], [81.0, 1069.0], [81.1, 1069.0], [81.2, 1074.0], [81.3, 1074.0], [81.4, 1074.0], [81.5, 1074.0], [81.6, 1074.0], [81.7, 1074.0], [81.8, 1074.0], [81.9, 1074.0], [82.0, 1074.0], [82.1, 1074.0], [82.2, 1074.0], [82.3, 1078.0], [82.4, 1078.0], [82.5, 1078.0], [82.6, 1078.0], [82.7, 1078.0], [82.8, 1078.0], [82.9, 1078.0], [83.0, 1078.0], [83.1, 1078.0], [83.2, 1078.0], [83.3, 1078.0], [83.4, 1085.0], [83.5, 1085.0], [83.6, 1085.0], [83.7, 1085.0], [83.8, 1085.0], [83.9, 1085.0], [84.0, 1085.0], [84.1, 1085.0], [84.2, 1085.0], [84.3, 1085.0], [84.4, 1085.0], [84.5, 1085.0], [84.6, 1085.0], [84.7, 1085.0], [84.8, 1085.0], [84.9, 1085.0], [85.0, 1085.0], [85.1, 1085.0], [85.2, 1085.0], [85.3, 1085.0], [85.4, 1085.0], [85.5, 1085.0], [85.6, 1086.0], [85.7, 1086.0], [85.8, 1086.0], [85.9, 1086.0], [86.0, 1086.0], [86.1, 1086.0], [86.2, 1086.0], [86.3, 1086.0], [86.4, 1086.0], [86.5, 1086.0], [86.6, 1086.0], [86.7, 1089.0], [86.8, 1089.0], [86.9, 1089.0], [87.0, 1089.0], [87.1, 1089.0], [87.2, 1089.0], [87.3, 1089.0], [87.4, 1089.0], [87.5, 1089.0], [87.6, 1089.0], [87.7, 1089.0], [87.8, 1097.0], [87.9, 1097.0], [88.0, 1097.0], [88.1, 1097.0], [88.2, 1097.0], [88.3, 1097.0], [88.4, 1097.0], [88.5, 1097.0], [88.6, 1097.0], [88.7, 1097.0], [88.8, 1097.0], [88.9, 1103.0], [89.0, 1103.0], [89.1, 1103.0], [89.2, 1103.0], [89.3, 1103.0], [89.4, 1103.0], [89.5, 1103.0], [89.6, 1103.0], [89.7, 1103.0], [89.8, 1103.0], [89.9, 1103.0], [90.0, 1103.0], [90.1, 1103.0], [90.2, 1103.0], [90.3, 1103.0], [90.4, 1103.0], [90.5, 1103.0], [90.6, 1103.0], [90.7, 1103.0], [90.8, 1103.0], [90.9, 1103.0], [91.0, 1103.0], [91.1, 1103.0], [91.2, 1119.0], [91.3, 1119.0], [91.4, 1119.0], [91.5, 1119.0], [91.6, 1119.0], [91.7, 1119.0], [91.8, 1119.0], [91.9, 1119.0], [92.0, 1119.0], [92.1, 1119.0], [92.2, 1119.0], [92.3, 1121.0], [92.4, 1121.0], [92.5, 1121.0], [92.6, 1121.0], [92.7, 1121.0], [92.8, 1121.0], [92.9, 1121.0], [93.0, 1121.0], [93.1, 1121.0], [93.2, 1121.0], [93.3, 1121.0], [93.4, 1130.0], [93.5, 1130.0], [93.6, 1130.0], [93.7, 1130.0], [93.8, 1130.0], [93.9, 1130.0], [94.0, 1130.0], [94.1, 1130.0], [94.2, 1130.0], [94.3, 1130.0], [94.4, 1130.0], [94.5, 1142.0], [94.6, 1142.0], [94.7, 1142.0], [94.8, 1142.0], [94.9, 1142.0], [95.0, 1142.0], [95.1, 1142.0], [95.2, 1142.0], [95.3, 1142.0], [95.4, 1142.0], [95.5, 1142.0], [95.6, 1150.0], [95.7, 1150.0], [95.8, 1150.0], [95.9, 1150.0], [96.0, 1150.0], [96.1, 1150.0], [96.2, 1150.0], [96.3, 1150.0], [96.4, 1150.0], [96.5, 1150.0], [96.6, 1150.0], [96.7, 1223.0], [96.8, 1223.0], [96.9, 1223.0], [97.0, 1223.0], [97.1, 1223.0], [97.2, 1223.0], [97.3, 1223.0], [97.4, 1223.0], [97.5, 1223.0], [97.6, 1223.0], [97.7, 1223.0], [97.8, 1369.0], [97.9, 1369.0], [98.0, 1369.0], [98.1, 1369.0], [98.2, 1369.0], [98.3, 1369.0], [98.4, 1369.0], [98.5, 1369.0], [98.6, 1369.0], [98.7, 1369.0], [98.8, 1369.0], [98.9, 1384.0], [99.0, 1384.0], [99.1, 1384.0], [99.2, 1384.0], [99.3, 1384.0], [99.4, 1384.0], [99.5, 1384.0], [99.6, 1384.0], [99.7, 1384.0], [99.8, 1384.0], [99.9, 1384.0], [100.0, 1384.0]], "isOverall": false, "label": "createUser", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 33.0, "series": [{"data": [[1100.0, 7.0], [600.0, 8.0], [1200.0, 1.0], [1300.0, 2.0], [400.0, 5.0], [900.0, 2.0], [1000.0, 33.0], [500.0, 32.0]], "isOverall": false, "label": "createUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 85.0, "series": [{"data": [[0.0, 5.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 85.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.131147540983608, "minX": 1.70767416E12, "maxY": 9.06896551724138, "series": [{"data": [[1.70767422E12, 7.131147540983608], [1.70767416E12, 9.06896551724138]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70767422E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 547.1428571428572, "minX": 1.0, "maxY": 1369.0, "series": [{"data": [[8.0, 755.9999999999999], [4.0, 583.0], [2.0, 562.0], [1.0, 548.0], [9.0, 907.4000000000001], [10.0, 960.7], [5.0, 547.1428571428572], [11.0, 1186.25], [12.0, 1369.0], [6.0, 587.4444444444445], [3.0, 569.0], [7.0, 854.1764705882351]], "isOverall": false, "label": "createUser", "isController": false}, {"data": [[7.7555555555555555, 815.3000000000003]], "isOverall": false, "label": "createUser-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 259.7, "minX": 1.70767416E12, "maxY": 1243.1166666666666, "series": [{"data": [[1.70767422E12, 1243.1166666666666], [1.70767416E12, 590.4666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70767422E12, 546.85], [1.70767416E12, 259.7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70767422E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 758.311475409836, "minX": 1.70767416E12, "maxY": 935.1724137931035, "series": [{"data": [[1.70767422E12, 758.311475409836], [1.70767416E12, 935.1724137931035]], "isOverall": false, "label": "createUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70767422E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 758.2295081967212, "minX": 1.70767416E12, "maxY": 935.0689655172413, "series": [{"data": [[1.70767422E12, 758.2295081967212], [1.70767416E12, 935.0689655172413]], "isOverall": false, "label": "createUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70767422E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 122.98360655737703, "minX": 1.70767416E12, "maxY": 123.86206896551725, "series": [{"data": [[1.70767422E12, 122.98360655737703], [1.70767416E12, 123.86206896551725]], "isOverall": false, "label": "createUser", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70767422E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 488.0, "minX": 1.70767416E12, "maxY": 1384.0, "series": [{"data": [[1.70767422E12, 1384.0], [1.70767416E12, 1142.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70767422E12, 488.0], [1.70767416E12, 514.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70767422E12, 1101.8], [1.70767416E12, 1121.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70767422E12, 1384.0], [1.70767416E12, 1142.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70767422E12, 596.0], [1.70767416E12, 1035.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.70767422E12, 1215.6999999999998], [1.70767416E12, 1136.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70767422E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 565.5, "minX": 4.0, "maxY": 1040.0, "series": [{"data": [[8.0, 591.0], [4.0, 565.5], [9.0, 1040.0], [11.0, 605.0], [12.0, 632.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 565.5, "minX": 4.0, "maxY": 1040.0, "series": [{"data": [[8.0, 591.0], [4.0, 565.5], [9.0, 1040.0], [11.0, 605.0], [12.0, 632.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 12.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6166666666666667, "minX": 1.70767416E12, "maxY": 0.8833333333333333, "series": [{"data": [[1.70767422E12, 0.8833333333333333], [1.70767416E12, 0.6166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70767422E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.70767416E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.70767422E12, 1.0166666666666666], [1.70767416E12, 0.48333333333333334]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70767422E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.70767416E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.70767422E12, 1.0166666666666666], [1.70767416E12, 0.48333333333333334]], "isOverall": false, "label": "createUser-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70767422E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.48333333333333334, "minX": 1.70767416E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.70767422E12, 1.0166666666666666], [1.70767416E12, 0.48333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70767422E12, "title": "Total Transactions Per Second"}},
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

