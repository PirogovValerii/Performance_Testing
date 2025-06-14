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
        data: {"result": {"minY": 152.0, "minX": 0.0, "maxY": 75335.0, "series": [{"data": [[0.0, 152.0], [0.1, 159.0], [0.2, 162.0], [0.3, 164.0], [0.4, 165.0], [0.5, 166.0], [0.6, 167.0], [0.7, 167.0], [0.8, 168.0], [0.9, 169.0], [1.0, 170.0], [1.1, 171.0], [1.2, 172.0], [1.3, 172.0], [1.4, 173.0], [1.5, 173.0], [1.6, 174.0], [1.7, 174.0], [1.8, 175.0], [1.9, 176.0], [2.0, 176.0], [2.1, 176.0], [2.2, 176.0], [2.3, 177.0], [2.4, 177.0], [2.5, 178.0], [2.6, 178.0], [2.7, 178.0], [2.8, 178.0], [2.9, 179.0], [3.0, 179.0], [3.1, 179.0], [3.2, 180.0], [3.3, 180.0], [3.4, 180.0], [3.5, 180.0], [3.6, 181.0], [3.7, 181.0], [3.8, 181.0], [3.9, 182.0], [4.0, 182.0], [4.1, 182.0], [4.2, 182.0], [4.3, 183.0], [4.4, 183.0], [4.5, 183.0], [4.6, 183.0], [4.7, 183.0], [4.8, 184.0], [4.9, 184.0], [5.0, 184.0], [5.1, 184.0], [5.2, 184.0], [5.3, 184.0], [5.4, 184.0], [5.5, 185.0], [5.6, 185.0], [5.7, 185.0], [5.8, 185.0], [5.9, 186.0], [6.0, 186.0], [6.1, 186.0], [6.2, 186.0], [6.3, 187.0], [6.4, 187.0], [6.5, 187.0], [6.6, 187.0], [6.7, 188.0], [6.8, 188.0], [6.9, 188.0], [7.0, 188.0], [7.1, 188.0], [7.2, 188.0], [7.3, 188.0], [7.4, 189.0], [7.5, 189.0], [7.6, 189.0], [7.7, 189.0], [7.8, 189.0], [7.9, 189.0], [8.0, 190.0], [8.1, 190.0], [8.2, 190.0], [8.3, 190.0], [8.4, 190.0], [8.5, 190.0], [8.6, 190.0], [8.7, 190.0], [8.8, 191.0], [8.9, 191.0], [9.0, 191.0], [9.1, 191.0], [9.2, 191.0], [9.3, 192.0], [9.4, 192.0], [9.5, 192.0], [9.6, 192.0], [9.7, 192.0], [9.8, 192.0], [9.9, 192.0], [10.0, 192.0], [10.1, 193.0], [10.2, 193.0], [10.3, 193.0], [10.4, 193.0], [10.5, 193.0], [10.6, 193.0], [10.7, 193.0], [10.8, 193.0], [10.9, 193.0], [11.0, 194.0], [11.1, 194.0], [11.2, 194.0], [11.3, 194.0], [11.4, 194.0], [11.5, 194.0], [11.6, 194.0], [11.7, 194.0], [11.8, 194.0], [11.9, 195.0], [12.0, 195.0], [12.1, 195.0], [12.2, 195.0], [12.3, 195.0], [12.4, 195.0], [12.5, 196.0], [12.6, 196.0], [12.7, 196.0], [12.8, 196.0], [12.9, 196.0], [13.0, 196.0], [13.1, 196.0], [13.2, 196.0], [13.3, 197.0], [13.4, 197.0], [13.5, 197.0], [13.6, 197.0], [13.7, 197.0], [13.8, 198.0], [13.9, 198.0], [14.0, 198.0], [14.1, 198.0], [14.2, 198.0], [14.3, 198.0], [14.4, 198.0], [14.5, 198.0], [14.6, 198.0], [14.7, 198.0], [14.8, 199.0], [14.9, 199.0], [15.0, 199.0], [15.1, 199.0], [15.2, 199.0], [15.3, 199.0], [15.4, 199.0], [15.5, 199.0], [15.6, 199.0], [15.7, 200.0], [15.8, 200.0], [15.9, 200.0], [16.0, 200.0], [16.1, 200.0], [16.2, 200.0], [16.3, 200.0], [16.4, 200.0], [16.5, 200.0], [16.6, 200.0], [16.7, 200.0], [16.8, 200.0], [16.9, 201.0], [17.0, 201.0], [17.1, 201.0], [17.2, 201.0], [17.3, 201.0], [17.4, 201.0], [17.5, 201.0], [17.6, 201.0], [17.7, 201.0], [17.8, 201.0], [17.9, 202.0], [18.0, 202.0], [18.1, 202.0], [18.2, 202.0], [18.3, 202.0], [18.4, 202.0], [18.5, 202.0], [18.6, 202.0], [18.7, 203.0], [18.8, 203.0], [18.9, 203.0], [19.0, 203.0], [19.1, 203.0], [19.2, 203.0], [19.3, 203.0], [19.4, 203.0], [19.5, 204.0], [19.6, 204.0], [19.7, 204.0], [19.8, 204.0], [19.9, 204.0], [20.0, 204.0], [20.1, 204.0], [20.2, 205.0], [20.3, 205.0], [20.4, 205.0], [20.5, 205.0], [20.6, 205.0], [20.7, 205.0], [20.8, 205.0], [20.9, 205.0], [21.0, 205.0], [21.1, 205.0], [21.2, 206.0], [21.3, 206.0], [21.4, 206.0], [21.5, 206.0], [21.6, 206.0], [21.7, 206.0], [21.8, 206.0], [21.9, 206.0], [22.0, 207.0], [22.1, 207.0], [22.2, 207.0], [22.3, 207.0], [22.4, 207.0], [22.5, 207.0], [22.6, 207.0], [22.7, 207.0], [22.8, 207.0], [22.9, 207.0], [23.0, 208.0], [23.1, 208.0], [23.2, 208.0], [23.3, 208.0], [23.4, 208.0], [23.5, 208.0], [23.6, 208.0], [23.7, 208.0], [23.8, 208.0], [23.9, 208.0], [24.0, 208.0], [24.1, 209.0], [24.2, 209.0], [24.3, 209.0], [24.4, 209.0], [24.5, 209.0], [24.6, 209.0], [24.7, 209.0], [24.8, 209.0], [24.9, 209.0], [25.0, 209.0], [25.1, 209.0], [25.2, 209.0], [25.3, 210.0], [25.4, 210.0], [25.5, 210.0], [25.6, 210.0], [25.7, 210.0], [25.8, 210.0], [25.9, 210.0], [26.0, 210.0], [26.1, 210.0], [26.2, 210.0], [26.3, 210.0], [26.4, 211.0], [26.5, 211.0], [26.6, 211.0], [26.7, 211.0], [26.8, 211.0], [26.9, 211.0], [27.0, 211.0], [27.1, 211.0], [27.2, 211.0], [27.3, 211.0], [27.4, 211.0], [27.5, 212.0], [27.6, 212.0], [27.7, 212.0], [27.8, 212.0], [27.9, 212.0], [28.0, 212.0], [28.1, 212.0], [28.2, 212.0], [28.3, 212.0], [28.4, 212.0], [28.5, 213.0], [28.6, 213.0], [28.7, 213.0], [28.8, 213.0], [28.9, 213.0], [29.0, 213.0], [29.1, 213.0], [29.2, 213.0], [29.3, 213.0], [29.4, 213.0], [29.5, 214.0], [29.6, 214.0], [29.7, 214.0], [29.8, 214.0], [29.9, 214.0], [30.0, 214.0], [30.1, 214.0], [30.2, 214.0], [30.3, 214.0], [30.4, 214.0], [30.5, 214.0], [30.6, 215.0], [30.7, 215.0], [30.8, 215.0], [30.9, 215.0], [31.0, 215.0], [31.1, 215.0], [31.2, 215.0], [31.3, 215.0], [31.4, 215.0], [31.5, 215.0], [31.6, 215.0], [31.7, 215.0], [31.8, 215.0], [31.9, 215.0], [32.0, 216.0], [32.1, 216.0], [32.2, 216.0], [32.3, 216.0], [32.4, 216.0], [32.5, 216.0], [32.6, 216.0], [32.7, 216.0], [32.8, 216.0], [32.9, 216.0], [33.0, 216.0], [33.1, 216.0], [33.2, 217.0], [33.3, 217.0], [33.4, 217.0], [33.5, 217.0], [33.6, 217.0], [33.7, 217.0], [33.8, 217.0], [33.9, 217.0], [34.0, 217.0], [34.1, 217.0], [34.2, 217.0], [34.3, 217.0], [34.4, 217.0], [34.5, 217.0], [34.6, 218.0], [34.7, 218.0], [34.8, 218.0], [34.9, 218.0], [35.0, 218.0], [35.1, 218.0], [35.2, 218.0], [35.3, 218.0], [35.4, 218.0], [35.5, 218.0], [35.6, 218.0], [35.7, 218.0], [35.8, 218.0], [35.9, 218.0], [36.0, 219.0], [36.1, 219.0], [36.2, 219.0], [36.3, 219.0], [36.4, 219.0], [36.5, 219.0], [36.6, 219.0], [36.7, 219.0], [36.8, 219.0], [36.9, 219.0], [37.0, 219.0], [37.1, 220.0], [37.2, 220.0], [37.3, 220.0], [37.4, 220.0], [37.5, 220.0], [37.6, 220.0], [37.7, 220.0], [37.8, 220.0], [37.9, 220.0], [38.0, 220.0], [38.1, 221.0], [38.2, 221.0], [38.3, 221.0], [38.4, 221.0], [38.5, 221.0], [38.6, 221.0], [38.7, 221.0], [38.8, 221.0], [38.9, 221.0], [39.0, 221.0], [39.1, 221.0], [39.2, 222.0], [39.3, 222.0], [39.4, 222.0], [39.5, 222.0], [39.6, 222.0], [39.7, 222.0], [39.8, 222.0], [39.9, 222.0], [40.0, 222.0], [40.1, 222.0], [40.2, 223.0], [40.3, 223.0], [40.4, 223.0], [40.5, 223.0], [40.6, 223.0], [40.7, 223.0], [40.8, 223.0], [40.9, 223.0], [41.0, 223.0], [41.1, 223.0], [41.2, 223.0], [41.3, 223.0], [41.4, 224.0], [41.5, 224.0], [41.6, 224.0], [41.7, 224.0], [41.8, 224.0], [41.9, 224.0], [42.0, 224.0], [42.1, 224.0], [42.2, 224.0], [42.3, 224.0], [42.4, 224.0], [42.5, 224.0], [42.6, 225.0], [42.7, 225.0], [42.8, 225.0], [42.9, 225.0], [43.0, 225.0], [43.1, 225.0], [43.2, 225.0], [43.3, 225.0], [43.4, 225.0], [43.5, 225.0], [43.6, 225.0], [43.7, 225.0], [43.8, 226.0], [43.9, 226.0], [44.0, 226.0], [44.1, 226.0], [44.2, 226.0], [44.3, 226.0], [44.4, 226.0], [44.5, 226.0], [44.6, 226.0], [44.7, 226.0], [44.8, 226.0], [44.9, 226.0], [45.0, 227.0], [45.1, 227.0], [45.2, 227.0], [45.3, 227.0], [45.4, 227.0], [45.5, 227.0], [45.6, 227.0], [45.7, 227.0], [45.8, 227.0], [45.9, 227.0], [46.0, 227.0], [46.1, 228.0], [46.2, 228.0], [46.3, 228.0], [46.4, 228.0], [46.5, 228.0], [46.6, 228.0], [46.7, 228.0], [46.8, 228.0], [46.9, 228.0], [47.0, 228.0], [47.1, 229.0], [47.2, 229.0], [47.3, 229.0], [47.4, 229.0], [47.5, 229.0], [47.6, 229.0], [47.7, 229.0], [47.8, 229.0], [47.9, 229.0], [48.0, 229.0], [48.1, 230.0], [48.2, 230.0], [48.3, 230.0], [48.4, 230.0], [48.5, 230.0], [48.6, 230.0], [48.7, 230.0], [48.8, 230.0], [48.9, 230.0], [49.0, 231.0], [49.1, 231.0], [49.2, 231.0], [49.3, 231.0], [49.4, 231.0], [49.5, 231.0], [49.6, 231.0], [49.7, 231.0], [49.8, 231.0], [49.9, 232.0], [50.0, 232.0], [50.1, 232.0], [50.2, 232.0], [50.3, 232.0], [50.4, 232.0], [50.5, 232.0], [50.6, 232.0], [50.7, 232.0], [50.8, 232.0], [50.9, 232.0], [51.0, 232.0], [51.1, 233.0], [51.2, 233.0], [51.3, 233.0], [51.4, 233.0], [51.5, 233.0], [51.6, 233.0], [51.7, 233.0], [51.8, 233.0], [51.9, 233.0], [52.0, 233.0], [52.1, 233.0], [52.2, 233.0], [52.3, 233.0], [52.4, 233.0], [52.5, 234.0], [52.6, 234.0], [52.7, 234.0], [52.8, 234.0], [52.9, 234.0], [53.0, 234.0], [53.1, 234.0], [53.2, 234.0], [53.3, 234.0], [53.4, 234.0], [53.5, 234.0], [53.6, 234.0], [53.7, 235.0], [53.8, 235.0], [53.9, 235.0], [54.0, 235.0], [54.1, 235.0], [54.2, 235.0], [54.3, 235.0], [54.4, 235.0], [54.5, 235.0], [54.6, 236.0], [54.7, 236.0], [54.8, 236.0], [54.9, 236.0], [55.0, 236.0], [55.1, 236.0], [55.2, 236.0], [55.3, 236.0], [55.4, 236.0], [55.5, 237.0], [55.6, 237.0], [55.7, 237.0], [55.8, 237.0], [55.9, 237.0], [56.0, 237.0], [56.1, 237.0], [56.2, 237.0], [56.3, 237.0], [56.4, 237.0], [56.5, 238.0], [56.6, 238.0], [56.7, 238.0], [56.8, 238.0], [56.9, 238.0], [57.0, 238.0], [57.1, 238.0], [57.2, 238.0], [57.3, 239.0], [57.4, 239.0], [57.5, 239.0], [57.6, 239.0], [57.7, 239.0], [57.8, 239.0], [57.9, 239.0], [58.0, 239.0], [58.1, 240.0], [58.2, 240.0], [58.3, 240.0], [58.4, 240.0], [58.5, 240.0], [58.6, 240.0], [58.7, 240.0], [58.8, 240.0], [58.9, 240.0], [59.0, 241.0], [59.1, 241.0], [59.2, 241.0], [59.3, 241.0], [59.4, 241.0], [59.5, 241.0], [59.6, 241.0], [59.7, 241.0], [59.8, 241.0], [59.9, 242.0], [60.0, 242.0], [60.1, 242.0], [60.2, 242.0], [60.3, 242.0], [60.4, 242.0], [60.5, 242.0], [60.6, 242.0], [60.7, 242.0], [60.8, 243.0], [60.9, 243.0], [61.0, 243.0], [61.1, 243.0], [61.2, 243.0], [61.3, 243.0], [61.4, 243.0], [61.5, 243.0], [61.6, 243.0], [61.7, 244.0], [61.8, 244.0], [61.9, 244.0], [62.0, 244.0], [62.1, 244.0], [62.2, 244.0], [62.3, 245.0], [62.4, 245.0], [62.5, 245.0], [62.6, 245.0], [62.7, 245.0], [62.8, 245.0], [62.9, 245.0], [63.0, 245.0], [63.1, 246.0], [63.2, 246.0], [63.3, 246.0], [63.4, 246.0], [63.5, 246.0], [63.6, 246.0], [63.7, 246.0], [63.8, 246.0], [63.9, 247.0], [64.0, 247.0], [64.1, 247.0], [64.2, 247.0], [64.3, 247.0], [64.4, 247.0], [64.5, 247.0], [64.6, 247.0], [64.7, 247.0], [64.8, 248.0], [64.9, 248.0], [65.0, 248.0], [65.1, 248.0], [65.2, 248.0], [65.3, 248.0], [65.4, 248.0], [65.5, 249.0], [65.6, 249.0], [65.7, 249.0], [65.8, 249.0], [65.9, 249.0], [66.0, 249.0], [66.1, 249.0], [66.2, 249.0], [66.3, 249.0], [66.4, 249.0], [66.5, 250.0], [66.6, 250.0], [66.7, 250.0], [66.8, 250.0], [66.9, 250.0], [67.0, 250.0], [67.1, 250.0], [67.2, 251.0], [67.3, 251.0], [67.4, 251.0], [67.5, 251.0], [67.6, 251.0], [67.7, 251.0], [67.8, 251.0], [67.9, 251.0], [68.0, 251.0], [68.1, 251.0], [68.2, 251.0], [68.3, 251.0], [68.4, 252.0], [68.5, 252.0], [68.6, 252.0], [68.7, 252.0], [68.8, 252.0], [68.9, 252.0], [69.0, 252.0], [69.1, 252.0], [69.2, 253.0], [69.3, 253.0], [69.4, 253.0], [69.5, 253.0], [69.6, 253.0], [69.7, 253.0], [69.8, 253.0], [69.9, 253.0], [70.0, 254.0], [70.1, 254.0], [70.2, 254.0], [70.3, 254.0], [70.4, 254.0], [70.5, 254.0], [70.6, 255.0], [70.7, 255.0], [70.8, 255.0], [70.9, 255.0], [71.0, 255.0], [71.1, 255.0], [71.2, 255.0], [71.3, 255.0], [71.4, 256.0], [71.5, 256.0], [71.6, 256.0], [71.7, 256.0], [71.8, 256.0], [71.9, 257.0], [72.0, 257.0], [72.1, 257.0], [72.2, 257.0], [72.3, 257.0], [72.4, 258.0], [72.5, 258.0], [72.6, 258.0], [72.7, 258.0], [72.8, 258.0], [72.9, 258.0], [73.0, 259.0], [73.1, 259.0], [73.2, 259.0], [73.3, 259.0], [73.4, 259.0], [73.5, 259.0], [73.6, 260.0], [73.7, 260.0], [73.8, 260.0], [73.9, 260.0], [74.0, 260.0], [74.1, 260.0], [74.2, 260.0], [74.3, 260.0], [74.4, 260.0], [74.5, 261.0], [74.6, 261.0], [74.7, 261.0], [74.8, 261.0], [74.9, 261.0], [75.0, 262.0], [75.1, 262.0], [75.2, 262.0], [75.3, 262.0], [75.4, 262.0], [75.5, 263.0], [75.6, 263.0], [75.7, 263.0], [75.8, 263.0], [75.9, 263.0], [76.0, 263.0], [76.1, 264.0], [76.2, 264.0], [76.3, 264.0], [76.4, 264.0], [76.5, 264.0], [76.6, 265.0], [76.7, 265.0], [76.8, 265.0], [76.9, 265.0], [77.0, 265.0], [77.1, 265.0], [77.2, 265.0], [77.3, 266.0], [77.4, 266.0], [77.5, 266.0], [77.6, 266.0], [77.7, 266.0], [77.8, 266.0], [77.9, 267.0], [78.0, 267.0], [78.1, 267.0], [78.2, 267.0], [78.3, 267.0], [78.4, 268.0], [78.5, 268.0], [78.6, 268.0], [78.7, 268.0], [78.8, 269.0], [78.9, 269.0], [79.0, 269.0], [79.1, 270.0], [79.2, 270.0], [79.3, 270.0], [79.4, 271.0], [79.5, 271.0], [79.6, 271.0], [79.7, 271.0], [79.8, 272.0], [79.9, 272.0], [80.0, 272.0], [80.1, 272.0], [80.2, 273.0], [80.3, 273.0], [80.4, 273.0], [80.5, 274.0], [80.6, 274.0], [80.7, 274.0], [80.8, 274.0], [80.9, 274.0], [81.0, 274.0], [81.1, 275.0], [81.2, 275.0], [81.3, 275.0], [81.4, 276.0], [81.5, 276.0], [81.6, 276.0], [81.7, 276.0], [81.8, 277.0], [81.9, 277.0], [82.0, 277.0], [82.1, 277.0], [82.2, 277.0], [82.3, 278.0], [82.4, 278.0], [82.5, 278.0], [82.6, 278.0], [82.7, 279.0], [82.8, 280.0], [82.9, 280.0], [83.0, 280.0], [83.1, 281.0], [83.2, 281.0], [83.3, 281.0], [83.4, 282.0], [83.5, 282.0], [83.6, 282.0], [83.7, 283.0], [83.8, 283.0], [83.9, 283.0], [84.0, 283.0], [84.1, 284.0], [84.2, 284.0], [84.3, 284.0], [84.4, 284.0], [84.5, 285.0], [84.6, 285.0], [84.7, 285.0], [84.8, 285.0], [84.9, 286.0], [85.0, 286.0], [85.1, 287.0], [85.2, 287.0], [85.3, 287.0], [85.4, 287.0], [85.5, 288.0], [85.6, 289.0], [85.7, 289.0], [85.8, 289.0], [85.9, 290.0], [86.0, 290.0], [86.1, 291.0], [86.2, 291.0], [86.3, 292.0], [86.4, 292.0], [86.5, 293.0], [86.6, 293.0], [86.7, 293.0], [86.8, 294.0], [86.9, 295.0], [87.0, 295.0], [87.1, 296.0], [87.2, 296.0], [87.3, 297.0], [87.4, 298.0], [87.5, 298.0], [87.6, 299.0], [87.7, 299.0], [87.8, 299.0], [87.9, 300.0], [88.0, 300.0], [88.1, 300.0], [88.2, 301.0], [88.3, 302.0], [88.4, 302.0], [88.5, 302.0], [88.6, 303.0], [88.7, 304.0], [88.8, 304.0], [88.9, 305.0], [89.0, 305.0], [89.1, 306.0], [89.2, 307.0], [89.3, 308.0], [89.4, 308.0], [89.5, 310.0], [89.6, 311.0], [89.7, 312.0], [89.8, 313.0], [89.9, 315.0], [90.0, 316.0], [90.1, 316.0], [90.2, 317.0], [90.3, 317.0], [90.4, 318.0], [90.5, 318.0], [90.6, 319.0], [90.7, 319.0], [90.8, 320.0], [90.9, 321.0], [91.0, 321.0], [91.1, 322.0], [91.2, 323.0], [91.3, 323.0], [91.4, 324.0], [91.5, 325.0], [91.6, 325.0], [91.7, 327.0], [91.8, 328.0], [91.9, 329.0], [92.0, 331.0], [92.1, 332.0], [92.2, 333.0], [92.3, 335.0], [92.4, 336.0], [92.5, 337.0], [92.6, 338.0], [92.7, 340.0], [92.8, 341.0], [92.9, 343.0], [93.0, 343.0], [93.1, 343.0], [93.2, 344.0], [93.3, 346.0], [93.4, 347.0], [93.5, 348.0], [93.6, 349.0], [93.7, 350.0], [93.8, 352.0], [93.9, 353.0], [94.0, 355.0], [94.1, 358.0], [94.2, 360.0], [94.3, 362.0], [94.4, 363.0], [94.5, 364.0], [94.6, 365.0], [94.7, 366.0], [94.8, 367.0], [94.9, 369.0], [95.0, 370.0], [95.1, 372.0], [95.2, 376.0], [95.3, 380.0], [95.4, 383.0], [95.5, 384.0], [95.6, 387.0], [95.7, 390.0], [95.8, 392.0], [95.9, 396.0], [96.0, 399.0], [96.1, 403.0], [96.2, 412.0], [96.3, 418.0], [96.4, 423.0], [96.5, 433.0], [96.6, 436.0], [96.7, 443.0], [96.8, 448.0], [96.9, 459.0], [97.0, 467.0], [97.1, 477.0], [97.2, 494.0], [97.3, 513.0], [97.4, 527.0], [97.5, 537.0], [97.6, 574.0], [97.7, 587.0], [97.8, 630.0], [97.9, 701.0], [98.0, 729.0], [98.1, 802.0], [98.2, 877.0], [98.3, 1188.0], [98.4, 1281.0], [98.5, 5396.0], [98.6, 11215.0], [98.7, 11218.0], [98.8, 11224.0], [98.9, 11227.0], [99.0, 11236.0], [99.1, 11243.0], [99.2, 11246.0], [99.3, 11257.0], [99.4, 11261.0], [99.5, 11278.0], [99.6, 11286.0], [99.7, 11295.0], [99.8, 11322.0], [99.9, 47173.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 3902.0, "series": [{"data": [[600.0, 10.0], [700.0, 11.0], [11200.0, 63.0], [11300.0, 7.0], [11500.0, 1.0], [800.0, 7.0], [900.0, 2.0], [1000.0, 2.0], [1100.0, 2.0], [1200.0, 6.0], [19300.0, 1.0], [1300.0, 1.0], [100.0, 849.0], [47100.0, 1.0], [200.0, 3902.0], [300.0, 442.0], [75300.0, 4.0], [75200.0, 1.0], [5200.0, 1.0], [5300.0, 1.0], [400.0, 66.0], [7100.0, 1.0], [7400.0, 1.0], [7200.0, 1.0], [500.0, 26.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 75300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5303.0, "series": [{"data": [[0.0, 99.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 5303.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.5, "minX": 1.74954396E12, "maxY": 42.14979928163945, "series": [{"data": [[1.74954402E12, 42.14979928163945], [1.74954396E12, 19.807462686567145], [1.74954408E12, 3.5]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74954408E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 200.96551724137933, "minX": 1.0, "maxY": 75335.0, "series": [{"data": [[2.0, 75302.0], [3.0, 75306.0], [4.0, 75299.0], [5.0, 75317.0], [6.0, 47173.0], [7.0, 3406.9999999999995], [8.0, 706.8076923076924], [9.0, 978.0666666666667], [10.0, 763.2380952380952], [11.0, 725.7727272727273], [12.0, 647.9615384615385], [13.0, 679.28], [14.0, 200.96551724137933], [15.0, 215.05555555555557], [16.0, 210.66666666666669], [17.0, 1118.5555555555557], [18.0, 202.64705882352948], [19.0, 1206.5294117647059], [20.0, 242.4506172839506], [21.0, 211.75999999999996], [22.0, 587.7619047619048], [23.0, 520.8461538461538], [24.0, 248.38235294117646], [25.0, 231.19444444444446], [26.0, 224.75], [27.0, 218.0697674418605], [28.0, 232.0606060606061], [29.0, 237.47619047619048], [30.0, 230.33333333333334], [31.0, 267.48837209302314], [32.0, 282.0540540540541], [33.0, 246.54], [34.0, 227.90697674418607], [35.0, 244.7735849056604], [36.0, 236.43750000000003], [37.0, 251.49056603773587], [38.0, 233.33333333333334], [39.0, 243.41818181818186], [40.0, 228.28571428571433], [41.0, 233.26415094339626], [42.0, 238.10937499999997], [43.0, 243.53448275862067], [44.0, 231.06349206349205], [45.0, 260.1400000000001], [46.0, 257.75000000000006], [47.0, 230.7924528301887], [48.0, 236.45945945945942], [49.0, 270.2033898305086], [50.0, 736.2553191489362], [51.0, 530.3924050632911], [52.0, 3306.666666666667], [53.0, 418.4230769230769], [54.0, 423.8307692307692], [55.0, 251.9746835443038], [56.0, 236.67123287671234], [57.0, 698.169014084507], [58.0, 258.4155844155843], [59.0, 553.4666666666666], [60.0, 260.76388888888874], [61.0, 256.80519480519484], [62.0, 603.0227272727273], [63.0, 367.1935483870967], [64.0, 258.9874999999999], [65.0, 516.7469879518072], [66.0, 245.12820512820517], [67.0, 310.70270270270277], [68.0, 694.9268292682927], [69.0, 466.54117647058837], [70.0, 413.9538461538462], [71.0, 286.68749999999994], [72.0, 254.21978021978026], [73.0, 278.31521739130426], [74.0, 275.23611111111103], [79.0, 7214.0], [78.0, 11228.0], [77.0, 11224.125], [81.0, 7423.0], [80.0, 7193.0], [1.0, 75335.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[39.33943427620639, 477.96764651506703]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 81.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 20.25, "minX": 1.74954396E12, "maxY": 91720.8, "series": [{"data": [[1.74954402E12, 91720.8], [1.74954396E12, 19785.816666666666], [1.74954408E12, 494.48333333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74954402E12, 19168.65], [1.74954396E12, 2713.5], [1.74954408E12, 20.25]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74954408E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 229.886567164179, "minX": 1.74954396E12, "maxY": 70622.0, "series": [{"data": [[1.74954402E12, 424.16458905556715], [1.74954396E12, 229.886567164179], [1.74954408E12, 70622.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74954408E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 229.8746268656716, "minX": 1.74954396E12, "maxY": 62759.833333333336, "series": [{"data": [[1.74954402E12, 424.153813648849], [1.74954396E12, 229.8746268656716], [1.74954408E12, 62759.833333333336]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74954408E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 95.90597014925378, "minX": 1.74954396E12, "maxY": 70444.33333333333, "series": [{"data": [[1.74954402E12, 288.1278259032325], [1.74954396E12, 95.90597014925378], [1.74954408E12, 70444.33333333333]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74954408E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 232.0, "minX": 1.74954396E12, "maxY": 75335.0, "series": [{"data": [[1.74954402E12, 19321.0], [1.74954396E12, 501.0], [1.74954408E12, 75335.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74954402E12, 19321.0], [1.74954396E12, 232.0], [1.74954408E12, 75299.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74954402E12, 19321.0], [1.74954396E12, 347.5], [1.74954408E12, 75335.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74954402E12, 19321.0], [1.74954396E12, 500.66999999999985], [1.74954408E12, 75335.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74954402E12, 19321.0], [1.74954396E12, 278.5], [1.74954408E12, 75306.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.74954402E12, 19321.0], [1.74954396E12, 365.79999999999995], [1.74954408E12, 75335.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74954408E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
    data: {"result": {"minY": 189.5, "minX": 1.0, "maxY": 75304.0, "series": [{"data": [[1.0, 75304.0], [86.0, 270.0], [6.0, 314.5], [57.0, 281.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 218.0], [2.0, 11469.5], [35.0, 210.0], [39.0, 207.0], [3.0, 7214.0], [58.0, 248.0], [65.0, 227.5], [68.0, 11246.0], [75.0, 225.0], [72.0, 249.5], [74.0, 233.5], [77.0, 215.0], [79.0, 215.0], [83.0, 220.0], [80.0, 189.5], [86.0, 216.0], [85.0, 206.0], [84.0, 214.0], [90.0, 198.5], [89.0, 201.0], [92.0, 206.0], [95.0, 207.0], [93.0, 236.0], [101.0, 233.0], [106.0, 219.0], [127.0, 228.0], [125.0, 236.0], [140.0, 232.5], [157.0, 226.0], [159.0, 230.0], [163.0, 232.0], [172.0, 234.0], [170.0, 243.5], [187.0, 251.0], [184.0, 241.5], [196.0, 277.5], [205.0, 234.0], [211.0, 297.0], [225.0, 232.0], [224.0, 235.5], [235.0, 255.0], [1.0, 29200.5], [26.0, 252.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 235.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 189.5, "minX": 1.0, "maxY": 75304.0, "series": [{"data": [[1.0, 75304.0], [86.0, 270.0], [6.0, 314.5], [57.0, 281.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[32.0, 218.0], [2.0, 11469.5], [35.0, 210.0], [39.0, 207.0], [3.0, 7214.0], [58.0, 248.0], [65.0, 227.5], [68.0, 11246.0], [75.0, 225.0], [72.0, 249.5], [74.0, 233.5], [77.0, 215.0], [79.0, 215.0], [83.0, 220.0], [80.0, 189.5], [86.0, 216.0], [85.0, 206.0], [84.0, 214.0], [90.0, 198.5], [89.0, 201.0], [92.0, 206.0], [95.0, 207.0], [93.0, 236.0], [101.0, 233.0], [106.0, 219.0], [127.0, 228.0], [125.0, 236.0], [140.0, 232.5], [157.0, 226.0], [159.0, 230.0], [163.0, 232.0], [172.0, 234.0], [170.0, 243.5], [187.0, 251.0], [184.0, 241.5], [196.0, 277.5], [205.0, 234.0], [211.0, 297.0], [225.0, 232.0], [224.0, 235.5], [235.0, 255.0], [1.0, 5614.0], [26.0, 252.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 235.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.5, "minX": 1.74954396E12, "maxY": 78.65, "series": [{"data": [[1.74954402E12, 78.65], [1.74954396E12, 11.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74954402E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74954396E12, "maxY": 78.86666666666666, "series": [{"data": [[1.74954402E12, 0.016666666666666666], [1.74954396E12, 1.6666666666666667], [1.74954408E12, 0.08333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.74954402E12, 78.86666666666666], [1.74954396E12, 9.5]], "isOverall": false, "label": "429", "isController": false}, {"data": [[1.74954408E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74954408E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74954396E12, "maxY": 78.86666666666666, "series": [{"data": [[1.74954402E12, 0.016666666666666666], [1.74954396E12, 1.6666666666666667], [1.74954408E12, 0.08333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.74954402E12, 78.86666666666666], [1.74954396E12, 9.5], [1.74954408E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74954408E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74954396E12, "maxY": 78.86666666666666, "series": [{"data": [[1.74954402E12, 0.016666666666666666], [1.74954396E12, 1.6666666666666667], [1.74954408E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.74954402E12, 78.86666666666666], [1.74954396E12, 9.5], [1.74954408E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74954408E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 10800000);
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

