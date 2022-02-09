import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryVoronoiContainer,
  VictoryAxis,
} from 'victory-native';
import {smallStockData as stockData} from '../../data/mockdata/smallStockData';
// import {stockData} from '../../data/mockdata/stockdata';

const Screen1: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Victory Graph</Text>
      <VictoryChart
        animate
        theme={VictoryTheme.material}
        domainPadding={{y: 10}}
        containerComponent={
          <VictoryVoronoiContainer
            mouseFollowTooltips
            voronoiDimension="x"
            labels={({datum}) =>
              `Date: ${new Date(datum.Date).toDateString()},
              High: ${datum.High}, Low: ${datum.Low}`
            }
          />
        }>
        <VictoryAxis
          label="Opening Date"
          style={{
            // axis: {stroke: 'transparent'},
            ticks: {stroke: 'transparent'},
            tickLabels: {fill: 'transparent'},
          }}
        />
        <VictoryAxis
          dependentAxis
          label="Highest Return"
          style={{
            // axis: {stroke: 'transparent'},
            ticks: {stroke: 'transparent'},
            tickLabels: {fill: 'transparent'},
          }}
        />
        <VictoryLine
          animate={{duration: 4000, onLoad: {duration: 1400}}}
          style={{
            data: {stroke: '#00e676', strokeWidth: 2, strokeLinecap: 'round'},
            parent: {border: '5px solid #ededed'},
          }}
          data={stockData}
          interpolation="natural"
          x={'High'}
          y={'Low'}
        />
      </VictoryChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
});

export default React.memo(Screen1);
