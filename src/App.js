import React, { useEffect } from 'react'
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'

function App() {
  // const getList =()=>{
  //   var evtSource = new EventSource('http://localhost:8082');
  //   console.log("pressed")
  //   evtSource.onmessage = function(e) {
  //     console.log(e.data)
  //   }
  // }
  
  useEffect(() => {
    var evtSource = new EventSource('http://localhost:8082/start');
    console.log("pressed",evtSource)
    evtSource.onmessage = e => {
      console.log(e.data)
      // If i would get the data,ı put it on the table but ı did't get :(
      // To fill the Table i i use useState for state management and update table every 5 seconds
    }
  }, [])
  const columns = [{
    Header: 'Team Name',
    accessor: 'Name'
  },{
    Header: 'Top Scorer',
    accessor: 'scorer'
  },{
    Header: 'Top Assist',
    accessor: 'assist'
  }, {
    Header: 'Top 2 pointer',
    accessor: 'twoPointer'
  }, {
    Header: 'Top 3 pointer',
    accessor: 'threePointer'
  }
] 
  return (
    <div>
     <div style={{marginRight:100,marginLeft:100}}>
     {/* <button onClick={() => getList()}>Play Week</button> */}
        <ReactTable
        data={[]}
        columns={columns}
        />
      </div>
    </div>
  );
}

export default App;
