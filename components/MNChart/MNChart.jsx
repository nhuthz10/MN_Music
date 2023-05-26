import {StyleSheet, View} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const chartConfig = {
  backgroundColor: '#f9dbdb',
  backgroundGradientFrom: '#f9dbdb',
  backgroundGradientTo: '#f9dbdb',
  fillShadowGradient: '#ed116d',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
    fontStyle: 'normal',
  },
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  verticalTickCount: 0,
  horizontalTickCount: 0,
};

const MNChart = ({dataChart}) => {
  const getLabels = () => {
    let arr = [];
    dataChart.chart.times.slice(-10).forEach(item => {
      arr.push(item.hour);
    });
    return arr;
  };

  const getData = id => {
    let arr = [];

    dataChart.chart.items[dataChart.items[id].encodeId]
      .slice(-10)
      .forEach(item => {
        arr.push(item.counter);
      });
    return arr;
  };
  return (
    <View style={styles.container}>
      <LineChart
        style={styles.chart}
        data={{
          labels: getLabels(),
          datasets: [
            {
              data: getData(0),
              color: (opacity = 1) => '#2979ff',
              strokeWidth: 2, // optional
            },
            {
              data: getData(1),
              color: (opacity = 1) => '#07a787',
              strokeWidth: 2, // optional
            },
            {
              data: getData(2),
              color: (opacity = 1) => '#ff4500',
              strokeWidth: 2, // optional
            },
          ],
        }}
        width={screenWidth}
        height={270}
        chartConfig={chartConfig}
        bezier
        withVerticalLines={false}
        withHorizontalLines={false}
        withHorizontalLabels={false}
      />
    </View>
  );
};

export default MNChart;

const styles = StyleSheet.create({
  chart: {
    marginTop: 20,
    marginLeft: -30,
  },
  container: {
    borderColor: '#9DB2BF',
    borderBottomWidth: 1,
    marginBottom: 16,
  },
});
