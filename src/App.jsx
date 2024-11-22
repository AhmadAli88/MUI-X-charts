import './App.css';
import BasicArea from './components/AreaChart';
import BarOverviewDemo from './components/BarChartExample';
import GridDemo from './components/GridDemo';
import BasicLineChart from './components/LineChartExample';
import StackedAreas from './components/StackedAreas';


function App() {
  return (
    <div>
      <BasicLineChart />
      <BarOverviewDemo/>
      <BasicArea/>
      <StackedAreas/>
      <GridDemo/>
    </div>
  );
}

export default App;
