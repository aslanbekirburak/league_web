import React,{useEffect, useState} from 'react'
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'

function App() {
  const getList =()=>{
    var evtSource = new EventSource('http://localhost:8082');
    console.log("pressed")
    evtSource.onmessage = function(e) {
      console.log(e.data)
    }
  }
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
     <button onClick={() => getList()}>Start Week</button>
        <ReactTable
        data={[]}
        columns={columns}
        />
      </div>
    </div>
  );
}

export default App;