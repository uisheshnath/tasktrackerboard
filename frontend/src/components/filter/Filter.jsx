import React from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function Filter() {
  return (
    <>
      <div className="datepicker d-flex justify-content-end align-items-center gap-2">
                <DatePicker
                    dateFormat="dd-MMM-yyyy"
                />
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
    </>
  )
}


function Another(){
    return (
        <div>
            <h1>Hi Another</h1>
        </div>
    )
}

export default Filter;
export {Another}