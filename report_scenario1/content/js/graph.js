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
        data: {"result": {"minY": 145.0, "minX": 0.0, "maxY": 75561.0, "series": [{"data": [[0.0, 145.0], [0.1, 148.0], [0.2, 151.0], [0.3, 152.0], [0.4, 153.0], [0.5, 154.0], [0.6, 154.0], [0.7, 155.0], [0.8, 155.0], [0.9, 156.0], [1.0, 157.0], [1.1, 158.0], [1.2, 158.0], [1.3, 158.0], [1.4, 159.0], [1.5, 159.0], [1.6, 159.0], [1.7, 160.0], [1.8, 160.0], [1.9, 161.0], [2.0, 161.0], [2.1, 162.0], [2.2, 162.0], [2.3, 162.0], [2.4, 162.0], [2.5, 163.0], [2.6, 164.0], [2.7, 164.0], [2.8, 164.0], [2.9, 164.0], [3.0, 164.0], [3.1, 165.0], [3.2, 165.0], [3.3, 165.0], [3.4, 165.0], [3.5, 165.0], [3.6, 165.0], [3.7, 166.0], [3.8, 166.0], [3.9, 166.0], [4.0, 166.0], [4.1, 167.0], [4.2, 167.0], [4.3, 167.0], [4.4, 167.0], [4.5, 167.0], [4.6, 168.0], [4.7, 168.0], [4.8, 168.0], [4.9, 168.0], [5.0, 168.0], [5.1, 169.0], [5.2, 169.0], [5.3, 169.0], [5.4, 169.0], [5.5, 170.0], [5.6, 170.0], [5.7, 170.0], [5.8, 170.0], [5.9, 171.0], [6.0, 171.0], [6.1, 171.0], [6.2, 171.0], [6.3, 171.0], [6.4, 171.0], [6.5, 172.0], [6.6, 172.0], [6.7, 172.0], [6.8, 172.0], [6.9, 173.0], [7.0, 173.0], [7.1, 173.0], [7.2, 173.0], [7.3, 173.0], [7.4, 173.0], [7.5, 174.0], [7.6, 174.0], [7.7, 174.0], [7.8, 174.0], [7.9, 174.0], [8.0, 175.0], [8.1, 175.0], [8.2, 175.0], [8.3, 175.0], [8.4, 175.0], [8.5, 175.0], [8.6, 175.0], [8.7, 175.0], [8.8, 175.0], [8.9, 176.0], [9.0, 176.0], [9.1, 176.0], [9.2, 176.0], [9.3, 176.0], [9.4, 176.0], [9.5, 177.0], [9.6, 177.0], [9.7, 177.0], [9.8, 177.0], [9.9, 177.0], [10.0, 178.0], [10.1, 178.0], [10.2, 178.0], [10.3, 178.0], [10.4, 178.0], [10.5, 178.0], [10.6, 178.0], [10.7, 179.0], [10.8, 179.0], [10.9, 179.0], [11.0, 179.0], [11.1, 179.0], [11.2, 179.0], [11.3, 179.0], [11.4, 180.0], [11.5, 180.0], [11.6, 180.0], [11.7, 180.0], [11.8, 180.0], [11.9, 181.0], [12.0, 181.0], [12.1, 181.0], [12.2, 181.0], [12.3, 182.0], [12.4, 182.0], [12.5, 182.0], [12.6, 182.0], [12.7, 182.0], [12.8, 182.0], [12.9, 182.0], [13.0, 183.0], [13.1, 183.0], [13.2, 183.0], [13.3, 183.0], [13.4, 183.0], [13.5, 183.0], [13.6, 183.0], [13.7, 183.0], [13.8, 183.0], [13.9, 183.0], [14.0, 184.0], [14.1, 184.0], [14.2, 184.0], [14.3, 184.0], [14.4, 184.0], [14.5, 184.0], [14.6, 185.0], [14.7, 185.0], [14.8, 185.0], [14.9, 185.0], [15.0, 185.0], [15.1, 185.0], [15.2, 185.0], [15.3, 185.0], [15.4, 186.0], [15.5, 186.0], [15.6, 186.0], [15.7, 186.0], [15.8, 186.0], [15.9, 186.0], [16.0, 186.0], [16.1, 186.0], [16.2, 187.0], [16.3, 187.0], [16.4, 187.0], [16.5, 187.0], [16.6, 187.0], [16.7, 187.0], [16.8, 187.0], [16.9, 188.0], [17.0, 188.0], [17.1, 188.0], [17.2, 188.0], [17.3, 188.0], [17.4, 188.0], [17.5, 188.0], [17.6, 188.0], [17.7, 188.0], [17.8, 189.0], [17.9, 189.0], [18.0, 189.0], [18.1, 189.0], [18.2, 189.0], [18.3, 189.0], [18.4, 189.0], [18.5, 190.0], [18.6, 190.0], [18.7, 190.0], [18.8, 190.0], [18.9, 190.0], [19.0, 190.0], [19.1, 190.0], [19.2, 190.0], [19.3, 190.0], [19.4, 191.0], [19.5, 191.0], [19.6, 191.0], [19.7, 191.0], [19.8, 191.0], [19.9, 191.0], [20.0, 191.0], [20.1, 191.0], [20.2, 191.0], [20.3, 192.0], [20.4, 192.0], [20.5, 192.0], [20.6, 192.0], [20.7, 192.0], [20.8, 192.0], [20.9, 192.0], [21.0, 193.0], [21.1, 193.0], [21.2, 193.0], [21.3, 193.0], [21.4, 193.0], [21.5, 193.0], [21.6, 193.0], [21.7, 193.0], [21.8, 194.0], [21.9, 194.0], [22.0, 194.0], [22.1, 194.0], [22.2, 194.0], [22.3, 194.0], [22.4, 195.0], [22.5, 195.0], [22.6, 195.0], [22.7, 195.0], [22.8, 196.0], [22.9, 196.0], [23.0, 196.0], [23.1, 196.0], [23.2, 196.0], [23.3, 196.0], [23.4, 197.0], [23.5, 197.0], [23.6, 197.0], [23.7, 198.0], [23.8, 198.0], [23.9, 198.0], [24.0, 198.0], [24.1, 198.0], [24.2, 198.0], [24.3, 198.0], [24.4, 198.0], [24.5, 199.0], [24.6, 199.0], [24.7, 199.0], [24.8, 199.0], [24.9, 199.0], [25.0, 199.0], [25.1, 200.0], [25.2, 200.0], [25.3, 200.0], [25.4, 200.0], [25.5, 200.0], [25.6, 200.0], [25.7, 200.0], [25.8, 201.0], [25.9, 201.0], [26.0, 201.0], [26.1, 201.0], [26.2, 201.0], [26.3, 201.0], [26.4, 201.0], [26.5, 201.0], [26.6, 201.0], [26.7, 202.0], [26.8, 202.0], [26.9, 202.0], [27.0, 202.0], [27.1, 202.0], [27.2, 202.0], [27.3, 202.0], [27.4, 203.0], [27.5, 203.0], [27.6, 203.0], [27.7, 203.0], [27.8, 203.0], [27.9, 203.0], [28.0, 203.0], [28.1, 204.0], [28.2, 204.0], [28.3, 204.0], [28.4, 205.0], [28.5, 205.0], [28.6, 205.0], [28.7, 205.0], [28.8, 205.0], [28.9, 206.0], [29.0, 206.0], [29.1, 206.0], [29.2, 206.0], [29.3, 206.0], [29.4, 206.0], [29.5, 206.0], [29.6, 207.0], [29.7, 207.0], [29.8, 207.0], [29.9, 207.0], [30.0, 207.0], [30.1, 207.0], [30.2, 208.0], [30.3, 208.0], [30.4, 208.0], [30.5, 208.0], [30.6, 208.0], [30.7, 208.0], [30.8, 209.0], [30.9, 209.0], [31.0, 209.0], [31.1, 209.0], [31.2, 209.0], [31.3, 210.0], [31.4, 210.0], [31.5, 210.0], [31.6, 210.0], [31.7, 211.0], [31.8, 211.0], [31.9, 211.0], [32.0, 211.0], [32.1, 212.0], [32.2, 212.0], [32.3, 212.0], [32.4, 212.0], [32.5, 212.0], [32.6, 212.0], [32.7, 213.0], [32.8, 213.0], [32.9, 213.0], [33.0, 213.0], [33.1, 214.0], [33.2, 214.0], [33.3, 214.0], [33.4, 214.0], [33.5, 215.0], [33.6, 215.0], [33.7, 215.0], [33.8, 215.0], [33.9, 216.0], [34.0, 216.0], [34.1, 216.0], [34.2, 216.0], [34.3, 216.0], [34.4, 216.0], [34.5, 217.0], [34.6, 217.0], [34.7, 217.0], [34.8, 217.0], [34.9, 218.0], [35.0, 218.0], [35.1, 218.0], [35.2, 219.0], [35.3, 219.0], [35.4, 219.0], [35.5, 220.0], [35.6, 220.0], [35.7, 220.0], [35.8, 220.0], [35.9, 221.0], [36.0, 221.0], [36.1, 221.0], [36.2, 221.0], [36.3, 222.0], [36.4, 222.0], [36.5, 222.0], [36.6, 222.0], [36.7, 222.0], [36.8, 222.0], [36.9, 223.0], [37.0, 223.0], [37.1, 223.0], [37.2, 223.0], [37.3, 223.0], [37.4, 224.0], [37.5, 224.0], [37.6, 224.0], [37.7, 224.0], [37.8, 224.0], [37.9, 224.0], [38.0, 225.0], [38.1, 225.0], [38.2, 225.0], [38.3, 226.0], [38.4, 226.0], [38.5, 226.0], [38.6, 226.0], [38.7, 226.0], [38.8, 227.0], [38.9, 227.0], [39.0, 227.0], [39.1, 227.0], [39.2, 228.0], [39.3, 228.0], [39.4, 228.0], [39.5, 228.0], [39.6, 228.0], [39.7, 229.0], [39.8, 229.0], [39.9, 229.0], [40.0, 230.0], [40.1, 230.0], [40.2, 230.0], [40.3, 230.0], [40.4, 230.0], [40.5, 230.0], [40.6, 231.0], [40.7, 231.0], [40.8, 231.0], [40.9, 231.0], [41.0, 231.0], [41.1, 231.0], [41.2, 232.0], [41.3, 232.0], [41.4, 232.0], [41.5, 232.0], [41.6, 232.0], [41.7, 232.0], [41.8, 233.0], [41.9, 233.0], [42.0, 233.0], [42.1, 233.0], [42.2, 233.0], [42.3, 233.0], [42.4, 234.0], [42.5, 234.0], [42.6, 234.0], [42.7, 234.0], [42.8, 234.0], [42.9, 235.0], [43.0, 235.0], [43.1, 235.0], [43.2, 236.0], [43.3, 236.0], [43.4, 236.0], [43.5, 236.0], [43.6, 237.0], [43.7, 237.0], [43.8, 237.0], [43.9, 238.0], [44.0, 238.0], [44.1, 238.0], [44.2, 238.0], [44.3, 238.0], [44.4, 238.0], [44.5, 238.0], [44.6, 239.0], [44.7, 239.0], [44.8, 239.0], [44.9, 239.0], [45.0, 240.0], [45.1, 240.0], [45.2, 240.0], [45.3, 240.0], [45.4, 241.0], [45.5, 241.0], [45.6, 241.0], [45.7, 241.0], [45.8, 242.0], [45.9, 242.0], [46.0, 242.0], [46.1, 242.0], [46.2, 242.0], [46.3, 243.0], [46.4, 243.0], [46.5, 243.0], [46.6, 243.0], [46.7, 243.0], [46.8, 244.0], [46.9, 244.0], [47.0, 244.0], [47.1, 244.0], [47.2, 244.0], [47.3, 244.0], [47.4, 244.0], [47.5, 245.0], [47.6, 245.0], [47.7, 245.0], [47.8, 245.0], [47.9, 245.0], [48.0, 245.0], [48.1, 245.0], [48.2, 246.0], [48.3, 246.0], [48.4, 246.0], [48.5, 246.0], [48.6, 247.0], [48.7, 247.0], [48.8, 247.0], [48.9, 247.0], [49.0, 247.0], [49.1, 248.0], [49.2, 248.0], [49.3, 248.0], [49.4, 249.0], [49.5, 249.0], [49.6, 249.0], [49.7, 249.0], [49.8, 249.0], [49.9, 250.0], [50.0, 250.0], [50.1, 250.0], [50.2, 250.0], [50.3, 250.0], [50.4, 250.0], [50.5, 250.0], [50.6, 250.0], [50.7, 251.0], [50.8, 251.0], [50.9, 251.0], [51.0, 251.0], [51.1, 251.0], [51.2, 251.0], [51.3, 252.0], [51.4, 252.0], [51.5, 252.0], [51.6, 252.0], [51.7, 252.0], [51.8, 252.0], [51.9, 252.0], [52.0, 253.0], [52.1, 253.0], [52.2, 253.0], [52.3, 253.0], [52.4, 253.0], [52.5, 253.0], [52.6, 253.0], [52.7, 254.0], [52.8, 254.0], [52.9, 254.0], [53.0, 254.0], [53.1, 255.0], [53.2, 255.0], [53.3, 255.0], [53.4, 255.0], [53.5, 255.0], [53.6, 255.0], [53.7, 256.0], [53.8, 256.0], [53.9, 256.0], [54.0, 256.0], [54.1, 256.0], [54.2, 257.0], [54.3, 257.0], [54.4, 257.0], [54.5, 257.0], [54.6, 257.0], [54.7, 257.0], [54.8, 258.0], [54.9, 258.0], [55.0, 258.0], [55.1, 258.0], [55.2, 258.0], [55.3, 258.0], [55.4, 259.0], [55.5, 259.0], [55.6, 259.0], [55.7, 259.0], [55.8, 259.0], [55.9, 260.0], [56.0, 260.0], [56.1, 260.0], [56.2, 260.0], [56.3, 261.0], [56.4, 261.0], [56.5, 261.0], [56.6, 261.0], [56.7, 262.0], [56.8, 262.0], [56.9, 262.0], [57.0, 262.0], [57.1, 263.0], [57.2, 263.0], [57.3, 263.0], [57.4, 263.0], [57.5, 264.0], [57.6, 264.0], [57.7, 264.0], [57.8, 264.0], [57.9, 264.0], [58.0, 264.0], [58.1, 265.0], [58.2, 265.0], [58.3, 265.0], [58.4, 265.0], [58.5, 266.0], [58.6, 266.0], [58.7, 266.0], [58.8, 266.0], [58.9, 266.0], [59.0, 266.0], [59.1, 266.0], [59.2, 267.0], [59.3, 267.0], [59.4, 267.0], [59.5, 268.0], [59.6, 268.0], [59.7, 269.0], [59.8, 269.0], [59.9, 269.0], [60.0, 269.0], [60.1, 269.0], [60.2, 269.0], [60.3, 270.0], [60.4, 270.0], [60.5, 270.0], [60.6, 270.0], [60.7, 270.0], [60.8, 270.0], [60.9, 270.0], [61.0, 271.0], [61.1, 271.0], [61.2, 271.0], [61.3, 271.0], [61.4, 272.0], [61.5, 272.0], [61.6, 272.0], [61.7, 272.0], [61.8, 272.0], [61.9, 273.0], [62.0, 273.0], [62.1, 273.0], [62.2, 273.0], [62.3, 273.0], [62.4, 273.0], [62.5, 274.0], [62.6, 274.0], [62.7, 274.0], [62.8, 274.0], [62.9, 274.0], [63.0, 275.0], [63.1, 275.0], [63.2, 275.0], [63.3, 275.0], [63.4, 275.0], [63.5, 276.0], [63.6, 276.0], [63.7, 276.0], [63.8, 276.0], [63.9, 276.0], [64.0, 276.0], [64.1, 277.0], [64.2, 277.0], [64.3, 277.0], [64.4, 278.0], [64.5, 278.0], [64.6, 278.0], [64.7, 278.0], [64.8, 278.0], [64.9, 279.0], [65.0, 279.0], [65.1, 279.0], [65.2, 280.0], [65.3, 280.0], [65.4, 280.0], [65.5, 281.0], [65.6, 281.0], [65.7, 281.0], [65.8, 281.0], [65.9, 281.0], [66.0, 282.0], [66.1, 282.0], [66.2, 282.0], [66.3, 282.0], [66.4, 283.0], [66.5, 283.0], [66.6, 283.0], [66.7, 283.0], [66.8, 284.0], [66.9, 284.0], [67.0, 284.0], [67.1, 285.0], [67.2, 285.0], [67.3, 285.0], [67.4, 285.0], [67.5, 286.0], [67.6, 286.0], [67.7, 287.0], [67.8, 287.0], [67.9, 287.0], [68.0, 287.0], [68.1, 287.0], [68.2, 288.0], [68.3, 288.0], [68.4, 288.0], [68.5, 289.0], [68.6, 289.0], [68.7, 289.0], [68.8, 289.0], [68.9, 289.0], [69.0, 290.0], [69.1, 290.0], [69.2, 291.0], [69.3, 291.0], [69.4, 291.0], [69.5, 291.0], [69.6, 292.0], [69.7, 292.0], [69.8, 292.0], [69.9, 292.0], [70.0, 292.0], [70.1, 293.0], [70.2, 293.0], [70.3, 293.0], [70.4, 293.0], [70.5, 294.0], [70.6, 294.0], [70.7, 294.0], [70.8, 294.0], [70.9, 295.0], [71.0, 295.0], [71.1, 295.0], [71.2, 296.0], [71.3, 296.0], [71.4, 296.0], [71.5, 296.0], [71.6, 297.0], [71.7, 297.0], [71.8, 297.0], [71.9, 297.0], [72.0, 298.0], [72.1, 298.0], [72.2, 299.0], [72.3, 299.0], [72.4, 299.0], [72.5, 300.0], [72.6, 300.0], [72.7, 300.0], [72.8, 301.0], [72.9, 301.0], [73.0, 301.0], [73.1, 301.0], [73.2, 302.0], [73.3, 302.0], [73.4, 302.0], [73.5, 303.0], [73.6, 303.0], [73.7, 303.0], [73.8, 303.0], [73.9, 303.0], [74.0, 304.0], [74.1, 304.0], [74.2, 304.0], [74.3, 304.0], [74.4, 304.0], [74.5, 305.0], [74.6, 305.0], [74.7, 305.0], [74.8, 306.0], [74.9, 306.0], [75.0, 306.0], [75.1, 307.0], [75.2, 307.0], [75.3, 307.0], [75.4, 308.0], [75.5, 308.0], [75.6, 308.0], [75.7, 309.0], [75.8, 309.0], [75.9, 309.0], [76.0, 309.0], [76.1, 310.0], [76.2, 310.0], [76.3, 310.0], [76.4, 311.0], [76.5, 311.0], [76.6, 311.0], [76.7, 311.0], [76.8, 311.0], [76.9, 312.0], [77.0, 312.0], [77.1, 313.0], [77.2, 313.0], [77.3, 313.0], [77.4, 313.0], [77.5, 314.0], [77.6, 314.0], [77.7, 314.0], [77.8, 314.0], [77.9, 315.0], [78.0, 315.0], [78.1, 315.0], [78.2, 315.0], [78.3, 316.0], [78.4, 316.0], [78.5, 316.0], [78.6, 317.0], [78.7, 317.0], [78.8, 317.0], [78.9, 317.0], [79.0, 318.0], [79.1, 318.0], [79.2, 318.0], [79.3, 319.0], [79.4, 319.0], [79.5, 319.0], [79.6, 319.0], [79.7, 319.0], [79.8, 319.0], [79.9, 320.0], [80.0, 320.0], [80.1, 320.0], [80.2, 320.0], [80.3, 320.0], [80.4, 320.0], [80.5, 321.0], [80.6, 321.0], [80.7, 321.0], [80.8, 321.0], [80.9, 321.0], [81.0, 322.0], [81.1, 322.0], [81.2, 322.0], [81.3, 323.0], [81.4, 323.0], [81.5, 323.0], [81.6, 324.0], [81.7, 324.0], [81.8, 325.0], [81.9, 325.0], [82.0, 325.0], [82.1, 326.0], [82.2, 326.0], [82.3, 326.0], [82.4, 327.0], [82.5, 327.0], [82.6, 327.0], [82.7, 328.0], [82.8, 328.0], [82.9, 328.0], [83.0, 328.0], [83.1, 329.0], [83.2, 329.0], [83.3, 329.0], [83.4, 330.0], [83.5, 330.0], [83.6, 331.0], [83.7, 331.0], [83.8, 331.0], [83.9, 332.0], [84.0, 332.0], [84.1, 332.0], [84.2, 333.0], [84.3, 333.0], [84.4, 333.0], [84.5, 333.0], [84.6, 334.0], [84.7, 334.0], [84.8, 334.0], [84.9, 335.0], [85.0, 335.0], [85.1, 335.0], [85.2, 336.0], [85.3, 336.0], [85.4, 336.0], [85.5, 336.0], [85.6, 336.0], [85.7, 337.0], [85.8, 337.0], [85.9, 338.0], [86.0, 338.0], [86.1, 338.0], [86.2, 339.0], [86.3, 339.0], [86.4, 340.0], [86.5, 340.0], [86.6, 341.0], [86.7, 341.0], [86.8, 342.0], [86.9, 342.0], [87.0, 343.0], [87.1, 344.0], [87.2, 344.0], [87.3, 344.0], [87.4, 344.0], [87.5, 344.0], [87.6, 344.0], [87.7, 345.0], [87.8, 345.0], [87.9, 345.0], [88.0, 346.0], [88.1, 346.0], [88.2, 346.0], [88.3, 346.0], [88.4, 346.0], [88.5, 347.0], [88.6, 347.0], [88.7, 347.0], [88.8, 347.0], [88.9, 348.0], [89.0, 348.0], [89.1, 348.0], [89.2, 349.0], [89.3, 349.0], [89.4, 349.0], [89.5, 350.0], [89.6, 350.0], [89.7, 350.0], [89.8, 351.0], [89.9, 351.0], [90.0, 352.0], [90.1, 352.0], [90.2, 353.0], [90.3, 353.0], [90.4, 354.0], [90.5, 354.0], [90.6, 354.0], [90.7, 355.0], [90.8, 355.0], [90.9, 356.0], [91.0, 357.0], [91.1, 358.0], [91.2, 358.0], [91.3, 360.0], [91.4, 360.0], [91.5, 360.0], [91.6, 361.0], [91.7, 362.0], [91.8, 362.0], [91.9, 363.0], [92.0, 364.0], [92.1, 364.0], [92.2, 365.0], [92.3, 365.0], [92.4, 366.0], [92.5, 366.0], [92.6, 367.0], [92.7, 368.0], [92.8, 369.0], [92.9, 369.0], [93.0, 369.0], [93.1, 370.0], [93.2, 372.0], [93.3, 372.0], [93.4, 373.0], [93.5, 373.0], [93.6, 374.0], [93.7, 375.0], [93.8, 375.0], [93.9, 376.0], [94.0, 378.0], [94.1, 379.0], [94.2, 380.0], [94.3, 380.0], [94.4, 380.0], [94.5, 381.0], [94.6, 382.0], [94.7, 382.0], [94.8, 383.0], [94.9, 383.0], [95.0, 384.0], [95.1, 385.0], [95.2, 387.0], [95.3, 387.0], [95.4, 388.0], [95.5, 391.0], [95.6, 392.0], [95.7, 397.0], [95.8, 398.0], [95.9, 400.0], [96.0, 401.0], [96.1, 404.0], [96.2, 405.0], [96.3, 407.0], [96.4, 409.0], [96.5, 412.0], [96.6, 416.0], [96.7, 417.0], [96.8, 423.0], [96.9, 428.0], [97.0, 432.0], [97.1, 435.0], [97.2, 448.0], [97.3, 452.0], [97.4, 457.0], [97.5, 460.0], [97.6, 464.0], [97.7, 466.0], [97.8, 470.0], [97.9, 472.0], [98.0, 476.0], [98.1, 477.0], [98.2, 483.0], [98.3, 491.0], [98.4, 496.0], [98.5, 499.0], [98.6, 519.0], [98.7, 540.0], [98.8, 551.0], [98.9, 554.0], [99.0, 583.0], [99.1, 597.0], [99.2, 616.0], [99.3, 632.0], [99.4, 648.0], [99.5, 761.0], [99.6, 834.0], [99.7, 1010.0], [99.8, 1192.0], [99.9, 1361.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 1656.0, "series": [{"data": [[600.0, 13.0], [700.0, 2.0], [45000.0, 1.0], [200.0, 1656.0], [800.0, 4.0], [900.0, 1.0], [1000.0, 3.0], [1100.0, 2.0], [300.0, 818.0], [1200.0, 2.0], [75500.0, 1.0], [1300.0, 1.0], [400.0, 94.0], [100.0, 877.0], [1600.0, 1.0], [500.0, 20.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 75500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3395.0, "series": [{"data": [[0.0, 90.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 10.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 3395.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 11.280254777070065, "minX": 1.74954246E12, "maxY": 52.622342018568496, "series": [{"data": [[1.74954246E12, 52.622342018568496], [1.74954252E12, 11.280254777070065]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74954252E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 183.0909090909091, "minX": 1.0, "maxY": 75561.0, "series": [{"data": [[2.0, 45084.0], [3.0, 1630.0], [4.0, 244.5], [5.0, 277.75], [6.0, 195.5], [7.0, 230.33333333333334], [8.0, 261.0], [9.0, 221.0], [10.0, 228.93560606060615], [11.0, 183.0909090909091], [12.0, 214.98102016607348], [13.0, 257.74074074074076], [14.0, 257.0], [15.0, 240.5], [16.0, 223.5], [17.0, 247.5], [18.0, 231.5], [20.0, 222.25], [22.0, 379.5], [24.0, 221.0], [25.0, 218.5], [26.0, 258.5], [27.0, 219.0], [28.0, 236.2857142857143], [29.0, 224.33333333333334], [30.0, 212.4], [31.0, 225.5], [32.0, 221.0], [33.0, 254.5], [34.0, 205.5], [37.0, 245.9], [36.0, 232.4], [38.0, 231.25], [39.0, 220.0], [40.0, 221.75], [41.0, 252.0], [42.0, 207.33333333333334], [44.0, 195.0], [45.0, 194.33333333333334], [46.0, 350.09999999999997], [49.0, 265.0], [50.0, 263.0], [51.0, 298.0], [52.0, 243.83333333333337], [53.0, 237.5], [54.0, 235.375], [55.0, 313.4], [56.0, 255.7142857142857], [57.0, 279.0], [59.0, 248.33333333333334], [58.0, 287.8], [60.0, 235.75], [61.0, 231.0], [63.0, 258.3333333333333], [62.0, 265.625], [64.0, 242.0], [65.0, 287.28571428571433], [66.0, 264.0], [67.0, 273.375], [68.0, 315.3333333333333], [69.0, 302.0], [71.0, 292.5], [72.0, 363.0], [73.0, 282.0], [74.0, 270.0], [75.0, 270.2], [76.0, 249.0], [78.0, 367.0], [79.0, 335.0], [85.0, 287.5714285714286], [86.0, 323.8888888888889], [89.0, 350.7142857142858], [90.0, 349.0], [91.0, 302.52870493991963], [92.0, 324.02173913043464], [95.0, 348.48571428571427], [94.0, 301.0416666666666], [93.0, 335.2289156626506], [96.0, 291.40000000000003], [97.0, 314.91326530612236], [98.0, 324.1081081081081], [99.0, 281.5950413223141], [100.0, 285.20408163265296], [1.0, 75561.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[50.76573226544627, 297.3258009153316]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 631.8, "minX": 1.74954246E12, "maxY": 71470.0, "series": [{"data": [[1.74954246E12, 71470.0], [1.74954252E12, 3146.1666666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74954246E12, 13522.95], [1.74954252E12, 631.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74954252E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 263.7996406109611, "minX": 1.74954246E12, "maxY": 1010.3439490445861, "series": [{"data": [[1.74954246E12, 263.7996406109611], [1.74954252E12, 1010.3439490445861]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74954252E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 263.7843665768191, "minX": 1.74954246E12, "maxY": 723.1719745222928, "series": [{"data": [[1.74954246E12, 263.7843665768191], [1.74954252E12, 723.1719745222928]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74954252E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 120.863432165319, "minX": 1.74954246E12, "maxY": 867.4713375796177, "series": [{"data": [[1.74954246E12, 120.863432165319], [1.74954252E12, 867.4713375796177]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74954252E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 193.0, "minX": 1.74954246E12, "maxY": 75561.0, "series": [{"data": [[1.74954246E12, 653.0], [1.74954252E12, 75561.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74954246E12, 193.0], [1.74954252E12, 75561.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74954246E12, 519.8000000000003], [1.74954252E12, 75561.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74954246E12, 652.9499999999999], [1.74954252E12, 75561.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74954246E12, 264.0], [1.74954252E12, 75561.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.74954246E12, 607.0499999999995], [1.74954252E12, 75561.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74954252E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 178.0, "minX": 1.0, "maxY": 75561.0, "series": [{"data": [[8.0, 249.5], [1.0, 75561.0], [37.0, 260.0], [42.0, 254.5], [29.0, 303.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 260.0], [32.0, 195.5], [35.0, 224.5], [37.0, 211.0], [39.0, 206.0], [38.0, 221.0], [42.0, 192.5], [43.0, 204.0], [44.0, 193.5], [45.0, 206.0], [47.0, 186.0], [46.0, 192.5], [49.0, 188.0], [48.0, 178.0], [3.0, 223.0], [51.0, 181.0], [50.0, 198.0], [56.0, 180.5], [145.0, 265.0], [222.0, 266.0], [239.0, 310.0], [1.0, 45084.0], [273.0, 288.0], [292.0, 293.5], [289.0, 308.0], [323.0, 312.0], [26.0, 340.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 323.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 75561.0, "series": [{"data": [[8.0, 249.0], [1.0, 75561.0], [37.0, 260.0], [42.0, 254.5], [29.0, 303.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 260.0], [32.0, 195.5], [35.0, 224.5], [37.0, 211.0], [39.0, 206.0], [38.0, 221.0], [42.0, 192.5], [43.0, 204.0], [44.0, 193.5], [45.0, 206.0], [47.0, 186.0], [46.0, 192.5], [49.0, 188.0], [48.0, 178.0], [3.0, 223.0], [51.0, 181.0], [50.0, 198.0], [56.0, 180.5], [145.0, 265.0], [222.0, 266.0], [239.0, 310.0], [1.0, 0.0], [273.0, 288.0], [292.0, 293.5], [289.0, 308.0], [323.0, 312.0], [26.0, 340.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 323.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.533333333333333, "minX": 1.74954246E12, "maxY": 55.733333333333334, "series": [{"data": [[1.74954246E12, 55.733333333333334], [1.74954252E12, 2.533333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74954252E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74954246E12, "maxY": 53.983333333333334, "series": [{"data": [[1.74954246E12, 1.6666666666666667], [1.74954252E12, 0.016666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.74954246E12, 53.983333333333334], [1.74954252E12, 2.5833333333333335]], "isOverall": false, "label": "429", "isController": false}, {"data": [[1.74954252E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: java.net.SocketException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.74954252E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74954246E12, "maxY": 53.983333333333334, "series": [{"data": [[1.74954246E12, 1.6666666666666667], [1.74954252E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.74954246E12, 53.983333333333334], [1.74954252E12, 2.6]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74954252E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.74954246E12, "maxY": 53.983333333333334, "series": [{"data": [[1.74954246E12, 1.6666666666666667], [1.74954252E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.74954246E12, 53.983333333333334], [1.74954252E12, 2.6]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.74954252E12, "title": "Total Transactions Per Second"}},
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

