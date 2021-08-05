import React from 'react';

const List = props => {
  const {list, handleDetail} = props;
  if (list.length > 0) {
    return (
      <div className='row'>
        {list.map((el, index) => {
          const {Title, Type, Year, Poster, imdbID} = el;
          return (
            <div key={index} className='list-movie col-md-6'>
              <div className='list-poster'>
                <img src={Poster} width='200px' />
              </div>
              <div className='list-detail'>
                <table className='list-table'>
                  <tr>
                    <td>Title</td>
                    <td>:</td>
                    <td>{Title}</td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>:</td>
                    <td>{Type}</td>
                  </tr>
                  <tr>
                    <td>Year</td>
                    <td>:</td>
                    <td>{Year}</td>
                  </tr>
                </table>
                <div for='link' className='list-link' onClick={() => handleDetail(imdbID)} >
                  <a id='link' href='/detail'>Detail</a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  } 
  return (
    <h6>The movie doesn't exist</h6>
  );
}

export default List;