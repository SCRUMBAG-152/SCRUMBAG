import { CSVLink, CSVDownload } from "react-csv";
import React, { Component } from 'react';

const csvData = [
    ["firstname", "lastname", "email"],
    ["Smith", "Tom", "tom@smith.com"],
    ["Doe", "Jane", "JaneTheDoe@gmail.com"],
    ["Test3", "Mary", "test@test.com"]
  ];
  


class ExportData extends Component {
    render() {
      
      return (
        <div>
                <h1>Testing for export</h1>
            
              
              <CSVLink data={csvData} filename={"scrumbag_data.csv"}>Download me</CSVLink>
        

      </div>

      )
        }
    }


    export default ExportData